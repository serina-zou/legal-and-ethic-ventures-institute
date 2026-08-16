import MilestoneCard from "./MilestoneCard";

const MileStone = () => {
  return (
    <section className="py-10 px-6 bg-muted border-y border-border transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 text-foreground">
            Key Milestones Achieved
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <MilestoneCard
            title="Legal & Ethics Ventures Institute"
            desc="Prepared foundational content and materials supporting the Institute's mission and future initiatives.
"
          />
          <MilestoneCard
            title="Corporate Structure"
            desc="Research into flexible corporate structures, including Series LLC frameworks, to support future growth and strategic needs.
"
          />
          <MilestoneCard
            title="Funding Landscape Exploration
"
            desc="Conducted initial research into potential U.S. & EU funding opportunities and explored early partnership prospects.
"
          />
          <MilestoneCard
            title="Internal Documentation Review
"
            desc="Conducted structured document review to identify clarity and consistency improvements.
"
          />
        </div>
      </div>
    </section>
  );
};

export default MileStone;
