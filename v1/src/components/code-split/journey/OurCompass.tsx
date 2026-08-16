
import React from "react";
import { Compass } from "lucide-react";

const OurCompass = () => {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-muted px-5 py-10 sm:px-6 md:min-h-[800px] md:py-24 lg:px-8 lg:py-28">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/poster-bg.jpg" // صورة ثابتة تظهر لحد ما الفيديو يحمل (اختياري)
      >
        <source src="/videos/background-loop.mp4" type="video/mp4" />
        <source src="/videos/background-loop.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay لتحسين قراءة النص */}
      <div className="absolute  inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70 pointer-events-none" />

      {/* المحتوى */}
      <div className="relative w-full  mx-auto flex flex-col  justify-center  items-center gap-12 lg:gap-16 z-10">
        {/* الجزء النصي */}
        <div className="w-full md:w-3/5 lg:w-7/12 space-y-8 md:space-y-10 text-center md:text-left">
          {/* العنوان + الأيقونة */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-xl bg-cyan-500/15 border border-cyan-500/30 backdrop-blur-sm">
              <Compass
                className="w-9 h-9 sm:w-11 sm:h-11 text-cyan-400"
                strokeWidth={1.7}
              />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
              Our Compass
            </h2>
          </div>

          {/* الفقرة التمهيدية */}
          <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto md:mx-0">
            We believe thoughtful legal guidance empowers innovation, laying the
            groundwork for sustainable growth and responsible technology.
          </p>

          {/* العنوان الفرعي */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground pt-4 md:pt-6">
            We focus on:
          </h3>

          {/* القائمة */}
          <ul className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-left inline-block">
            {[
              {
                title: "Supporting Responsible Innovation",
                desc: "by championing ethical, transparent, and responsible work.",
              },
              {
                title: "Ensuring Clarity & Consistency",
                desc: "by turning complex topics into simple, understandable guidance.",
              },
              {
                title: "Collaborating Across Teams",
                desc: "",
              },
              {
                title: "Approaching Every Task Thoughtfully",
                desc: "by bringing curiosity, precision, and care to everything we do.",
              },
            ].map((item, idx) => (
              <li key={idx} className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/25 ring-2 ring-cyan-500/40">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                </span>

                <span className="font-semibold text-foreground text-lg sm:text-xl tracking-tight block">
                  {item.title}
                </span>
                {item.desc && (
                  <span className="text-gray-300 text-base sm:text-lg mt-1 block">
                    {item.desc}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* مساحة فارغة على اليمين في الديسكتوب – يمكن تضيف عنصر آخر لو حابب */}
      </div>
    </section>
  );
};

export default OurCompass;
