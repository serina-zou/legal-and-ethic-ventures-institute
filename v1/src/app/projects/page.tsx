import type { Metadata } from "next";
import caipoImg from "../../../public/buddy.png";
import legalBuddyImg from "../../../public/Legal AI Buddy.png";
import legalFrameworkImg from "../../../public/Legal & Ethics Framework Research.png";
import experientialImg from "../../../public/Experiential Ventures Pipeline for legal and ethics.jpeg";
import humanoidImg from "../../../public/humanoid.jpeg";
import Image, { type StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "CAIPO, Legal Buddy, Experiential Ventures Pipeline, ethics research, and humanoid robotics at the Legal & Ethics Ventures Institute.",
};

type ProjectBlock = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  sections: { type: "p" | "ul"; text?: string; items?: string[] }[];
};

const projects: ProjectBlock[] = [
  {
    title: "CAIPO",
    image: caipoImg,
    imageAlt: "CAIPO wearable AI assistant",
    sections: [
      {
        type: "p",
        text: "CAIPO is a next-generation wearable AI assistant designed to provide real-time, intelligent support in a compact and discreet form factor. It is primarily worn as a necklace or clipped onto clothing, ensuring that its camera and microphone are positioned forward to naturally capture environmental and audio context. This placement allows CAIPO to interact seamlessly with the user’s surroundings while keeping the experience hands-free and unobtrusive.",
      },
      {
        type: "p",
        text: "The device is activated through a capacitive touch sensor, enabling silent, instant interaction without requiring wake words. Its multi-sensor feedback system—including LED indicators, haptic vibrations, and a built-in speaker—ensures users receive immediate, intuitive responses. CAIPO connects wirelessly via Wi-Fi to a secure backend, where audio input is processed, analyzed, and transformed into actionable guidance or personalized recommendations. Raw audio is not stored locally, and optional session summaries are securely handled, prioritizing privacy and data security.",
      },
      {
        type: "p",
        text: "CAIPO serves as the intelligent interface within the broader ecosystem of connected applications, including MoodChanger. It captures real-time and historical data from wearables and other compatible devices, delivering context-aware insights that empower users to make informed decisions about health, productivity, and lifestyle. Acting as a virtual coach, CAIPO provides motivation, proactive reminders, and milestone tracking to encourage sustainable routines.",
      },
      {
        type: "p",
        text: "The system supports integration with a wide range of wearable devices, including smart glasses, watches, rings, insoles, and neuro-feedback headbands. These devices contribute metrics on physical activity, heart rate variability, posture, hydration, stress, cognitive function, and relaxation patterns. By consolidating all this information, CAIPO ensures users have a holistic understanding of their performance and well-being.",
      },
      {
        type: "p",
        text: "Built with long term expansion in mind, CAIPO aims to support fully offline AI processing, extended battery life, and adaptive learning to better anticipate and respond to user needs over time. By bridging advanced AI capabilities with wearable hardware, CAIPO transforms everyday interactions into meaningful guidance, helping users stay informed, productive, and balanced without interrupting their daily routines.",
      },
      {
        type: "p",
        text: "Ultimately, CAIPO is more than a wearable device—it is an intelligent companion, a personal productivity assistant, and a gateway to a connected ecosystem that seamlessly blends real-time sensing, AI-driven analysis, and actionable support.",
      },
    ],
  },
  {
    title: "Legal Buddy",
    image: legalBuddyImg,
    imageAlt: "Legal Buddy legal support system",
    sections: [
      {
        type: "p",
        text: "Legal Buddy is a next generation legal support system designed to make legal guidance more structured, accessible, and scalable. Through a dedicated buddy model, users can receive clarification, guidance, and structured assistance while navigating complex legal processes, reducing uncertainty and improving decision-making confidence.",
      },
      {
        type: "p",
        text: "At its technological core, Legal Buddy operates on FloBrain back-end infrastructure, integrating multiple legal AI models to provide context-aware reasoning and structured legal assistance. The system is designed to function across both B2C and B2B environments, supporting individuals seeking guidance as well as organizations and law firms looking to integrate scalable legal support tools into their workflows.",
      },
      {
        type: "p",
        text: "Legal Buddy does not aim to replace professional judgment. Instead, it enhances legal understanding by summarizing key information, identifying relevant considerations, and structuring insights in a way that remains transparent and responsibly aligned with legal standards.",
      },
      {
        type: "p",
        text: "Looking forward, Legal Buddy is part of a broader innovation roadmap that includes the development of a Legal Humanoid Robot. This expansion envisions embodied AI interfaces capable of delivering structured legal interaction through physical presence, combining back-end legal reasoning with interactive human-centered robotics.",
      },
      {
        type: "p",
        text: "By merging structured human guidance, advanced back-end intelligence, and scalable deployment models, Legal Buddy contributes to a more technologically integrated and forward-looking legal ecosystem.",
      },
    ],
  },
  {
    title: "Experiential Ventures Pipeline for Legal and Ethics",
    image: experientialImg,
    imageAlt: "Experiential Ventures Pipeline for legal and ethics",
    sections: [
      {
        type: "p",
        text: "The Experiential Ventures Pipeline is about turning legal and ethics research into projects that actually matter in the real world. It’s not just about reading papers or running simulations—this is about taking an idea from your notebook and seeing it come to life in a way that people can use, test, and learn from.",
      },
      {
        type: "p",
        text: "When you join, you get the full journey: figuring out if an idea makes sense, building a prototype, and eventually creating something that’s ready to be deployed. Along the way, you get hands-on experience with AI tools, legal tech, and ethical frameworks—learning not just how the law works, but how to apply it, test it, and improve it using modern technology.",
      },
      {
        type: "p",
        text: "This pipeline isn’t about following instructions—it’s about exploring, experimenting, and sometimes failing fast so you can learn faster. You’ll see how small changes in design or approach can have big effects, and you’ll get to contribute to projects that can make a real difference in people’s lives. Whether it’s helping people access legal resources more easily, designing smarter AI tools for legal workflows, or creating processes that balance innovation and responsibility, you’re not observing—you’re building.",
      },
      {
        type: "p",
        text: "By the end of the process, the goal isn’t just a polished product—it’s about understanding how ideas move from research to reality. You’ll walk away with skills in project management, problem solving, AI assisted legal design, and ethical decision making. You’ll also see how responsibility and scalability can go hand in hand, and why thinking about ethics from day one changes how solutions are built.",
      },
      {
        type: "p",
        text: "What you’ll experience and gain:",
      },
      {
        type: "ul",
        items: [
          "A guided path from idea to real-world impact",
          "Practical use of AI and legal tools in live projects",
          "Opportunities to explore ethical challenges while innovating",
          "Work that actually affects communities, organizations, and real users",
          "A hands-on understanding of scaling legal tech responsibly",
        ],
      },
    ],
  },
  {
    title: "Ethics & Legal Framework Research",
    image: legalFrameworkImg,
    imageAlt: "Ethics and legal framework research",
    sections: [
      {
        type: "p",
        text: "At the Legal & Ethics Ventures Institute, Ethics & Legal Framework Research is where we explore, analyze, and shape the rules that guide law, AI, and emerging technologies. This is the backbone of everything we do—it ensures that innovation is responsible, legally grounded, and ethically sound.",
      },
      {
        type: "p",
        text: "Foundations: What We’ve Built — Before launching new projects or experiments, we’ve focused on laying strong foundations that make all our work possible.",
      },
      {
        type: "ul",
        items: [
          "Legal Structures & Agreements – We create and review scalable, clear, and reliable internal frameworks that enable the Institute to operate efficiently and confidently. This ensures that every initiative—from research to hands-on ventures—rests on solid legal footing.",
          "Data Governance & Compliance – Information is central to responsible innovation. We design processes and frameworks to manage data securely, consistently, and ethically. This protects sensitive research, supports transparency, and ensures teams can work with confidence.",
          "Research & Analysis – Rigorous research drives our decisions. We continuously analyze emerging regulations, industry best practices, and competitive landscapes to guide our strategy and inform the projects we develop. This allows us to anticipate trends, evaluate risks, and make evidence-based choices.",
        ],
      },
      {
        type: "p",
        text: "Our research doesn’t stay on paper. Through the Experiential Ventures Pipeline, ideas move from concept to real world impact. We structure every stage—idea validation, prototyping, and deployment ready development—so that legal and ethical insights are translated into actionable projects. Participants get hands-on experience with AI tools, legal workflows, and ethics frameworks, contributing directly to initiatives that affect real people and communities.",
      },
      {
        type: "p",
        text: "Why It Matters — Ethics & Legal Framework Research ensures that every project we undertake is guided by robust principles. We explore questions like: How should AI make decisions in ways that are fair, transparent, and accountable? How can emerging technologies comply with law while remaining ethically responsible? By answering these questions, we provide actionable guidance for teams and interns, shaping how legal, ethical, and technological decisions are made in practice.",
      },
      {
        type: "p",
        text: "Key Focus Areas:",
      },
      {
        type: "ul",
        items: [
          "Examining intersections of AI, law, and ethics",
          "Developing frameworks that guide responsible innovation",
          "Translating research into practical, actionable recommendations",
          "Contributing to policy, product, and project design decisions",
          "Ensuring compliance, fairness, and transparency across initiatives",
        ],
      },
      {
        type: "p",
        text: "The Experience for Interns and Contributors — Working in this space means you don’t just observe—you actively shape frameworks that influence real world projects. You’ll engage with emerging regulations, test ethical assumptions, and see how your research informs AI assisted legal tools, internal strategies, and cross team initiatives. It’s hands on, collaborative, and impactful.",
      },
      {
        type: "p",
        text: "Ethics & Legal Framework Research is where curiosity meets responsibility. It’s about understanding the rules, pushing boundaries responsibly, and ensuring that every venture we build—whether a legal AI assistant, a humanoid legal tool, or a policy recommendation—is both innovative and grounded in solid ethical and legal principles.",
      },
    ],
  },
  {
    title: "Humanoid Robot",
    image: humanoidImg,
    imageAlt: "Modular humanoid robot for service environments",
    sections: [
      {
        type: "p",
        text: "This project focuses on developing a modular, 3D-printable humanoid robot torso capable of performing everyday human tasks using standard tools in real indoor environments such as hotels, restaurants, and homes. The main objective is to build a practical, scalable, and commercially deployable humanoid system that can safely operate around people and handle service-oriented activities with both strength and precision.",
      },
      {
        type: "p",
        text: "At the core of the system is a 6-axis open-source robotic arm from Arctos Robotics. The arm is largely 3D-printable, Arduino-compatible, and supported by a complete bill of materials and step-by-step assembly documentation. Its open-source architecture allows us to modify the structure, upgrade components, and integrate custom control systems depending on the application. The six degrees of freedom enable flexible positioning, object pickup, and task-oriented manipulation in dynamic indoor spaces.",
      },
      {
        type: "p",
        text: "For fine manipulation, we integrate the RUKA tendon-driven humanoid hand. This hand features five fingers with underactuated degrees of freedom, allowing adaptive and human-like grasping. Built primarily from 3D-printed parts combined with off-the-shelf components, it balances compactness, affordability, and grip strength. The tendon-driven mechanism enables powerful grasping in a compact form factor, while learning-based control models improve coordination and precision. This combination allows the robot to handle everyday objects such as trays, bottles, cleaning tools, or packaged items.",
      },
      {
        type: "p",
        text: "The humanoid torso is designed as a fully modular platform. Arms can be configured for different payload capacities depending on the use case. End-effectors can be swapped between industrial grippers for heavier tasks and dexterous humanoid hands for interaction-focused tasks. The torso size and degrees of freedom can also be adjusted, allowing flexibility in design and deployment. The system is mounted on a mobile chassis, enabling autonomous navigation in indoor environments with obstacle avoidance and path planning capabilities.",
      },
      {
        type: "p",
        text: "A key research component of the project is material optimization for 3D printing. We are exploring materials such as carbon-fiber reinforced PLA, PETG, nylon (PA12), and flexible TPU for joints, aiming to maximize strength-to-weight ratio while maintaining printability and cost efficiency. Reinforced sections with metal inserts are considered for high-load areas. The goal is to ensure durability under repetitive service tasks while keeping the platform affordable and easy to reproduce.",
      },
      {
        type: "p",
        text: "Initially, the robot targets the hospitality and service industries, including hotels (concierge assistance, room delivery), restaurants (serving and clearing tables), and home cleaning services (light object handling and assistance). Beyond permanent installations, we are expanding into the event rental market. The robot can be rented for corporate events, exhibitions, trade shows, and product launches. In these settings, it can display custom company logos on its body, serving both as an automated service unit and a branding element.",
      },
      {
        type: "p",
        text: "The long-term vision is to build an accessible humanoid robotics ecosystem that combines open-source hardware, modular engineering, and intelligent control systems. Rather than competing with high-cost industrial humanoids, this project focuses on affordability, repairability, adaptability, and real-world usability—creating a humanoid platform that businesses can realistically deploy and scale over time.",
      },
    ],
  },
];

function ProjectFigure({
  image,
  alt,
  priority,
}: {
  image: StaticImageData;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="w-full shrink-0">
      <div className="relative mx-auto aspect-[16/10] w-full max-h-[min(72vh,620px)] overflow-hidden rounded-[20px] bg-muted ring-1 ring-border sm:aspect-[16/9] sm:rounded-[28px] md:aspect-[2/1] md:rounded-[40px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={priority}
        />
      </div>
    </div>
  );
}

function ProjectCopy({ sections }: { sections: ProjectBlock["sections"] }) {
  return (
    <div className="projects-formal-copy w-full min-w-0 flex flex-col gap-5 sm:gap-6 md:gap-7">
      {sections.map((block, i) => {
        if (block.type === "ul" && block.items) {
          return (
            <ul
              key={i}
              className="list-disc space-y-3 text-base leading-[165%] text-foreground marker:text-primary sm:space-y-3.5 sm:text-lg sm:leading-[170%] md:text-xl">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "p" && block.text) {
          return (
            <p
              key={i}
              className="text-base leading-[165%] text-foreground sm:text-lg sm:leading-[170%] md:text-xl">
              {block.text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mt-[100px] mb-[72px] rounded-[16px] border border-border bg-background px-3 py-4 xs:px-4 sm:mb-[80px] sm:px-6 sm:py-6 md:px-8 lg:px-12">
      <div className="max-w-[min(100%,1600px)] mx-auto w-full">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center px-1">
          <h1 className="mb-3 text-3xl font-semibold leading-tight text-foreground sm:mb-4 sm:text-4xl md:mb-6 md:text-[56px]">
            Projects
          </h1>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="projects-formal-article flex flex-col w-full min-w-0 gap-8 sm:gap-10 md:gap-12">
              <div className="w-full text-left">
                <h2 className="mb-5 border-b border-border pb-4 text-xl font-semibold leading-snug text-foreground sm:mb-6 sm:text-2xl md:mb-7 md:text-[32px]">
                  {project.title}
                </h2>
                <ProjectCopy sections={project.sections} />
              </div>
              <ProjectFigure
                image={project.image}
                alt={project.imageAlt}
                priority={index === 0}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
