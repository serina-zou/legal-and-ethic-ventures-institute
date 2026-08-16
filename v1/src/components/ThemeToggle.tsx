"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore */
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let initial: "light" | "dark" = "dark";
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      if (stored === "light" || stored === "dark") initial = stored;
    } catch {
      /* ignore */
    }
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <span
        className="inline-flex h-10 w-10 shrink-0 rounded-full border border-border bg-muted"
        aria-hidden
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-foreground shadow-sm transition-colors hover:bg-muted hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" aria-hidden />
      ) : (
        <Moon className="h-5 w-5 text-primary" aria-hidden />
      )}
    </button>
  );
}
