const WhoWeServe = () => {
  return (
    <section className="mx-auto mb-4 max-w-[min(100%,72rem)] overflow-hidden rounded-[25px] border border-border bg-muted px-4 py-12 sm:px-8 md:py-16">
      <p className="mb-6 text-center text-[28px] font-bold text-muted-foreground">
        Who We Serve
      </p>
      <h2 className="mb-6 text-[28px] font-bold text-foreground">Built for Doers</h2>
      <p className="mb-12 max-w-3xl text-pretty text-[22px] leading-snug text-foreground">
        Whether you&apos;re <span className="text-primary">exploring</span>,{" "}
        <span className="text-primary">building</span>, or{" "}
        <span className="text-primary">leading</span>, our platform meets you
        where you are.
      </p>

      <div className="relative grid gap-8 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col gap-5 rounded-[10px] border border-border bg-card p-6 shadow-sm sm:p-7">
          <h3 className="text-pretty text-[26px] font-semibold leading-tight text-foreground sm:text-[28px]">
            Students &amp; Graduates
          </h3>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-[22px]">
            Gain hands-on experience beyond traditional classrooms and
            coursework through real-world projects.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-[10px] border border-border bg-card p-6 shadow-sm sm:p-7">
          <h3 className="text-pretty text-[26px] font-semibold leading-tight text-foreground sm:text-[28px]">
            Career Explorers
          </h3>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-[22px]">
            Test-drive legal and ethical work before committing to formal
            education paths or career pivots.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-[10px] border border-border bg-card p-6 shadow-sm sm:p-7">
          <h3 className="text-pretty text-[26px] font-semibold leading-tight text-foreground sm:text-[28px]">
            Innovators &amp; Builders
          </h3>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-[22px]">
            Ship experiments, prototypes, and venture-style initiatives while
            staying grounded in ethics and compliance from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
