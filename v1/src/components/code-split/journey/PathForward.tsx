import React from "react";

const PathForward = () => {
  return (
    <section className="relative pt-10 pb-10 px-6 overflow-hidden text-center bg-muted transition-colors my-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-levi-red/5 blur-[120px] rounded-full -z-10" />

      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
        The Path Forward
      </h1>

      <div className="flex flex-col gap-6">
        <p className="mx-auto max-w-2xl text-pretty text-2xl text-foreground">
          We&apos;re moving forward with{" "}
          <span className="font-bold text-primary">purpose</span>: from what
          we&apos;ve built to what we are creating next.
        </p>

        <p className="text-pretty text-2xl text-foreground">
          As we progress, it&apos;s about{" "}
          <span className="font-bold text-primary">growth</span>,{" "}
          <span className="font-bold text-primary">collaboration</span>, and
          turning challenges into opportunities —{" "}
          <span className="font-bold text-primary">
            shaping the future responsibly.
          </span>
        </p>
      </div>
    </section>
  );
};

export default PathForward;
