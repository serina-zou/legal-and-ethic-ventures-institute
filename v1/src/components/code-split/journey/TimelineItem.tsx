export default function TimelineItem({
  phase,
  title,
  desc,
  align,
  highlight,
}: any) {
  const isLeft = align === "left";
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"}`}>
      <div
        className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-border ${highlight ? "scale-125 bg-primary" : "bg-background"}`}
      />
      <div className="hidden md:block w-1/2" />
      <div
        className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
        <div
          className={`rounded-xl border p-6 shadow-md transition-all ${highlight ? "border-primary bg-primary/10" : "border-border bg-card"}`}>
          <span
            className={`mb-2 block text-xs font-bold uppercase tracking-widest ${highlight ? "text-primary" : "text-muted-foreground"}`}>
            Phase {phase}
          </span>
          <h3 className="text-xl font-bold mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-md">{desc}</p>
        </div>
      </div>
    </div>
  );
}
