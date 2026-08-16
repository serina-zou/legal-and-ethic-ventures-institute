"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.svg";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Journey", href: "/Journey" },
  {
    name: "Internships",
    href: "https://hephaestus.international/internships",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="mt-2 fixed top-0 left-[1%] right-[1%] z-50 w-[98%] rounded-full border border-border bg-background/85 px-4 py-1 text-foreground shadow-sm backdrop-blur-md sm:px-6">
      <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Image
            src={logo}
            alt="Legal & Ethics Ventures Institute"
            width={50}
            height={50}
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
            priority
          />
          <span className="truncate text-sm font-medium text-foreground transition-colors hover:text-primary sm:text-base lg:text-lg">
            Legal & Ethics Ventures Institute
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <nav className="hidden items-center gap-6 md:flex lg:gap-10 lg:pr-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-base font-medium text-foreground transition-colors hover:text-primary">
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted hover:text-primary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
