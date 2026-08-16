import React from "react";

const InMotion = () => {
  return (
    <section className="bg-muted px-5 py-10 text-foreground sm:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            In Motion: What We're Advancing Now
          </h1>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We're not standing still. The team's work is active and evolving.
            These initiatives are currently in motion, translating our
            foundations into practical impact and shaping what comes next.
          </p>
          <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Here is a glimpse of what we are working on...
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {/* Card 1 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            {/* <div className="absolute left-[25px] top-[21px] border-[28px]   bg-black transform rotate-45 border-r-0 border-b-0   border-amber-500  flex items-center justify-center "></div> */}

            <h2 className="text-2xl font-bold  mb-4 text-amber-100">
              Funding Opportunities
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Identifying and assessing EU, US, and private funding
              opportunities aligned with our strategic direction and mission. A
              mission reflected in a learning-focused center of excellence,
              scaling innovative solutions to reach those who need them most,
              and seeking partners and team members who share the vision and can
              help pave the path forward.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px]">
            <h2 className="text-2xl font-bold  mb-4 text-amber-100">
              Incentive & Corporate Structures
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Researching the feasibility and implementation of incentive
              mechanisms, i.e. equity and stock option plan, within a corporate
              structure to support growth and alignment.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gray-900/60 backdrop-blur-sm border border-amber-500 rounded-2xl px-6 py-8 md:px-8 md:py-10 shadow-lg shadow-amber-900/20 hover:shadow-amber-700/30 hover:border-amber-500 transition-all duration-300 flex flex-col items-center text-center min-h-[260px] md:min-h-[300px] md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold  mb-4 text-amber-100">
              Data Privacy & AI Governance
            </h2>
            <p className="text-gray-300 text-[18px]  leading-relaxed">
              Ongoing research into data protection and AI governance to inform
              responsible, future-ready decision-making. Embedding legal
              thinking early in development to ensure compliance is built in
              from the start, not added later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InMotion;
