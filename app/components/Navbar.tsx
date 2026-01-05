"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobileNavbar from "./MobileNavbar";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  useEffect(() => {
    if (isMobile) return; 
    gsap.registerPlugin(ScrollTrigger);
     ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      if (self.direction === 1) {
        gsap.to("#navbar", { y: "-200%", duration: 0.8 })
      } else {
        gsap.to("#navbar", { y: 0, duration: 0.8 })
      }
    },
  })
    gsap.fromTo(
      "#navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    isMobile ? <MobileNavbar /> :
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2" id="navbar">
      
      {/* outer glow */}
      <div className="absolute inset-0 rounded-full blur-xl 
        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_65%)]" />

      
      <div
        className="
          relative
          flex items-center gap-10
          px-7 py-3
          rounded-full
          bg-[#0b0f19]/70
          backdrop-blur-xl
          border border-white/10
          shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        "
      >
        
        <div className="relative flex items-center gap-1 group cursor-pointer">
          <Link href="#home">

          <Image
            src="/images/home.svg"
            alt="home"
            width={25}
            height={25}
            className="invert opacity-90 group-hover:opacity-100 transition"
            />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition" />
            </Link>
        </div>

        
        <div className="h-6 w-px bg-white/10" />

        
        <ul className="flex items-center gap-8 text-sm font-medium text-white/80">
          {["Work", "Experience", "Skills"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition text-white/80 group-hover:text-white"
              >
                {item}
              </a>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 
                w-1.5 h-1.5 rounded-full bg-blue-500 
                opacity-0 group-hover:opacity-100 transition" />
            </li>
          ))}
        </ul>

        
        <a href="#contact"><Button

          className="
          tesxt-sm font-medium
            relative
            rounded-full
            px-3 py-1
            bg-blue-600
            hover:bg-blue-500
            text-white
            cursor-pointer
            transition
          "
        >
          Contact
          <span className="absolute inset-0 rounded-full 
            bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)]
            opacity-0 hover:opacity-100 transition" />
        </Button>
        </a>

        {/* inner energy line */}
        <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px 
          bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>
    </nav>
  );
}
