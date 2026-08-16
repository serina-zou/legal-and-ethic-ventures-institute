const Growing = () => {
  return (
    <section className="relative pt-10 pb-10 px-6 overflow-hidden text-center bg-muted transition-colors mb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
        Growing the Culture
      </h1>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl text-foreground">
          <span className=" text-[#F2784B] font-bold">Culture</span> isn't just
          written, it's <span className="text-[#F2784B] font-bold">lived</span>.
        </h3>

        <p className="text-2xl text-foreground max-w-2xl mx-auto ">
          In our team, different perspectives are welcomed, ideas are challenged
          respectfully, and{" "}
          <span className="text-[#F2784B] font-bold">
            we learn from each other every day
          </span>{" "}
          .
        </p>
        <p className="text-2xl text-foreground">
          Every small decision shapes how we show up, listen, and act.
        </p>
        <p className="text-2xl text-foreground">
          One small decision, repeated daily,
          <span className="text-[#F2784B] font-bold">becomes culture</span>.
        </p>
      </div>

      {/* INITIATIVES BY NUMBERS */}
    </section>
  );
};

export default Growing;
