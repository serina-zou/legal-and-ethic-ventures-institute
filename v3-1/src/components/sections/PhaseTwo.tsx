import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BrandLogo, Display, Orange, Red, Section } from "@/components/ui";

export function JourneyForwardSection() {
  return (
    <Section id="journey" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-6 px-6 py-20 text-center sm:px-12 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl lg:text-5xl">
              Legal & Ethics Team
              <br />
              Our Journey Forward
            </Display>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              A <Orange className="font-semibold">visual journey</Orange> through our{" "}
              <Orange className="font-semibold">legal team evolution</Orange>. From
              foundational work to future vision.
            </p>
            <p className="mt-4 text-base font-semibold text-accent sm:text-lg">
              A journey of progress, collaboration, and growth.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <BrandLogo className="mt-6 h-16 w-auto" />
          </Reveal>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page08_img03.jpeg"
            alt="Marble staircase with circuit pathways leading toward silhouettes in light"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

const TEAM_VERBS = [
  { verb: "Research", rest: "emerging technologies and legal landscapes" },
  { verb: "Listen", rest: "to diverse perspectives" },
  { verb: "Understand", rest: "complex challenges" },
  { verb: "Learn", rest: "continuously" },
  { verb: "Develop", rest: "solutions and skills" },
  { verb: "Shape", rest: "innovation responsibly" },
];

export function MeetTheTeamSection() {
  return (
    <Section id="team" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[48vh] lg:order-1 lg:min-h-full">
          <Image
            src="/slides/page09_img01.jpeg"
            alt="Robotic arm and scales of justice over a circuit and library backdrop"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 flex flex-col justify-center px-6 py-20 sm:px-12 lg:order-2 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl lg:text-5xl">Meet the Team</Display>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              We are a collaborative, welcoming legal intern team working at the dynamic
              intersection of{" "}
              <Orange className="font-semibold">artificial intelligence</Orange>,{" "}
              <Orange className="font-semibold">robotics</Orange>, and{" "}
              <Orange className="font-semibold">law</Orange>. A frontier that requires both{" "}
              <Orange className="font-semibold">technical insight</Orange> and{" "}
              <Orange className="font-semibold">ethical judgment</Orange>.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-8 text-lg font-bold italic text-white">We:</p>
            <ul className="mt-4 space-y-3">
              {TEAM_VERBS.map((item) => (
                <li key={item.verb} className="flex gap-3 text-base text-white/90 sm:text-lg">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <Orange className="font-bold">{item.verb}</Orange> {item.rest}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const COMPASS = [
  {
    title: "Supporting Responsible Innovation",
    body: "by championing ethical, transparent, and responsible work.",
  },
  {
    title: "Ensuring Clarity & Consistency",
    body: "by turning complex topics into simple, understandable guidance.",
  },
  {
    title: "Collaborating Across Teams",
    body: "",
  },
  {
    title: "Approaching Every Task Thoughtfully",
    body: "by bringing curiosity, precision, and care to everything we do.",
  },
];

export function CompassSection() {
  return (
    <Section id="compass" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl lg:text-5xl">Our Compass</Display>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              We believe thoughtful legal guidance empowers innovation, laying the
              groundwork for sustainable growth and responsible technology.
            </p>
            <p className="mt-8 text-lg font-semibold text-white">We focus on:</p>
          </Reveal>
          <ul className="mt-5 space-y-5">
            {COMPASS.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <li className="border-l-2 border-accent pl-4">
                  <p className="font-bold text-accent">{item.title}</p>
                  {item.body ? (
                    <p className="mt-1 text-sm text-white/80 sm:text-base">{item.body}</p>
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page10_img01.jpeg"
            alt="Compass and legal guidance imagery"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

export function CultureSection() {
  return (
    <Section id="culture" className="relative overflow-hidden">
      <Image
        src="/slides/page11_img01.jpeg"
        alt="Team culture visual"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0c0d12]/78" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl sm:text-4xl lg:text-5xl">Growing the Culture</Display>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-6 text-xl font-semibold text-accent sm:text-2xl">
            Culture isn&apos;t just written, it&apos;s lived.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
            In our team, different perspectives are welcomed, ideas are challenged
            respectfully, and we learn from each other every day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            Every small decision shapes how we show up, listen, and act.
          </p>
          <p className="mt-8 text-lg font-semibold text-white sm:text-xl">
            One small decision, repeated daily, becomes culture.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const STATS = [
  {
    value: "13",
    label: "Finalized Projects",
    body: "Completed initiatives that have laid the groundwork for innovation and operational clarity.",
  },
  {
    value: "8+",
    label: "Active Projects",
    body: "Currently underway, generating insights and supporting ongoing initiatives.",
  },
  {
    value: "5",
    label: "Planned Projects",
    body: "Upcoming initiatives we are preparing to explore.",
  },
];

export function ByTheNumbersSection() {
  return (
    <Section id="numbers" className="bg-atmosphere flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl sm:text-4xl">Initiatives: By the Numbers</Display>
        </Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={(index + 1) as 1 | 2 | 3}>
              <div className="flex flex-col items-center text-center">
                <p className="font-[family-name:var(--font-display)] text-6xl font-bold text-white sm:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-lg font-bold text-brand-red sm:text-xl">{stat.label}</p>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80 sm:text-base">
                  {stat.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const FOUNDATIONS = [
  {
    n: "1",
    title: "Legal Structures & Agreements",
    body: "Creating and reviewing scalable, clear, and reliable internal frameworks that enable the business to operate efficiently and confidently.",
  },
  {
    n: "2",
    title: "Data Governance & Compliance",
    body: "Establishing frameworks and processes to ensure information is secure, consistent, and responsibly managed.",
  },
  {
    n: "3",
    title: "Research & Analysis",
    body: "Serving as the backbone of our work we continuously conduct deep-dive research into emerging regulations, industry best practices, and competitive landscape to inform strategic decisions.",
  },
];

export function FoundationsSection() {
  return (
    <Section id="foundations" className="bg-atmosphere flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
        <Reveal>
          <Display className="text-3xl sm:text-4xl">Foundations: What We&apos;ve Built</Display>
          <p className="mt-4 max-w-3xl text-white/85">
            Before we map the road ahead… let&apos;s acknowledge the groundwork that makes
            everything possible.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {FOUNDATIONS.map((item, index) => (
            <Reveal key={item.n} delay={(index + 1) as 1 | 2 | 3} className="h-full">
              <div className="relative flex h-full flex-col rounded-sm border border-accent px-6 pb-8 pt-10">
                <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-bold text-black">
                  {item.n}
                </span>
                <h3 className="text-center text-lg font-bold text-white">{item.title}</h3>
                <div className="mt-5 flex flex-1 gap-3">
                  <span className="mt-1 w-0.5 shrink-0 self-stretch bg-accent" />
                  <p className="text-sm leading-relaxed text-white/85">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const MILESTONES = [
  {
    title: "Legal & Ethics Ventures Institute",
    body: "Prepared foundational content and materials supporting the Institute’s mission and future initiatives.",
  },
  {
    title: "Corporate Structure",
    body: "Research into flexible corporate structures, including Series LLC frameworks, to support future growth and strategic needs.",
  },
  {
    title: "Funding Landscape Exploration",
    body: "Conducted initial research into potential U.S. & EU funding opportunities and explored early partnership prospects.",
  },
  {
    title: "Internal Documentation Review",
    body: "Conducted structured document review to identify clarity and consistency improvements.",
  },
];

export function MilestonesSection() {
  return (
    <Section id="milestones" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <Display className="text-3xl sm:text-4xl">Key Milestones Achieved</Display>
          </Reveal>
          <ul className="mt-10 space-y-7">
            {MILESTONES.map((item, index) => (
              <Reveal key={item.title} delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <li className="border-l-2 border-brand-red pl-5">
                  <h3 className="font-bold text-accent">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                    {item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page14_img01.jpeg"
            alt="Key milestones visual"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
}

export function NotAllSection() {
  return (
    <Section id="initiatives" className="bg-surface">
      <div className="grid min-h-[100svh] lg:grid-cols-2">
        {/* PDF page 15: text left, image right */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16">
          <Reveal>
            <Display className="max-w-xl text-3xl sm:text-4xl">
              But That&apos;s Not All
            </Display>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              We take initiative, stay informed and ensure we{" "}
              <Orange className="font-semibold">remain</Orange> at the{" "}
              <Orange className="font-semibold">forefront</Orange> of{" "}
              <Orange className="font-semibold">legal</Orange> and{" "}
              <Orange className="font-semibold">technological developments.</Orange>
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              We act as a <Orange className="font-semibold">catalyst</Orange> by supporting{" "}
              <Orange className="font-semibold">cross-collaboration</Orange>,{" "}
              <Orange className="font-semibold">connecting insights across teams</Orange>,
              and ensuring external developments translate into internal value.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <h3 className="mt-8 max-w-xl text-xl font-bold text-white">Recent Initiatives</h3>
            <div className="mt-5 max-w-xl space-y-6">
              <div>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                  <Orange className="font-semibold">Space Forum - Nikkei Forum:</Orange>{" "}
                  Attended expert discussions on space industry topics, partnerships, and
                  regulatory frameworks.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  → Comprehensive briefing delivered to company leadership, ensuring we
                  stay informed on space law developments.
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                  <Orange className="font-semibold">
                    Cybersecurity Tokyo Initiative 2025 - Nikkei Forum:
                  </Orange>{" "}
                  Attended expert talks on cybersecurity trends, emerging threats, and
                  strategic recommendations.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  → Actionable insights shared across teams, keeping the company aligned
                  with cutting-edge security practices.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[48vh] lg:min-h-full">
          <Image
            src="/slides/page15_img01.jpeg"
            alt="Classical hall with light burst of legal and technology icons"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
