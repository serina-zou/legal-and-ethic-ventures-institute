"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createOrphanFixer } from "@/lib/orphan-runtime";

/**
 * Layout-aware orphan prevention for every viewport width.
 * Re-runs on resize, orientation change, and font load.
 */
export function OrphanGuard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return createOrphanFixer(node);
  }, []);

  return (
    <main ref={ref} id="main">
      {children}
    </main>
  );
}
