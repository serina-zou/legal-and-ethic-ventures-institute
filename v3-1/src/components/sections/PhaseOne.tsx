import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BrandLogo, Display, Orange, Red, Section } from "@/components/ui";

export function HeroSection() {
  return (
    <Section id="hero" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative min-h-[42vh] overflow-hidden image-enter lg:min-h-full">
          <Image
            src="/slides/page01_img03.jpeg"
            alt="Classical columns meeting circuit pathways under a night sky"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/40 lg:to-surface/60" />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-8 bg-surface px-6 py-16 text-center sm:px-12 lg:px-16">
          <div className="hero-enter flex flex-col items-center gap-8">
            <BrandLogo className="h-16 w-auto sm:h-20" />
            <Display as="h1" className="text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Legal & Ethics
              <br />
              Ventures Institute
            </Display>
            <div className="space-y-2 text-lg text-white/90 sm:text-xl">
              <p>
                <Red className="font-semibold">Elevating</Red> the game.
              </p>
              <p>From textbooks to real-world impact.</p>
              <p>
                No frontiers. <Red className="font-semibold">No limits.</Red>
              </p>
            </div>
          </div>
          <p className="hero-enter-delay mt-4 max-w-md text-sm text-white/70 sm:text-base">
            Advance your career. Be at the center of the future.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function WhoWeAreSection() {
  return (
    <Section id="who-we-are" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-6 bg-surface px-6 py-20 sm:px-12 lg:px-16 xl:px-20">
          <Reveal>
            <p className="text-xl font-semibold text-white sm:text-2xl">We are …</p>
          </Reveal>
          <Reveal delay={1}>
            <ul className="space-y-1 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-accent sm:text-4xl">
              <li>Not a law school.</li>
              <li>Not a clinic.</li>
              <li>Not a bootcamp.</li>
            </ul>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-2 max-w-xl text-center">
              <Display className="text-3xl sm:text-4xl lg:text-5xl">
                But A Legal & Ethics
                <br />
                Ventures Institute
              </Display>
              <p className="mt-4 text-base text-white/85 sm:text-lg">
                where curiosity meets courage, and law, AI, and ethics collide.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <p
              data-orphan-block
              className="mt-4 max-w-xl border-t border-white/20 pt-6 text-center text-sm leading-relaxed text-white/90 sm:text-base"
            >
              For <Orange className="font-semibold">students</Orange> finding their path,{" "}
              <Orange className="font-semibold">career changers</Orange>,{" "}
              <Orange className="font-semibold">international learners</Orange>, and{" "}
              <Orange className="font-semibold">
                innovators ready to shape the{"\u00A0"}future.
              </Orange>
            </p>
          </Reveal>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page02_img01.jpeg"
            alt="Futuristic boardroom with holographic Lady Justice"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

export function MazeSection() {
  return (
    <Section id="maze" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[48vh] lg:order-1 lg:min-h-full">
          <Image
            src="/slides/page03_img01.jpeg"
            alt="Stone maze with a glowing classical doorway"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 flex flex-col justify-center gap-8 bg-surface px-6 py-20 sm:px-12 lg:order-2 lg:px-16">
          <Reveal>
            <p className="text-base text-white/80 sm:text-lg">
              Where the legal world is a maze…
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Display className="text-3xl leading-snug sm:text-4xl lg:text-5xl">
              Breaking in shouldn&apos;t be harder than{" "}
              <Orange>learning</Orange>…
            </Display>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-white/90 sm:text-xl">
              Doors are <Orange className="font-semibold">closed</Orange>. Opportunities
              are <Orange className="font-semibold">rare</Orange>. Real practice?{" "}
              <Orange className="font-semibold">For the few</Orange>…
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Display className="text-2xl leading-snug sm:text-3xl lg:text-4xl">
              We&apos;re here to <Orange>widen the doors</Orange>,{" "}
              <Orange>ignite hands-on experience</Orange>, and{" "}
              <Orange>make it real</Orange> … All for you.
            </Display>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function AfterTheBarSection() {
  return (
    <Section id="after-the-bar" className="relative overflow-hidden">
      <Image
        src="/slides/page04_img01.jpeg"
        alt="Courtroom silhouette with legal and technology iconography"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <p className="text-xl font-medium text-white sm:text-2xl lg:text-3xl">
            We don&apos;t train you to pass the bar.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <Display className="mt-4 max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-6xl">
            We train you to{" "}
            <Orange>build what comes after it.</Orange>
          </Display>
        </Reveal>
      </div>
    </Section>
  );
}

const OFFERINGS = [
  {
    title: "Hands-on client work",
    color: "border-accent text-accent",
    badge: "bg-accent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 12h.01M12 12h.01M16 12h.01M7 17h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" strokeLinecap="round" />
        <path d="M9 9V7a3 3 0 016 0v2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI tools for the modern legal world",
    color: "border-[#c4a574] text-[#c4a574]",
    badge: "bg-[#c4a574]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="8" width="10" height="10" rx="2" />
        <path d="M12 4v4M9 18v2M15 18v2M7 12H5M19 12h-2" strokeLinecap="round" />
        <circle cx="10" cy="12" r="0.8" fill="currentColor" />
        <circle cx="14" cy="12" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Legal drafting, research, and strategy",
    color: "border-brand-red text-brand-red",
    badge: "bg-brand-red",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 4h8l3 3v13H7V4z" strokeLinejoin="round" />
        <path d="M15 4v3h3M9 11h6M9 14h6M9 17h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Startup building experience",
    color: "border-brand-red text-brand-red",
    badge: "bg-brand-red",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 19l5-2 9-9a2.1 2.1 0 00-3-3l-9 9-2 5z" strokeLinejoin="round" />
        <path d="M14 6l4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ethics & compliance training",
    color: "border-[#c4a574] text-[#c4a574]",
    badge: "bg-[#c4a574]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18M8 8l4-3 4 3M8 16l4 3 4-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Immediate impact on real projects - from day one",
    color: "border-accent text-accent",
    badge: "bg-accent",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function OfferSection() {
  return (
    <Section id="offer" className="bg-atmosphere flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="mb-14 text-3xl sm:text-4xl lg:text-5xl">We offer you</Display>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((item, index) => (
            <Reveal key={item.title} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
              <div
                className={`relative flex min-h-[9.5rem] items-center justify-center rounded-xl border-2 px-6 pb-8 pt-10 text-center ${item.color}`}
              >
                <span
                  className={`absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-white ${item.badge}`}
                >
                  {item.icon}
                </span>
                <p className="text-base font-semibold leading-snug text-white sm:text-lg">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    n: "1",
    title: "Legal AI Buddy & Humanoid Legal Assistant",
    body: "tools to help pro se litigants navigate small claims, immigration, or consumer disputes.",
  },
  {
    n: "2",
    title: "Experiential Ventures Pipeline for legal and ethics",
    body: "turn ideas into real-world impact.",
  },
  {
    n: "3",
    title: "Ethics & Legal Framework Research",
    body: "research and shape the rules guiding law, AI, and ethics.",
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-atmosphere flex items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl leading-snug sm:text-4xl">
            Robotics, AI & Legal Innovation - Your{" "}
            <Orange>legal playground</Orange>
          </Display>
          <p className="mt-4 text-white/85">
            Here&apos;s a glimpse of the kinds of projects and possibilities you could
            dive into:
          </p>
        </Reveal>

        <div className="mt-10 space-y-5">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.n} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex overflow-hidden rounded-md border border-brand-crimson/70 bg-surface-elevated">
                <div className="flex w-14 shrink-0 items-center justify-center bg-brand-crimson font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:w-16 sm:text-3xl">
                  {project.n}
                </div>
                <div className="flex flex-1 flex-col items-center justify-center px-5 py-6 text-center sm:px-8">
                  <h3 className="text-lg font-bold text-white sm:text-xl">{project.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
                    {project.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <p className="mt-10 text-center text-white/85">
            … and many more to come along the journey.{" "}
            <Orange className="font-semibold">This is just the beginning.</Orange>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const CHECKLIST = [
  "Have a passion for law, ethics, and AI?",
  "Want hands-on experience solving real-world legal challenges?",
  "Dream of building AI-powered tools, platforms, or innovations in law?",
  "Value flexibility, learning and contributing from anywhere, on your own schedule?",
  "Want to turn curiosity into real-world skills?",
];

export function DoYouSection() {
  return (
    <Section id="do-you" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <Display className="text-4xl text-brand-red sm:text-5xl">Do you…</Display>
          </Reveal>
          <ul className="mt-10 space-y-5">
            {CHECKLIST.map((item, index) => (
              <Reveal key={item} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <li className="flex gap-4 text-base text-white/90 sm:text-lg">
                  <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-[2px] bg-brand-crimson" />
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={4}>
            <div className="mt-10 max-w-xl border-t border-white/20 pt-8 text-center">
              <p className="text-lg sm:text-xl">
                If <Orange className="font-bold">YES</Orange>, this is where your{" "}
                <Orange className="font-bold">journey starts</Orange>.
              </p>
              <div className="mt-10 flex justify-center">
                <BrandLogo className="h-14 w-auto" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page07_img02.jpeg"
            alt="Professionals walking toward a luminous horizon on circuit pathways"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
