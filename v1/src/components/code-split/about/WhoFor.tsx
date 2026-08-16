import React from "react";

const WhoFor = () => {
  const items = [
    {
      title: "Training",
      description: "Law students and recent graduates",
    },
    {
      title: "Venture Projects",
      description:
        "Working professionals moving into compliance, legal ops, or policy",
    },
    {
      title: "Mentorship",
      description:
        "Builders exploring legal tech and regulation aware product design",
    },
    {
      title: "Practical Outcomes",
      description:
        "Lifelong learners who want practical legal skills with modern tools",
    },
  ];

  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-12">
            Who It’s For
          </h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <p className="text-xl md:text-2xl lg:text-[28px] font-medium text-white flex-1 leading-[1.35] tracking-[-0.4px]">
                    {item.description}
                  </p>
                </div>
                {index < items.length - 1 && (
                  <div className="w-full h-px bg-white mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoFor;
