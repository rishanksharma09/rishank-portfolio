"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { LucideGithub, LucideLink } from "lucide-react"
import { projects } from "../constants"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ActionIcon from "../components/ActionIcon"
import Link from "next/link"


gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const activeIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
  const navbar = document.querySelector("#navbar");

  ScrollTrigger.create({
    trigger: "#projectTrigger1", // or the section wrapper
    start: "top top",
    end: "bottom top",

    onEnter: () => {
      gsap.to(navbar, {
        y: "-300",
        duration: 0.3,
        ease: "power2.out",
      })
    },
    onEnterBack: () => {
      gsap.to(navbar, {
        y: "-300",
        duration: 0.3,
        ease: "power2.out",
      })
    },

    onLeaveBack: () => {
      gsap.to(navbar, {
        y: "0%",
        duration: 0.3,
        ease: "power2.out",
      })
    },

    onLeave: () => {
      gsap.to(navbar, {
        y: "0%",
        duration: 0.3,
        ease: "power2.out",
      })
    },
  })

  ScrollTrigger.create({
    trigger: "#projectTrigger2", // or the section wrapper
    start: "top top",
    end: "bottom top",

    onEnter: () => {
      gsap.to(navbar, {
        y: "-300",
        duration: 1,
        ease: "power2.out",
      })
    },
    onEnterBack: () => {
      gsap.to(navbar, {
        y: "-300",
        duration: 1,
        ease: "power2.out",
      })
    },

    onLeaveBack: () => {
      gsap.to(navbar, {
        y: "0%",
        duration: 1,
        ease: "power2.out",
      })
    },

    onLeave: () => {
      gsap.to(navbar, {
        y: "0%",
        duration: 1,
        ease: "power2.out",
      })
    },
  })
}, [])


  useEffect(() => {
    // intro animation
    

    projects.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#project-marker-${index}`,
        start: "top bottom",
        end: `bottom bottom`,
        scrub: true,
        onEnter: () => changeProject(index),
        onEnterBack: () => changeProject(index),
      })
    })

    


    function changeProject(index:number) {
      if (index === activeIndexRef.current) return
      activeIndexRef.current = index


      gsap.to(cardRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          setActiveIndex(index)

          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
          )
        },
      })
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const project = projects[activeIndex]

  return (
    <section  className="relative px-6 pt-28 text-white" id="work">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="absolute bottom-32 right-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      {/* SECTION HEADING (always visible) */}
      <div className="mb-20 max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight">
          My <span className="text-blue-400">Work</span>
        </h1>
        <p className="mt-4 text-white/60 text-lg">
          A selection of projects that showcase my frontend, backend,
          and system design skills.
        </p>
      </div>

      {/* STICKY PROJECT CARD */}
      <div className="sticky top-2 flex justify-center z-10">
      <div id="projectTrigger1">
        <div
          ref={cardRef}
          className="
            w-full max-w-5xl
            rounded-3xl
            bg-white/5 backdrop-blur-2xl
            border border-white/10
            p-10
            shadow-[0_0_80px_rgba(59,130,246,0.15)]
          "
        >
          <h2 className="text-4xl font-semibold text-center mb-6">
            {project.name}
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={1200}
              height={700}
              className="object-cover"
            />
          </div>

          <p className="mt-6 text-center text-white/70 max-w-3xl mx-auto">
            {project.description}
          </p>

          <div className="mt-6 flex justify-center gap-8">
            <Link href={project.githubUrl} target="_blank">
            <ActionIcon>
              <LucideGithub />
            </ActionIcon>
            </Link>
            <Link href={project.liveUrl} target="_blank">
            <ActionIcon>
              <LucideLink />
            </ActionIcon>
            </Link>
          </div>
        </div>
        </div>
      </div>

      {/* SCROLL MARKERS (BELOW sticky) */}
      <div id="projectTrigger2" className="mt-[60vh]">
        {projects.map((_, i) => (
          <div
            key={i}
            id={`project-marker-${i}`}
            className="h-[55vh]"
          />
        ))}
      </div>
    </section>
  )
}

export default Projects

