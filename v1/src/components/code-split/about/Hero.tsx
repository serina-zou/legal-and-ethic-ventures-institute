import Image from "next/image";
import heroImage from "../../../../public/aboutImage.png";

export default function Hero() {
  return (
    <section className="w-full   mt-8">
      <div className="w-full ">
        <div className="relative h-[500px] md:h-[600px] lg:h-[674px] rounded-[25px] w-full overflow-hidden  ">
          {/* Background Image */}

          <Image
            src={heroImage}
            fill
            className="object-cover relative "
            alt="Lady Justice statue in front of courthouse"
          />
          {/* <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd00773bd7bc24cf981dbf9854725d90e%2Fede2f97482f054ddc534ac5903c3ce12cd8952ea?format=webp"
            alt="Lady Justice statue in front of courthouse"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end   h-full py-10 px-8 md:px-12 lg:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-white leading-tight mb-4">
              Legal & Ethics Venture Institute
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-[800px] leading-relaxed">
              where legal training meets real product building. We help aspiring
              legal professionals, technologists, and founders learn the
              practical skills needed to design, ship, and scale legal
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
