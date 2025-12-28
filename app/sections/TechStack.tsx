import React from "react"
import { techStack } from "../constants"
import TechLogo from "../components/TechModels/TechLogo"

const TechStack = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-12 pt-28 pb-24 text-white" id="skills">

      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          My Preferred <span className="text-blue-400">Tech Stack</span>
        </h1>
        <p className="mt-4 text-white/60 text-lg">
          Tools and technologies I enjoy working with to build performant,
          scalable, and modern web experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="
              group relative h-[340px] rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              hover:border-blue-400/40
              transition-all duration-300
              flex flex-col items-center justify-between
              px-4 py-6
            "
          >
            {/* Glow on hover */}
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-br from-blue-500/10 to-cyan-400/10
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            " />

            {/* 3D Logo */}
            <div className="relative w-full h-[220px]">
              <TechLogo model={tech.model} scale={tech.scale} />
            </div>

            {/* Name */}
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
