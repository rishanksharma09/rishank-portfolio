"use client";

import React from "react";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import timeline from "./constants";
import { ReactLenis, useLenis } from "lenis/react";
import Contact from "./sections/Contact";
import Chatbot from "./components/Chatbot/Chatbot";

const Page = () => {
  useLenis(() => {
  });

  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <Hero />
      <Projects />
      <Experience data={timeline} />
      <TechStack />
      <Contact />
    </ReactLenis>
  );
};

export default Page;
