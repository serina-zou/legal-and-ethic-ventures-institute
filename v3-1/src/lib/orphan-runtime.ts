"use client";

/**
 * Prevent single-word last lines (orphans) across responsive reflow.
 * Runs after layout and again on viewport/font/reveal changes.
 */

const BLOCK_SELECTOR = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "li",
  "blockquote",
  "figcaption",
  "[data-orphan-block]",
].join(",");

type WordRef = { node: Text; start: number; end: number; text: string };

export function significantWordCount(text: string): number {
  return (text.trim().match(/\S+/g) ?? []).filter((w) =>
    /[A-Za-z0-9]/.test(w),
  ).length;
}

function hardenHyphensInTree(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }
  for (const node of nodes) {
    if (!node.nodeValue || !/\w-\w/.test(node.nodeValue)) continue;
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, svg, noscript")) continue;
    node.nodeValue = node.nodeValue.replace(/(\w)-(\w)/g, "$1\u2011$2");
  }
}

function collectTextNodes(block: HTMLElement): Text[] {
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let n = walker.nextNode();
  while (n) {
    textNodes.push(n as Text);
    n = walker.nextNode();
  }
  return textNodes;
}

function collectSignificantWords(textNodes: Text[]): WordRef[] {
  const words: WordRef[] = [];
  for (const node of textNodes) {
    const value = node.nodeValue ?? "";
    const re = /\S+/g;
    let match: RegExpExecArray | null;
    while ((match = re.exec(value))) {
      if (/[A-Za-z0-9]/.test(match[0])) {
        words.push({
          node,
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
        });
      }
    }
  }
  return words;
}

export function lastLineWordCount(block: HTMLElement): number {
  const text = block.innerText.replace(/\s+/g, " ").trim();
  if (!text) return 0;

  const textNodes = collectTextNodes(block);
  if (!textNodes.length) return 0;

  const lastNode = textNodes[textNodes.length - 1];
  const lastLen = lastNode.nodeValue?.length ?? 0;
  if (!lastLen) return 0;

  const endRange = document.createRange();
  endRange.setStart(lastNode, Math.max(0, lastLen - 1));
  endRange.setEnd(lastNode, lastLen);
  const endRect = endRange.getBoundingClientRect();
  if (!endRect.height) return significantWordCount(text);

  const lineTop = endRect.top;
  const lineBottom = endRect.bottom;
  const tolerance = Math.max(2, endRect.height * 0.4);

  let lastLineWords = 0;
  const words = collectSignificantWords(textNodes);
  for (const word of words) {
    const range = document.createRange();
    range.setStart(word.node, word.start);
    range.setEnd(word.node, word.end);
    const rects = range.getClientRects();
    const rect = rects[rects.length - 1];
    if (!rect || !rect.height) continue;
    const midY = (rect.top + rect.bottom) / 2;
    if (midY >= lineTop - tolerance && midY <= lineBottom + tolerance) {
      lastLineWords += 1;
    }
  }

  return lastLineWords;
}

/** Replace breakable spaces between two word refs with nbsp. */
function glueWordPair(a: WordRef, b: WordRef): boolean {
  if (a.node === b.node) {
    const value = a.node.nodeValue ?? "";
    const mid = value.slice(a.end, b.start);
    if (!/[ \t]/.test(mid)) return false;
    a.node.nodeValue =
      value.slice(0, a.end) + mid.replace(/[ \t]+/g, "\u00A0") + value.slice(b.start);
    return true;
  }

  // Cross-node: remove trailing breakable space on a, leading on b, append nbsp+bWord to a
  const aVal = a.node.nodeValue ?? "";
  const bVal = b.node.nodeValue ?? "";
  const aTail = aVal.slice(a.end);
  const bHead = bVal.slice(0, b.start);
  const bWordAndRest = bVal.slice(b.start);

  if (![aTail, bHead].some((s) => /[ \t]/.test(s)) && bWordAndRest.startsWith("\u00A0")) {
    return false;
  }

  a.node.nodeValue = `${aVal.slice(0, a.end)}\u00A0${bWordAndRest}`;
  b.node.nodeValue = bVal.slice(0, b.start).replace(/[ \t]+/g, "");
  return true;
}

/**
 * Glue the last N significant words together by converting breakable spaces
 * between them to nbsp. Starts at N=2 and the caller expands by repeating.
 */
function glueLastSignificantWords(block: HTMLElement, count: number): boolean {
  const words = collectSignificantWords(collectTextNodes(block));
  if (words.length < count) return false;

  const start = words.length - count;
  let changed = false;

  // Walk pairs from left to right within the trailing group so offsets stay valid
  // after earlier edits by re-collecting each time.
  for (let i = start; i < words.length - 1; i += 1) {
    const fresh = collectSignificantWords(collectTextNodes(block));
    if (fresh.length < count) return changed;
    const from = fresh.length - count;
    const a = fresh[from + (i - start)];
    const b = fresh[from + (i - start) + 1];
    if (!a || !b) break;
    if (glueWordPair(a, b)) changed = true;
  }

  return changed;
}

function fixBlock(block: HTMLElement) {
  if (significantWordCount(block.innerText) < 2) return;

  // Progressively keep more trailing words together until last line has ≥2
  // significant words (handles "&" and similar non-word tokens between them).
  for (let keep = 2; keep <= 8; keep += 1) {
    const count = lastLineWordCount(block);
    if (count === 0 || count >= 2) return;
    if (!glueLastSignificantWords(block, keep)) return;
  }
}

const INLINE_CHILD = /^(SPAN|A|STRONG|EM|B|I|BR|MARK|SMALL|CODE|SVG)$/;

function isProseContainer(el: Element): boolean {
  if (!(el instanceof HTMLElement)) return false;
  if (el.closest("nav, script, style, svg")) return false;
  if (/^(P|H[1-6]|LI|BLOCKQUOTE|FIGCAPTION)$/.test(el.tagName)) return true;
  if (el.hasAttribute("data-orphan-block")) return true;
  if (el.tagName !== "DIV") return false;

  // Leaf prose div: only inline / empty children (no nested layout blocks)
  for (const child of el.children) {
    if (!INLINE_CHILD.test(child.tagName)) return false;
  }
  return significantWordCount(el.innerText) >= 2;
}

function collectBlocks(root: ParentNode): HTMLElement[] {
  const found = new Set<HTMLElement>();
  root.querySelectorAll<HTMLElement>(BLOCK_SELECTOR).forEach((el) => {
    if (isProseContainer(el)) found.add(el);
  });
  // Catch prose divs the tag selector misses
  root.querySelectorAll<HTMLElement>("div").forEach((el) => {
    if (isProseContainer(el)) found.add(el);
  });
  return [...found];
}

export function fixOrphans(root: ParentNode = document) {
  hardenHyphensInTree(root);
  collectBlocks(root).forEach((block) => fixBlock(block));
}

export function auditOrphans(root: ParentNode = document) {
  const issues: {
    text: string;
    lastLineWords: number;
    tag: string;
  }[] = [];

  collectBlocks(root).forEach((block) => {
    if (significantWordCount(block.innerText) < 2) return;
    const count = lastLineWordCount(block);
    if (count > 0 && count < 2) {
      issues.push({
        tag: block.tagName.toLowerCase(),
        lastLineWords: count,
        text: block.innerText.replace(/\s+/g, " ").trim().slice(0, 160),
      });
    }
  });

  return issues;
}

export function createOrphanFixer(root: HTMLElement) {
  let timer = 0;
  const run = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      requestAnimationFrame(() => fixOrphans(root));
    }, 40);
  };

  run();
  window.addEventListener("resize", run);
  window.addEventListener("orientationchange", run);
  window.addEventListener("load", run, { once: true });
  if (document.fonts?.ready) {
    void document.fonts.ready.then(run);
  }

  const ro = new ResizeObserver(() => run());
  ro.observe(root);

  const mo = new MutationObserver(() => run());
  mo.observe(root, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => {
    window.clearTimeout(timer);
    window.removeEventListener("resize", run);
    window.removeEventListener("orientationchange", run);
    ro.disconnect();
    mo.disconnect();
  };
}
