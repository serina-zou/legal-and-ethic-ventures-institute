/**
 * Multi-viewport orphan audit.
 * Usage: node scripts/audit-orphans.mjs [baseUrl]
 */
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:3000";
const VIEWPORTS = [
  { name: "mobile-sm", width: 320, height: 720 },
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "wide", width: 1920, height: 1080 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const AUDIT_FN = () => {
  const BLOCK_SELECTOR =
    "p, h1, h2, h3, h4, li, blockquote, figcaption, [data-orphan-block]";
  const INLINE_CHILD = /^(SPAN|A|STRONG|EM|B|I|BR|MARK|SMALL|CODE|SVG)$/;

  function significantWordCount(text) {
    return (text.trim().match(/\S+/g) || []).filter((w) =>
      /[A-Za-z0-9]/.test(w),
    ).length;
  }

  function isProseContainer(el) {
    if (!(el instanceof HTMLElement)) return false;
    if (el.closest("nav, script, style, svg")) return false;
    if (/^(P|H[1-6]|LI|BLOCKQUOTE|FIGCAPTION)$/.test(el.tagName)) return true;
    if (el.hasAttribute("data-orphan-block")) return true;
    if (el.tagName !== "DIV") return false;
    for (const child of el.children) {
      if (!INLINE_CHILD.test(child.tagName)) return false;
    }
    return significantWordCount(el.innerText) >= 2;
  }

  function collectBlocks() {
    const found = new Set();
    document.querySelectorAll(BLOCK_SELECTOR).forEach((el) => {
      if (isProseContainer(el)) found.add(el);
    });
    document.querySelectorAll("div").forEach((el) => {
      if (isProseContainer(el)) found.add(el);
    });
    return [...found];
  }

  function lastLineWordCount(block) {
    const text = block.innerText.replace(/\s+/g, " ").trim();
    if (!text) return 0;

    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let n = walker.nextNode();
    while (n) {
      textNodes.push(n);
      n = walker.nextNode();
    }
    if (!textNodes.length) return 0;

    const lastNode = textNodes[textNodes.length - 1];
    const lastLen = lastNode.nodeValue?.length || 0;
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
    for (const textNode of textNodes) {
      const value = textNode.nodeValue || "";
      const re = /\S+/g;
      let match;
      while ((match = re.exec(value))) {
        if (!/[A-Za-z0-9]/.test(match[0])) continue;
        const range = document.createRange();
        range.setStart(textNode, match.index);
        range.setEnd(textNode, match.index + match[0].length);
        const rects = range.getClientRects();
        const rect = rects[rects.length - 1];
        if (!rect || !rect.height) continue;
        const midY = (rect.top + rect.bottom) / 2;
        if (midY >= lineTop - tolerance && midY <= lineBottom + tolerance) {
          lastLineWords += 1;
        }
      }
    }
    return lastLineWords;
  }

  const issues = [];
  collectBlocks().forEach((block) => {
    if (significantWordCount(block.innerText) < 2) return;
    const count = lastLineWordCount(block);
    if (count > 0 && count < 2) {
      issues.push({
        tag: block.tagName.toLowerCase(),
        id: block.closest("section")?.id || "",
        lastLineWords: count,
        text: block.innerText.replace(/\s+/g, " ").trim().slice(0, 180),
      });
    }
  });
  return issues;
};

async function preparePage(page) {
  await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("main#main", { timeout: 30000 });
  await sleep(800);

  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.max(400, (await page.viewportSize()).height * 0.8);
  for (let y = 0; y < height; y += step) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await sleep(60);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.evaluate(() => window.dispatchEvent(new Event("resize")));
  await sleep(600);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const summary = [];

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: vp });
    await preparePage(page);
    const issues = await page.evaluate(AUDIT_FN);
    summary.push({ viewport: vp.name, width: vp.width, issues });
    await page.close();
  }

  await browser.close();

  let failed = 0;
  for (const row of summary) {
    const count = row.issues.length;
    failed += count;
    console.log(
      `\n[${row.viewport} ${row.width}px] ${count === 0 ? "PASS" : "FAIL"} — ${count} orphan block(s)`,
    );
    for (const issue of row.issues) {
      console.log(
        `  - #${issue.id || "?"} <${issue.tag}> lastLine=${issue.lastLineWords}: ${issue.text}`,
      );
    }
  }

  console.log(
    `\nDone. ${failed === 0 ? "All viewports clear." : `${failed} total orphan issue(s).`}`,
  );
  process.exit(failed === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
