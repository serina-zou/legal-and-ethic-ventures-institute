import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OrphanGuard } from "@/components/OrphanGuard";
import {
  AfterTheBarSection,
  DoYouSection,
  HeroSection,
  MazeSection,
  OfferSection,
  ProjectsSection,
  WhoWeAreSection,
} from "@/components/sections/PhaseOne";
import {
  ByTheNumbersSection,
  CompassSection,
  CultureSection,
  FoundationsSection,
  JourneyForwardSection,
  MeetTheTeamSection,
  MilestonesSection,
  NotAllSection,
} from "@/components/sections/PhaseTwo";
import {
  DeepDiveSection,
  InMotionSection,
  JoinSection,
  LookingAheadSection,
  PathForwardSection,
  TimelineSection,
} from "@/components/sections/PhaseThree";

export default function Home() {
  return (
    <>
      <SiteNav />
      <OrphanGuard>
        {/* Phase I — Institute introduction */}
        <HeroSection />
        <WhoWeAreSection />
        <MazeSection />
        <AfterTheBarSection />
        <OfferSection />
        <ProjectsSection />
        <DoYouSection />

        {/* Phase II — Team journey & roadmap */}
        <JourneyForwardSection />
        <MeetTheTeamSection />
        <CompassSection />
        <CultureSection />
        <ByTheNumbersSection />
        <FoundationsSection />
        <MilestonesSection />
        <NotAllSection />
        <InMotionSection />
        <DeepDiveSection />
        <PathForwardSection />
        <TimelineSection />
        <LookingAheadSection />
        <JoinSection />
      </OrphanGuard>
      <SiteFooter />
    </>
  );
}
