"use client";

import React from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import timeline from "./constants";
import { ReactLenis, useLenis } from "lenis/react";

const Page = () => {
  useLenis(() => {
  });

  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <Hero />
      <Projects />
      <TechStack />
      <Experience data={timeline} />
    </ReactLenis>
  );
};

export default Page;
