import React from "react";

const initiatives = [
  {
    title: "Space Forum — Nikkei Forum",
    lead: "Attended expert discussions on space industry topics, partnerships, and regulatory frameworks.",
    more: "Comprehensive briefing delivered to company leadership, ensuring we stay informed on space law developments.",
  },
  {
    title: "Cybersecurity Tokyo Initiative — Nikkei Forum",
    lead: "Attended expert talks on cybersecurity trends, emerging threats, and strategic recommendations.",
    more: "Actionable insights shared across teams, keeping the company aligned with cutting-edge security practices.",
  },
];

const NotAll = () => {
  return (
    <section className="my-2 bg-muted px-4 py-10 text-foreground sm:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 text-center text-[18px] md:mb-14 lg:mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            But That&apos;s Not All
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            We take initiative, stay informed, and ensure we{" "}
            <span className="font-medium text-primary">remain at the forefront</span>{" "}
            of legal and technological developments.
          </p>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We act as a <span className="font-medium text-primary">catalyst</span> by
            supporting{" "}
            <span className="font-medium text-primary">cross-collaboration</span>,
            connecting insights across teams, and ensuring external developments
            translate into internal value.
          </p>

          <h2 className="mt-8 text-xl font-bold text-foreground md:text-2xl">
            Recent Initiatives
          </h2>
          <p className="sr-only">
            On large screens, hover an initiative card to reveal the full
            summary. All text is visible without hovering on small screens.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {initiatives.map((item) => (
            <article
              key={item.title}
              title="Hover to read the full summary (desktop)"
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:cursor-pointer md:text-left">
              <h3 className="text-lg font-bold leading-snug text-primary md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                {item.lead}
              </p>
              <div className="grid transition-[grid-template-rows] duration-500 ease-out max-md:grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                <div className="min-h-0 overflow-hidden">
                  <p className="pt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                    {item.more}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotAll;
