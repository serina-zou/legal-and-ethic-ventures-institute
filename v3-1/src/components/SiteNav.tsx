"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0c0d12]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="site-shell flex items-center justify-between gap-4 py-3">
        <a href="#hero" className="group flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/flolabs-logo.svg"
            alt=""
            className={`h-8 w-auto transition-transform duration-300 group-hover:scale-105 ${
              scrolled ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
            }`}
          />
          <span
            className={`font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white sm:text-base ${
              scrolled ? "" : "[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_12px_rgba(0,0,0,0.65)]"
            }`}
          >
            Legal & Ethics Ventures Institute
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-2.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white ${
                scrolled ? "" : "[text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white xl:hidden ${
            scrolled ? "" : "shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0c0d12]/98 py-4 xl:hidden">
          <ul className="site-shell grid gap-1 sm:grid-cols-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
