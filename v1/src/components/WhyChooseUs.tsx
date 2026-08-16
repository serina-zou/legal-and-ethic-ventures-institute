const WhyChooseUs = () => {
  return (
    <section className="rounded-[25px] border-b border-border bg-muted px-6 py-24 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <h2 className="mb-8 text-4xl font-extrabold text-foreground transition-colors duration-300">
            We Are ...
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-2xl font-bold text-muted-foreground md:text-3xl">
              <span className="text-primary">Not</span>{" "}
              <span className="text-foreground">A Law School.</span>
            </div>
            <div className="flex items-center gap-4 text-2xl font-bold text-muted-foreground md:text-3xl">
              <span className="text-primary">Not</span>{" "}
              <span className="text-foreground">A Clinic.</span>
            </div>
            <div className="flex items-center gap-4 text-2xl font-bold text-muted-foreground md:text-3xl">
              <span className="text-primary">Not</span>{" "}
              <span className="text-foreground">A Bootcamp.</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-10">
          <h3 className="mb-6 text-3xl font-extrabold text-foreground transition-colors duration-300 md:text-4xl">
            But A Legal & Ethics <br />
            <span className="text-primary">
              Ventures <span className="text-primary">Institute.</span>
            </span>
          </h3>
          <div className="mb-6 text-lg leading-relaxed text-muted-foreground transition-colors duration-300">
            Where curiosity meets courage.
            <hr className="my-2" />
            <p>
              For{" "}
              <span className="text-primary">
                students, career changers, international learners, innovators
              </span>
              - all welcome here.
            </p>
          </div>
          <div className="h-1 w-20 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
