import Image from "next/image";
import React from "react";
import TeamPoint from "./TeamPoint";

const MeetTheTeam = () => {
  return (
    <section className="py-10 px-6 bg-muted transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a collaborative, welcoming legal intern team working at the
              dynamic intersection of{" "}
              <span className="text-[#F2784B]">artificial intelligence</span>,{" "}
              <span className="text-[#F2784B]">robotics</span>, and
              <span className="text-[#F2784B]"> law</span>. A frontier that
              requires both technical insight and ethical judgment.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <TeamPoint
                headWord="Research"
                text=" emerging technologies and legal landscapes"
              />
              <TeamPoint headWord="Listen" text=" to diverse perspectives" />
              <TeamPoint headWord="Understand" text=" complex challenges" />
              <TeamPoint headWord="Learn" text="  continuously" />{" "}
              <TeamPoint
                headWord="Develop"
                text="  solutions and skills
"
              />
              <TeamPoint headWord="Shape" text=" innovation responsibly" />
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-border">
            <Image
              src="/assets/statue.jpg"
              alt="Team Collaboration"
              fill
              className="object-cover opacity-80 dark:opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
