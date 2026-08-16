import Stat from "./Stat";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center bg-muted transition-colors mb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
        Legal & Ethics Team
      </h1>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
        Our Journey Forward
      </h1>

      {/* <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-foreground">
          Progress. Collaboration. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Growth.
          </span>
        </h1> */}

      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
        A visual journey through our{" "}
        <span className="text-[#F2784B]">legal team evolution</span>. From
        foundational work to future vision.
      </p>
      <p>
        A journey of <span className="text-[#F2784B]">progress</span>,{" "}
        <span className="text-[#F2784B]">collaboration</span>, and{" "}
        <span className="text-[#F2784B]">growth</span>.
      </p>

      {/* INITIATIVES BY NUMBERS */}
    </section>
  );
};

export default Hero;
