import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  fullHeight = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-shell ${fullHeight ? "min-h-[100svh]" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

type AccentProps = {
  children: ReactNode;
  className?: string;
};

export function Orange({ children, className = "" }: AccentProps) {
  return <span className={`text-accent ${className}`.trim()}>{children}</span>;
}
Orange.displayName = "Orange";

export function Red({ children, className = "" }: AccentProps) {
  return <span className={`text-brand-red ${className}`.trim()}>{children}</span>;
}
Red.displayName = "Red";

export function BrandLogo({
  className = "h-14 w-auto",
  src = "/flolabs-logo.svg",
}: {
  className?: string;
  src?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="Legal & Ethics Ventures Institute" className={className} />
  );
}
BrandLogo.displayName = "BrandLogo";

export function Display({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      data-orphan-block
      className={`font-[family-name:var(--font-display)] font-bold tracking-tight text-white ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
