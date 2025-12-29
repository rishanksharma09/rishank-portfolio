"use client";

import { useEffect, useState,useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { LucideLink2 } from "lucide-react";
import Batman from "../components/HeroModels/Batman";
import { skills } from "../constants";
import GlowCard from "../components/GlowCard";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroBoxes } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const headingRef = useRef(null)
  const headingTextRef = useRef(null)
  const subheadingTextRef = useRef(null)
  const contactButtonRef = useRef(null)
  const heroBoxesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
      const gsapContext = gsap.context(() => {
       const tl = gsap.timeline({});
      tl.from(
        headingTextRef.current,
        { opacity: 0, y: -50, duration: 0.8, ease: "power2.out", delay: 0.6}
      ).from(
        subheadingTextRef.current,
        { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" }
      ).from(
        contactButtonRef.current,
        { opacity: 0, y: 20, duration: 1, ease: "power2.out" }
      );
    });
    heroBoxesRef.current.forEach((box, index) => {
      gsap.from(
        box,
        { opacity: 0, y: 20, duration: 0.4, ease: "power2.out", delay: index * 0.1 ,scrollTrigger: {
          trigger: box,
          start: "top 90%",
        }, }
      );
    });

      return () => gsapContext.revert();
  }, []);
   


  

  useLayoutEffect(() => {

    const gsapContext = gsap.context(() => {

    gsap.fromTo(
      "#skill-word",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );

    gsap.to("#skill-word", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: "power2.in",
      delay: 2,
      onComplete: () => {
        setCurrentSkillIndex((i) => (i + 1) % skills.length);
      },
    });
    });

    return () => gsapContext.revert();
  }, [currentSkillIndex]);

  return (
    <section className="relative w-full min-h-screen bg-[#05070c] overflow-hidden">

      {/* background glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(37,99,235,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* HERO CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-8" id="left">
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight text-white" ref={headingTextRef}>
            Saving the world <br />
            through my{" "}
            <span
              id="skill-word"
              className="block text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
              {skills[currentSkillIndex]}
            </span>
            skills
          </h1>

          <p className="max-w-xl text-lg text-white/60 leading-relaxed" ref={subheadingTextRef}>
            Hi, I’m{" "}
            <span className="text-blue-400 font-medium">Rishank Sharma</span>, aka
            Batman — a frontend developer focused on building immersive,
            high-impact web experiences.
          </p>

          <div className="flex items-center gap-4" ref={contactButtonRef}>
            <Button
              className="group relative rounded-full px-7 py-6 text-base font-medium bg-blue-600 hover:bg-blue-500 transition shadow-[0_0_30px_rgba(59,130,246,0.45)]"
            >
              View CV
              <LucideLink2 className="ml-2 h-4 w-4 opacity-80" />
              <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] opacity-0 group-hover:opacity-100 transition" />
            </Button>
          </div>
        </div>

        {/* RIGHT – 3D STAGE */}
        <div className="relative h-[520px] w-full flex items-center justify-center pointer-events-none">

          {/* batman glow */}
          <div className="absolute w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_65%)] blur-3xl" />

          {/* 3D MODEL */}
          <div className="relative w-full h-full">
            <Batman />
          </div>
        </div>
      </main>

      {/* STATS */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {heroBoxes.map((box,i) => (
          <div key={i} ref={(el) => {heroBoxesRef.current[i] = el!}}>

          <GlowCard title={box.title} subtitle={box.subTitle} />
          </div>
        ))}
      </section>
    </section>
  );
}
