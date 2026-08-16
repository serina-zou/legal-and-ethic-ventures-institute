import React from "react";

const HowWeWork = () => {
  return (
    <section className="w-full px-6 mt-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gray-950 rounded-[25px] px-8 md:px-12 lg:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-6">
            How We Work
          </h2>

          <p className="text-xl md:text-2xl lg:text-[28px] font-medium text-white mb-6 leading-relaxed">
            You learn through structured sprints, reviews, and teamwork. Every
            track includes clear milestones, templates, and real outputs you can
            show. We focus on clarity, ethics, and usability. Because legal work
            should be understandable, accessible, and built to last.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
