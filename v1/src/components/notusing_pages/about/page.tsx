import Hero from "@/components/code-split/about/Hero";
import HowWeWork from "@/components/code-split/about/HowWeWork";
import IfWant from "@/components/code-split/about/IfWant";
import OueValues from "@/components/code-split/about/OueValues";
import OurMission from "@/components/code-split/about/OurMission";
import WhatWeDo from "@/components/code-split/about/WhatWeDo";
import WhoFor from "@/components/code-split/about/WhoFor";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen  rounded-[16px]    mt-[100px] mb-[50px] ">
      <Hero />
      <OurMission />
      <WhatWeDo />
      <WhoFor/>
      <HowWeWork/>
      <OueValues/>
      <IfWant/>

    </div>
  );
};

export default page;
