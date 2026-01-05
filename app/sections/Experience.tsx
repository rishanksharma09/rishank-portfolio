"use client";

import gsap from "gsap";
import { use, useEffect, useRef,useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  year: string;
  title: string;
  description: string;
};

type PropsArray = {
  data: Props[];
};

export default function Experience({ data }: PropsArray) {
  const experienceRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  const [timelineHeight, setTimelineHeight] = useState(0); 
  useEffect(() => {
    const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
    },
  });
    tl.from(
      "#heading",
      { opacity: 0, y: -50, duration: 0.8, ease: "power2.out", delay: 0.3}
    ).from(
      "#subheading",
      { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" }
    );


  ScrollTrigger.create({
    trigger: experienceRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      setTimelineHeight(self.progress * 100);  
    }
  })}, []);

  return (
    <section className="relative w-full bg-[#05070c] py-20 pt-28 overflow-hidden mt-30 " id="experience"  ref={experienceRef}>

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.15),transparent_45%)]" />

      
      <div className="relative z-10 text-center mb-24" ref={headingRef} >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white" id="heading">
          My <span className="text-blue-500">Learning Journey</span>
        </h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto" id="subheading">
          From fundamentals to building real-world interfaces.
        </p>
      </div>

     
      <div className="relative z-10 max-w-5xl mx-auto px-6" id="experience-scroll-trigger">

       
        <div className={`absolute left-1/2 top-0 w-[2px] 
          bg-gradient-to-b from-transparent via-blue-500/40 to-transparent
          shadow-[0_0_30px_rgba(59,130,246,0.4)]`}
          style={{height:`${timelineHeight}%`}} />

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          useEffect(() => {
            const card = cardRefs.current[index];
            if (!card) return;

            gsap.from(card, {
              opacity: 0,
              
              duration: 0.1,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            });
          }, []);

          return (
            <div
              key={index}
              className={`relative my-24 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              
              <div
                ref={(el) => {cardRefs.current[index] = el}}
                className={`w-full md:w-[45%] relative rounded-2xl p-6 z-10
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-[0_0_40px_rgba(59,130,246,0.15)]
                  transition-transform duration-300 hover:-translate-y-2`}
              >
                <span className="text-xs tracking-widest text-white/40">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-blue-400">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* subtle inner glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl 
                  bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
              </div>

              
              <span className="absolute left-1/2 top-8 -translate-x-1/2 flex items-center justify-center z-0">
                <span className="absolute w-8 h-8 rounded-full bg-blue-500/20 blur-md animate-pulse" />
                <span className="relative w-3.5 h-3.5 rounded-full bg-white border-4 border-[#05070c]" />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
