import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BrandLogo, Display, Orange, Red, Section } from "@/components/ui";

const IN_MOTION = [
  {
    title: "Funding Opportunities",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
        <circle cx="24" cy="18" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="30" r="5.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="34" cy="30" r="5.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 15v6M21.5 18h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        Identifying and assessing EU, US, and private funding opportunities aligned with
        our <Orange className="font-semibold">strategic direction and mission</Orange>. A
        mission reflected in a{" "}
        <Orange className="font-semibold">learning-focused center of excellence</Orange>,
        scaling innovative solutions to reach those who need them most, and seeking{" "}
        <Orange className="font-semibold">partners and team members</Orange> who share the
        vision and can help pave the path forward.
      </>
    ),
  },
  {
    title: "Incentive & Corporate Structures",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
        <path
          d="M28 8c-6 0-10 5-10 12v4H12v16h24V24h-6v-4c0-4 2-8 6-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
    body: (
      <>
        Researching the feasibility and implementation of incentive mechanisms,{" "}
        <Orange className="font-semibold">i.e. equity and stock option plan</Orange>, within
        a corporate structure to support growth and alignment.
      </>
    ),
  },
  {
    title: "Data Privacy & AI Governance",
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 8v4M24 36v4M8 24h4M36 24h4M12.5 12.5l2.8 2.8M32.7 32.7l2.8 2.8M12.5 35.5l2.8-2.8M32.7 15.3l2.8-2.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    body: (
      <>
        Ongoing research into data protection and AI governance to inform responsible,
        future-ready decision-making. Embedding legal thinking early in development to
        ensure{" "}
        <Orange className="font-semibold">
          compliance is built in from the start
        </Orange>
        , not added later.
      </>
    ),
  },
];

export function InMotionSection() {
  return (
    <Section id="in-motion" className="bg-atmosphere flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl sm:text-4xl lg:text-5xl">
            In Motion: What We&apos;re Advancing Now
          </Display>
          <p className="mt-4 max-w-3xl text-white/85">
            <span className="underline decoration-white/70 underline-offset-4">
              We&apos;re not standing still.
            </span>{" "}
            The team&apos;s work is{" "}
            <Orange className="font-semibold">active and evolving</Orange>.
          </p>
          <p className="mt-3 max-w-3xl text-white/85">
            These initiatives are currently in motion, translating our foundations into
            practical impact and shaping what comes next.
          </p>
          <p className="mt-3 max-w-3xl text-white/85">
            Here is a glimpse of what we are working on…
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {IN_MOTION.map((item, index) => (
            <Reveal key={item.title} delay={(index + 1) as 1 | 2 | 3}>
              <article className="h-full">
                <div className="relative mb-5 mr-5 flex h-14 items-center justify-center bg-brand-red text-white">
                  <div
                    className="absolute inset-y-0 right-0 translate-x-full border-y-[28px] border-l-[18px] border-y-transparent border-l-brand-red"
                    aria-hidden
                  />
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-accent sm:text-xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const DEEP_DIVE = [
  {
    n: "01",
    title: "Legal Frameworks Review",
    body: (
      <>
        Identifying and summarizing relevant legislation, including the{" "}
        <Orange className="font-semibold">GDPR</Orange>, the{" "}
        <Orange className="font-semibold">EU AI Act</Orange>, and other applicable privacy
        and data governance laws.
      </>
    ),
  },
  {
    n: "02",
    title: "Comparative & Regulatory Analysis",
    body: (
      <>
        Reviewing available case law, regulatory guidance, and organizational best
        practices that reflect{" "}
        <Orange className="font-semibold">user-centric privacy models.</Orange>
      </>
    ),
  },
  {
    n: "03",
    title: "Emerging Trends Monitoring",
    body: (
      <>
        Ongoing monitoring of{" "}
        <Orange className="font-semibold">emerging legal</Orange>,{" "}
        <Orange className="font-semibold">policy</Orange>, and{" "}
        <Orange className="font-semibold">technological trends</Orange> in data protection
        and AI governance, including insights from expert forums and global discussions.
      </>
    ),
  },
  {
    n: "04",
    title: "Internal Application & Synthesis",
    body: (
      <>
        <Orange className="font-semibold">Translating complex</Orange> legal and governance
        research{" "}
        <Orange className="font-semibold">
          into clear, practical, and user-centered internal insights.
        </Orange>{" "}
        Synthesizing findings into preliminary notes and a concise summary report to inform
        future discussions and responsible next steps.
      </>
    ),
  },
];

export function DeepDiveSection() {
  return (
    <Section id="deep-dive" className="bg-atmosphere flex items-center" fullHeight>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl sm:text-4xl">
            Deep Dive: AI Governance & Data Privacy
          </Display>
          <p className="mt-2 text-xl font-semibold text-accent sm:text-2xl">
            A Foundational Pillar
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={1}>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                This initiative is an example of how the company strengthens its data
                privacy framework through a{" "}
                <Orange className="font-semibold">
                  user-centric and responsible approach
                </Orange>
                , particularly in the context of AI.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                From an ethics standpoint, we prioritize{" "}
                <Orange className="font-semibold">privacy-by-design</Orange> and{" "}
                <Orange className="font-semibold">responsible AI</Orange>, avoiding
                practices that compromise user trust, especially when handling highly
                sensitive health data.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                The work focuses on{" "}
                <Orange className="font-semibold">
                  preliminary legal and policy research
                </Orange>{" "}
                to gather insights, examples, and emerging practices that can inform future
                discussions and strategic decisions.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">
                Exploratory research, intended for internal review, serving as{" "}
                <Orange className="font-semibold">
                  a foundation for AI development with a user-centered focus.
                </Orange>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {DEEP_DIVE.map((item, index) => (
              <Reveal key={item.n} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <div className="py-6">
                  <div className="relative flex items-center">
                    <span className="relative z-10 bg-atmosphere pr-3 font-[family-name:var(--font-display)] text-sm font-semibold text-muted">
                      {item.n}
                    </span>
                    <span className="h-px flex-1 bg-brand-red" aria-hidden />
                  </div>
                  <div className="mt-4">
                    <h3 className="inline border-b border-white pb-0.5 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function PathForwardSection() {
  return (
    <Section id="path-forward" className="bg-surface">
      {/* PDF page 18: image left, text right */}
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[48vh] lg:order-1 lg:min-h-full">
          <Image
            src="/slides/page18_img01.jpeg"
            alt="Classical columns framing a glowing doorway with network overlay"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 flex flex-col justify-center px-6 py-20 sm:px-12 lg:order-2 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl lg:text-5xl">The Path Forward</Display>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              We&apos;re{" "}
              <Orange className="font-semibold">moving forward</Orange> with{" "}
              <Orange className="font-semibold">purpose</Orange>: from{" "}
              <Orange className="font-semibold">what we&apos;ve built</Orange> to{" "}
              <Orange className="font-semibold">what we are creating next.</Orange>
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              As we progress is about{" "}
              <Orange className="font-semibold">growth</Orange>,{" "}
              <Orange className="font-semibold">collaboration</Orange>, and turning
              challenges into{" "}
              <Orange className="font-semibold">opportunities</Orange>…{" "}
              <span className="underline decoration-white/70 underline-offset-4">
                Shaping the future responsibly.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const TIMELINE = [
  {
    roman: "I.",
    title: "Funding Pathways",
    body: (
      <>
        Building on prior research, we aim to provide a{" "}
        <Orange className="font-semibold">
          well-informed overview of EU and US funding opportunities
        </Orange>{" "}
        to support the company in identifying suitable calls and preparing for application.
      </>
    ),
  },
  {
    roman: "II.",
    title: "Team Expansion",
    body: (
      <>
        We are preparing to{" "}
        <Orange className="font-semibold">grow the legal team</Orange> to scale{" "}
        <Orange className="font-semibold">impact</Orange>, support emerging initiatives
        across the company, and{" "}
        <Orange className="font-semibold">support one another</Orange> as we move forward,{" "}
        <Orange className="font-semibold">together.</Orange>
      </>
    ),
  },
  {
    roman: "III.",
    title: "AI Legal Buddy",
    body: (
      <>
        Research and concept development for a{" "}
        <Orange className="font-semibold">B2B and B2C AI Legal Buddy</Orange>, forming part
        of a broader ecosystem of AI assistants. Building on market and landscape research
        to map demand, competitors, and potential features, informing product contribution
        and preparing for outreach as the product matures.
      </>
    ),
  },
  {
    roman: "IV.",
    title: "European Entity",
    body: (
      <>
        We are laying the groundwork to unlock growth through potential{" "}
        <Orange className="font-semibold">establishment of a European entity</Orange>,
        informed by research and strategic planning.
      </>
    ),
  },
  {
    roman: "V.",
    title: "Cross-Team Collaboration",
    body: (
      <>
        We are broadening the scope of the Legal & Ethics team to{" "}
        <Orange className="font-semibold">
          maintain and amplify collaboration across company verticals
        </Orange>
        , including but not limited to <Orange className="font-semibold">space</Orange>,{" "}
        <Orange className="font-semibold">quantum</Orange>, and{" "}
        <Orange className="font-semibold">CAIPO</Orange>. By stepping in where{" "}
        <Orange className="font-semibold">
          legal, ethical, and technological considerations
        </Orange>{" "}
        intersect, we <Orange className="font-semibold">support team collaboration</Orange>
        , provide insight, and{" "}
        <Orange className="font-semibold">help initiatives flourish</Orange>, ensuring our
        work drives{" "}
        <Orange className="font-semibold">responsible and informed innovation.</Orange>
      </>
    ),
  },
];

export function TimelineSection() {
  return (
    <Section id="timeline" className="bg-atmosphere flex items-center" fullHeight>
      <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-center text-3xl sm:text-4xl">
            Planned & Ready: A Timeline of the Next 12 Months
          </Display>
          <div className="mt-6 space-y-2 text-center text-base text-white/90 sm:text-lg">
            <p>
              <Orange className="font-semibold">Planned</Orange> where possible.
            </p>
            <p>
              <Orange className="font-semibold">Open</Orange> where necessary. Some{" "}
              <Orange className="font-semibold">paths</Orange> are{" "}
              <Orange className="font-semibold">defined</Orange>.{" "}
              <Orange className="font-semibold">Others</Orange> will{" "}
              <Orange className="font-semibold">emerge</Orange> as we move forward.
            </p>
            <p className="pt-2 font-bold text-white">
              WE are <Orange className="font-bold">ready</Orange> for what comes next…
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-10">
          {TIMELINE.map((item, index) => (
            <Reveal key={item.roman} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {item.roman} {item.title}
                </h3>
                <p className="mt-3 border-l-2 border-brand-red pl-5 text-sm leading-relaxed text-white/85 sm:text-base">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const LOOKING_AHEAD = [
  {
    title: "Regulatory Shifts",
    body: (
      <>
        New <Orange className="font-semibold">governance</Orange> and{" "}
        <Orange className="font-semibold">compliance questions</Orange> as frameworks
        evolve
      </>
    ),
  },
  {
    title: "Product-Driven Challenges",
    body: (
      <>
        <Orange className="font-semibold">Legal</Orange> and{" "}
        <Orange className="font-semibold">ethical questions</Orange> emerging from new
        tools and features
      </>
    ),
  },
  {
    title: "Growth & Funding Triggers",
    body: (
      <>
        <Orange className="font-semibold">Strategic needs</Orange> arising from expansion,
        partnerships, or investment
      </>
    ),
  },
  {
    title: "Ethics in Innovation",
    body: (
      <>
        Uncharted questions at the{" "}
        <Orange className="font-semibold">
          intersection of technology, users, and responsibility
        </Orange>
      </>
    ),
  },
];

export function LookingAheadSection() {
  return (
    <Section id="looking-ahead" className="bg-surface">
      {/* PDF page 20: image left, text right */}
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[48vh] lg:order-1 lg:min-h-full">
          <Image
            src="/slides/page20_img01.jpeg"
            alt="Futuristic corridor with glowing circuit pathways"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 flex flex-col justify-center px-6 py-20 sm:px-12 lg:order-2 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl lg:text-5xl">Looking Ahead…</Display>
          </Reveal>
          <ul className="mt-10 space-y-8">
            {LOOKING_AHEAD.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <li>
                  <h3 className="inline border-b border-white pb-0.5 text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function JoinSection() {
  return (
    <Section id="join" className="bg-surface">
      {/* PDF page 21: text left (centered), image right */}
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center sm:px-12 lg:px-16">
          <Reveal>
            <div className="max-w-xl">
              <Display className="text-3xl sm:text-4xl lg:text-5xl">
                Join Us on This Journey
              </Display>
              <p className="mt-4 text-xl font-bold text-accent sm:text-2xl">
                Take action. Make impact. Lead responsibly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="mt-8 max-w-xl space-y-3 text-base leading-relaxed text-white/90 sm:text-lg">
              <p>Every challenge is an opportunity to learn, innovate, and push boundaries.</p>
              <p>Here, legal rigor meets ethical responsibility.</p>
              <p>Curiosity meets initiative. Ideas meet execution.</p>
            </div>
            <p className="mt-8 max-w-xl text-lg">
              <Orange className="font-bold">Together</Orange>, we don&apos;t just react to
              change…
            </p>
            <p className="mt-2 text-xl font-bold text-accent sm:text-2xl">We drive it.</p>
            <div className="mt-8 max-w-xl">
              <p className="text-lg font-semibold text-white">
                Here, at Legal & Ethics Ventures Institute
              </p>
              <p className="mt-4 text-base sm:text-lg">
                Advance your <Red className="font-semibold">career</Red>. Be at the{" "}
                <Red className="font-semibold">center</Red> of the{" "}
                <Red className="font-semibold">future</Red>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-10 flex justify-center">
              <BrandLogo className="h-14 w-auto" />
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page21_img03.jpeg"
            alt="Futuristic city plaza with circuit pathways"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}
