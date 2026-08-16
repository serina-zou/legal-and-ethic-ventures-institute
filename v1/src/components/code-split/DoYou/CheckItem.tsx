import {
  Globe,
  ArrowRight,
  Lock,
  Unlock,
  Zap,
  Brain,
  Shield,
  Users,
  PenTool,
  Scale,
  Trophy,
  CheckCircle2,
  X,
} from "lucide-react";
export default function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
      <p className="text-lg font-medium text-foreground">{text}</p>
    </div>
  );
}
