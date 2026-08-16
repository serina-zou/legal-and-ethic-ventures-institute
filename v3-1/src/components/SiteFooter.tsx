"use client";

import { FormEvent, useState } from "react";
import { NAV_ITEMS } from "@/lib/nav";

const PROJECT_LINKS = [
  {
    label: "Athletic Performance Intelligence",
    href: "https://www.athleticperformanceintelligence.com/",
  },
  { label: "CAIPO", href: "https://www.caipo.ai/" },
  {
    label: "Connecting the Dots",
    href: "https://www.youtube.com/@flolabsinnovation/",
  },
  { label: "Cosmos Intelligence", href: "http://cosmosintelligence.org/" },
  { label: "Flo Travel", href: "https://www.flomadtravel.com/" },
  { label: "FloBrain", href: "https://www.flobrain.ai/" },
  {
    label: "FloLabs Innovations Group",
    href: "https://www.flolabsinnovations.com/",
  },
  {
    label: "FloLabs International",
    href: "https://www.flolabs.international/",
  },
  { label: "FloStudios", href: "https://www.flostudios.ai/" },
  {
    label: "Hephaestus International",
    href: "https://hephaestus.international/",
  },
  {
    label: "Innovation Bootcamp University",
    href: "https://www.bootcampuniversity.org/",
  },
  { label: "MoodChanger", href: "https://www.moodchanger.ai/" },
  {
    label: "Legal & Ethics Ventures Institute",
    href: "https://www.legalethicsventuresinstitute.com/",
  },
  { label: "RoboCollective", href: "https://www.robocollective.ai/" },
  {
    label: "Space Ventures Institute",
    href: "https://www.spaceventuresinstitute.com/",
  },
  { label: "TARRL", href: "https://tarrl.org/" },
] as const;

const COMPANY_LINKS = [
  { label: "Careers", href: "#join" },
  { label: "Contact Us", href: "#join" },
  {
    label: "Merch",
    href: "https://flolabsrd.notion.site/merch-background",
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@flolabsinnovation/",
    icon: YouTubeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flolabs-innovation/",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Flo-Labs-RD/61572285432918/",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/flolabsinnovations/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flomadlabs/",
    icon: TikTokIcon,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/FloLabs_Innovations/",
    icon: RedditIcon,
  },
] as const;

function FooterHeading({ children }: { children: string }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
  external,
  nowrap,
}: {
  href: string;
  children: string;
  external?: boolean;
  nowrap?: boolean;
}) {
  return (
    <a
      href={href}
      className={`block text-sm text-white/65 transition-colors hover:text-accent ${
        nowrap ? "whitespace-nowrap" : ""
      }`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onNewsletterSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a0b10]">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:gap-x-10 xl:gap-x-14">
        <div className="min-w-0 lg:max-w-xs xl:max-w-sm">
          <a href="#hero" className="group inline-flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/flolabs-logo.svg"
              alt=""
              className="mt-0.5 h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold leading-snug text-white sm:text-[15px]">
              Legal & Ethics Ventures Institute
            </span>
          </a>

          <p className="mt-4 text-sm leading-relaxed text-white/55">
            Elevating the game. From textbooks to real-world impact. A hands-on
            institute where law, ethics, and AI meet, building ventures that lead
            responsibly.
          </p>

          <div className="mt-8">
            <FooterHeading>Newsletter</FooterHeading>
            <p className="mt-2 text-sm text-white/55">
              Receive the newest FloLabs updates at:
            </p>
            <form
              onSubmit={onNewsletterSubmit}
              className="mt-3 flex w-full max-w-sm items-stretch overflow-hidden rounded-md border border-white/15 bg-white/[0.04]"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => {
                  setSubmitted(false);
                  setEmail(e.target.value);
                }}
                className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-11 shrink-0 items-center justify-center bg-accent text-[#0a0b10] transition-colors hover:bg-accent-soft"
              >
                <SendIcon />
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-xs text-accent">Thanks — you&apos;re on the list.</p>
            )}
          </div>

          <div className="mt-8">
            <FooterHeading>Social Media</FooterHeading>
            <ul className="mt-3 flex flex-wrap items-center gap-3.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex text-white/70 transition-colors hover:text-accent"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="shrink-0">
          <FooterHeading>Navigation</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <FooterLink href={`#${item.id}`}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 shrink-0 md:col-span-2 lg:col-auto">
          <FooterHeading>Projects</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {PROJECT_LINKS.map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href} external nowrap>
                  {item.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0">
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((item) => (
              <li key={item.label}>
                <FooterLink
                  href={item.href}
                  external={item.href.startsWith("http")}
                >
                  {item.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <p className="site-shell text-xs tracking-wide text-white/40">
          Live Long and Prosper
        </p>
      </div>
    </footer>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186 31.25 31.25 0 0 0 0 12.017a31.25 31.25 0 0 0 .502 5.831 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136A31.25 31.25 0 0 0 24 12.017a31.25 31.25 0 0 0-.502-5.831zM9.545 15.568V8.466l6.273 3.551-6.273 3.551z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1-.004-4.125 2.062 2.062 0 0 1 .004 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
    </svg>
  );
}

