import React from "react";
import MilestoneCard from "./MilestoneCard";
import { Square } from "lucide-react";

const DeepDive = () => {
  return (
    <section className="py-10 px-6 bg-muted border-y border-border transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4 text-center text-[20px] text-foreground">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">
            Deep Dive: AI Governance & Data Privacy
          </h1>
          <h2 className="text-[#F2784B] font-bold text-2xl md:text-4xl ">
            A Foundational Pillar
          </h2>
          <p>
            This initiative is an example of how the company strengthens its
            data privacy framework through a{" "}
            <span className="text-[#F2784B]">
              user-centric and responsible approach
            </span>
            , particularly in the context of AI.
          </p>
          <p>
            From an ethics standpoint, we prioritize{" "}
            <span className="text-[#F2784B]">privacy-by-design</span> and
            <span className="text-[#F2784B]">responsible AI</span>, avoiding
            practices that compromise user trust, especially when handling
            highly sensitive health data.
          </p>
          <p>
            The work focuses on{" "}
            <span className="text-[#F2784B]">
              preliminary legal and policy research
            </span>{" "}
            to gather insights, examples, and emerging practices that can inform
            future discussions and strategic decisions.
          </p>
          <p>
            Exploratory research, intended for internal review, serving as a
            foundation for AI development with a user-centered focus.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* FIRST */}
          <div className="p-8 bg-card rounded-xl border border-border hover:border-primary shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3 ">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold ">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Legal Frameworks Review
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Identifying and summarizing relevant legislation, including the
              GDPR, the EU AI Act, and other applicable privacy and data
              governance laws.
            </p>
          </div>
          {/* SECOND */}
          <div className="p-8 bg-card rounded-xl border border-border hover:border-primary shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B] ">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Comparative & Regulatory Analysis{" "}
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Reviewing available case law, regulatory guidance, and
              organizational best practices that reflect user-centric privacy
              models.
            </p>
          </div>
          {/* THIRD */}
          <div className="p-8 bg-card rounded-xl border border-border hover:border-primary shadow-sm transition-colors">
            <div className="flex justify-start gap-3 mb-4">
              <div className="flex items-center  gap-3  ">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md" />
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Emerging Trends Monitoring{" "}
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ongoing monitoring of emerging legal, policy, and technological
              trends in data protection and AI governance, including insights
              from expert forums and global discussions.
            </p>
          </div>
          {/* FOURTH */}

          <div className="p-8 bg-card rounded-xl border border-border hover:border-primary shadow-sm transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-3 items-center">
                <div className="relative w-8 h-8 flex items-center justify-center shadow-[#F2784B] shadow-lg border-[#F2784B]">
                  <Square className="absolute inset-0 w-8 h-8 shadow-[#F2784B] shadow-md " />
                  <span className="text-lg font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Internal Application & Synthesis{" "}
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Translating complex legal and governance research into clear,
              practical, and user-centered internal insights. Synthesizing
              findings into preliminary notes and a concise summary report to
              inform future discussions and responsible next steps.
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
