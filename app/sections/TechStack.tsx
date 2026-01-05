import React, { use } from "react"
import { techStack } from "../constants"
import TechLogo from "../components/TechModels/TechLogo"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react"


const TechStack = () => {
  const headingRef = React.useRef<HTMLDivElement>(null);
  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const subheadingTextRef = React.useRef<HTMLParagraphElement>(null);
  const techStackArrayRef = React.useRef<HTMLDivElement[]>([]);


  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
     const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
    },
  });
    tl.from(
      headingTextRef.current,
      { opacity: 0, y: -50, duration: 0.8, ease: "power2.out", delay: 0.3}
    ).from(
      subheadingTextRef.current,
      { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" }
    );
    techStackArrayRef.current
      .forEach((techCard, index) => {
        gsap.fromTo(
          techCard!,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: techCard,
              start: "top 85%",
            },
          }
        );
      });
  });
    return () => gsapContext.revert();
}, []);

  return (
    <section className="relative min-h-screen px-6 md:px-12 pt-28 pb-24 text-white" id="skills">

      
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      
      <div className="max-w-3xl mb-16" ref={headingRef}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight" ref={headingTextRef}>
          My Preferred <span className="text-blue-400">Tech Stack</span>
        </h1>
        <p className="mt-4 text-white/60 text-lg" ref={subheadingTextRef} id="subheading">
          Tools and technologies I enjoy working with to build performant,
          scalable, and modern web experiences.
        </p>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {techStack.map((tech,i) => (
          
          
          <div
          key={tech.name}
          ref={(el) => {techStackArrayRef.current[i] = el!}}
          className="
          group relative h-[340px] rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          hover:border-blue-400/40
          hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] 
          transition-all duration-300
          flex flex-col items-center justify-between
          px-4 py-6
          "
          >
            
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-blue-500/10 to-cyan-400/10
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
              " />

            
            <div className="relative w-full h-[220px]">
              <TechLogo model={tech.model} scale={tech.scale} />
            </div>

            
            <h2 className="relative mt-4 text-sm font-semibold tracking-wide text-white/80 group-hover:text-blue-400 transition-colors">
              {tech.name}
            </h2>
        </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
