"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { LucideGithub, LucideLink } from "lucide-react"
import { projects } from "../constants"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const [projectInfo, setProjectInfo] = useState(projects[0])
  const currentIndex = useRef(0)

  useEffect(() => {



    const trigger = ScrollTrigger.create({
      trigger: "#projectTrigger",
      start: "top top",
      end: "+=1500",
      scrub: true,
      snap: {
  snapTo: 1 / (projects.length - 1),
  duration: 0.3,
  ease: "power2.out"
},

      onUpdate: (self) => {

        const index = Math.floor(self.progress * projects.length)

        if (index !== currentIndex.current && index < projects.length) {
          currentIndex.current = index

          gsap.to(".project-card", {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              setProjectInfo(projects[currentIndex.current])
              gsap.to(".project-card", { opacity: 1, duration: 0.2 })
            }
          })
        }
      }
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <div
      id="projectTrigger"
      className="min-h-[300vh] p-8 space-y-6 text-white pt-20"
    >
      <div className="sticky top-20 space-y-6">
        <h1 className="text-4xl font-bold">My Work</h1>

        <div className="project-card bg-gradient-to-br
  from-[#1a1a1a]
  via-[#0d0d0d]
  to-black
  rounded-2xl
  border border-white/10 p-6 rounded-2xl space-y-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold">
            {projectInfo.name}
          </h2>

          <div className="border border-gray-700 rounded-lg overflow-hidden">
            <Image
              src={projectInfo.imageUrl}
              alt="Project Image"
              width={800}
              height={800}
            />
          </div>

          <p className="text-center">{projectInfo.description}</p>

          <div className="flex space-x-4">
            <LucideGithub color="rgb(80, 161, 254)" />
            <LucideLink color="rgb(80, 161, 254)" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
