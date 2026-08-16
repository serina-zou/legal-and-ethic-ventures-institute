import React from "react";
import TimelineItem from "./TimelineItem";

const Planned = () => {
  return (
    <section className="py-10 px-6 bg-muted transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-[22px] mb-20 flex flex-col gap-3">
          <h2 className="text-4xl font-extrabold mb-4 text-foreground">
            Planned & Ready: A Timeline of the Next 12 Months
          </h2>
          <p className="text-gray-100 ">
            Planned where{" "}
            <span className="font-bold text-[#F2784B]">possible</span>.
          </p>
          <p className="text-gray-100 ">
            Open where{" "}
            <span className="font-bold text-[#F2784B]">necessary</span>. Some
            paths are defined. Others will emerge as we move forward.
          </p>
          <p className=" font-bold text-[#F2784B] ">
            We are ready for what comes <span>next...</span>
          </p>
        </div>

        <div className="relative border-l-2 border-gray-300 dark:border-white/10 ml-4 md:ml-1/2 space-y-16">
          <TimelineItem
            phase="I"
            title="Funding Pathways"
            desc="Building on prior research, we aim to provide a well-informed overview of EU and US funding opportunities to support the company in identifying suitable calls and preparing for application."
            align="left"
            highlight
          />
          <TimelineItem
            phase="II"
            title="Team Expansion"
            desc="We are preparing to grow the legal team to scale impact, support emerging initiatives across the company, and support one another as we move forward, together."
            align="right"
          />
          <TimelineItem
            phase="III"
            title="AI Legal Buddy"
            desc="Research and concept development for a B2B and B2C AI Legal Buddy, forming part of a broader ecosystem of AI assistants. Building on market and landscape research to map demand, competitors, and potential features, informing product contribution and preparing for outreach as the product matures."
            align="left"
            highlight
          />
          <TimelineItem
            phase="IV"
            title="European Entity"
            desc="We are laying the groundwork to unlock growth through potential establishment of a European entity, informed by research and strategic planning.

"
            align="right"
          />
          <TimelineItem
            phase="V"
            title="Cross-Team Collaboration"
            desc="We are broadening the scope of the Legal & Ethics team to maintain and amplify collaboration across company verticals, including but not limited to space, quantum, and CAIPO. By stepping in where legal, ethical, and technological considerations intersect, we support team collaboration, provide insight, and help initiatives flourish, ensuring our work drives responsible and informed innovation."
            align="left"
            highlight
          />
        </div>
      </div>
    </section>
  );
};

export default Planned;
