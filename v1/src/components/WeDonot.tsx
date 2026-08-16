
import Image from "next/image";
import img from "../../public/wedontImage.png";

export default function WeDonot() {
  return (
    <section
      className="
        relative 
        rounded-2xl sm:rounded-3xl md:rounded-[32px] 
        overflow-hidden 
        bg-muted 
        mb-6 md:mb-8 lg:mb-10 
        min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[507px]
      ">
      {/* Background Image – optimized */}
      <Image
        src={img}
        alt="Abstract background"
        fill
        priority
        className="object-cover brightness-[0.85] contrast-[1.05]"
        quality={82}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
      />

      {/* Content layer */}
      <div
        className="
          relative z-10 
          flex items-center justify-center 
          px-5 xs:px-6 sm:px-10 md:px-12 lg:px-16 
          min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[507px]
        ">
        <div
          className="
            bg-white/12 backdrop-blur-xl md:backdrop-blur-2xl 
            border border-white/8 
            rounded-2xl sm:rounded-3xl md:rounded-[44px] 
            px-7 xs:px-9 sm:px-12 md:px-16 lg:px-24 xl:px-[180px] 2xl:px-[203px]
            py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[88px] 2xl:py-[100px]
            w-full max-w-[94%] xs:max-w-[90%] sm:max-w-[82%] md:max-w-3xl lg:max-w-4xl xl:max-w-[980px]
            text-center 
            shadow-2xl shadow-black/40
            transition-all duration-400
            hover:shadow-black/50 hover:bg-white/15
          ">
          <p
            className="
              text-white 
              text-base xs:text-lg sm:text-xl md:text-2xl 
              font-semibold tracking-tight 
              mb-3 xs:mb-4 sm:mb-5
            ">
            We don't teach you to pass the bar
          </p>

          <h2 className="leading-[1.15] font-extrabold">
            <span
              className="
                text-white 
                text-2xl xs:text-[26px] sm:text-3xl md:text-[34px] lg:text-[38px] 
                block sm:inline
              ">
              We train you to build
            </span>{" "}
            <span
              className="
                bg-gradient-to-r from-[#F2784B] via-cyan-300 to-[#F2784B] 
                bg-clip-text text-transparent 
                text-3xl xs:text-[32px] sm:text-4xl md:text-[44px] lg:text-[52px] 
                font-black 
                block sm:inline
                tracking-[-0.02em]
              ">
              What Comes After It!
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
