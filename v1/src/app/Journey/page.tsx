import type { Metadata } from "next";
import DeepDive from "@/components/code-split/journey/DeepDive";
import Foundations from "@/components/code-split/journey/Foundations";
import Growing from "@/components/code-split/journey/Growing";
import Hero from "@/components/code-split/journey/Hero";
import InMotion from "@/components/code-split/journey/InMotion";
import JoinUs from "@/components/code-split/journey/JoinUs";
import MeetTheTeam from "@/components/code-split/journey/MeetTheTeam";
import MileStone from "@/components/code-split/journey/MileStone";
import NotAll from "@/components/code-split/journey/NotAll";
import OurCompass from "@/components/code-split/journey/OurCompass";
import PathForward from "@/components/code-split/journey/PathForward";
import Planned from "@/components/code-split/journey/Planned";
import Initiatives from "@/components/Initiatives";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Explore the Legal & Ethics Ventures Institute journey — team, compass, milestones, and how we build responsibly.",
};

export default function Journey() {
  return (
    <div className="min-h-full bg-background text-foreground font-sans transition-colors duration-300">
      {/* 1. HERO */}
      <Hero />
      {/* 2. MEET THE TEAM */}
      <MeetTheTeam />
      {/* 3. COMPASS */}
      <OurCompass />
      <Growing />
      <Initiatives />
      <Foundations />
      
      <MileStone />
      <NotAll />
      <InMotion />
      <DeepDive />
      <PathForward />
      <Planned />
      {/* 6. CTA */}
      <JoinUs />
    </div>
  );
}
