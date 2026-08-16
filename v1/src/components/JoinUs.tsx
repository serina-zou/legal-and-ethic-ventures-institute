const JoinUs = () => {
  return (
    <section className=" relative rounded-[25px] overflow-hidden py-16 px-10 mb-4 ">
      {/* <svg
        className="absolute left-[104px] top-[208px]"
        width="1229"
        height="5"
        viewBox="0 0 1229 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 2.5H1229"
          stroke="#F2784B"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg> */}

      <h1 className="w-[calc(90%-150px)] bg-[#F2784B] absolute top-65 left-30  h-2 text-[#F2784B] hidden xl:block"></h1>

      {/* <p className="text-foreground text-lg mb-8">Who We Serve</p> */}
      <h2 className="mb-16 text-pretty sm:mb-20">
        <span className="text-[28px] font-bold text-foreground">
          Join us on this{" "}
        </span>
        <span className="text-[28px] font-bold text-primary sm:text-[32px]">
          Journey
        </span>
      </h2>

      <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:grid-cols-4 lg:gap-12">
        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">1</span>
          </div>
          <h3 className="text-foreground text-2xl font-medium">Explore</h3>
          <p className="text-center text-lg text-pretty text-foreground">
            Learn foundational ideas of law, ethics, and artificial intelligence.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">2</span>
          </div>
          <h3 className="text-foreground text-2xl font-medium">Engage</h3>
          <p className="text-center text-lg text-pretty text-foreground">
            Participate in guided projects, research, and real-world problem
            solving.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">3</span>
          </div>
          <h3 className="text-foreground text-2xl font-medium">Build</h3>
          <p className="text-center text-lg text-pretty text-foreground">
            Develop tools, papers, or ventures grounded in ethical
            responsibility.
          </p>
        </div>

        <div className="flex flex-col gap-6 z-[10] items-center justify-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-[#B8B8B8] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] flex items-center justify-center">
            <span className="text-black text-[28px] font-bold">4</span>
          </div>
          <h3 className="text-foreground text-2xl font-medium">Launch</h3>
          <p className="text-center text-lg text-pretty text-foreground">
            Translate experience into careers, further study, or independent
            initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
