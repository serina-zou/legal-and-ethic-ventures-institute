export default function WhatWeDo() {
  const items = [
    {
      title: "Training",
      description:
        "Intensive programs combining legal expertise with product development, coding, and design thinking methodologies.",
    },
    {
      title: "Venture Projects",
      description:
        "Real-world legal-tech ventures where fellows build, launch, and scale products that address critical legal challenges.",
    },
    {
      title: "Mentorship",
      description:
        "One-on-one guidance from legal innovators, tech founders, and venture capitalists who've successfully bridged both worlds.",
    },
    {
      title: "Practical Outcomes",
      description:
        "Portfolio-ready projects, launched products, and career pathways into legal-tech startups, innovation labs, and entrepreneurship.",
    },
  ];

  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-12">
            What We Do
          </h2>

          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium font-medium text-white md:w-[210px] flex-shrink-0 leading-[1.35] tracking-[-0.48px]">
                    {item.title}
                  </h3>
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
}
