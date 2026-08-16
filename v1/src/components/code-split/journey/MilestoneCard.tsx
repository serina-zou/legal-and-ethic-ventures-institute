import { CheckCircle } from "lucide-react";

export default function MilestoneCard({ title, desc }: any) {
  return (
    <div className="rounded-xl border border-border bg-card p-8 shadow-sm transition-colors hover:border-primary">
      <div className="flex items-center gap-3 mb-4">
        <CheckCircle className="w-6 h-6 " />
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
