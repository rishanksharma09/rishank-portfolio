"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 
        bg-[#0b0f19]/70 backdrop-blur-xl border-b border-white/10 sm:hidden">

       

        <button
          onClick={() => setOpen(true)}
          className="text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* menu panel */}
          <div className="absolute top-0 left-0 right-0 
            bg-[#0b0f19] rounded-b-3xl p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.7)]">

            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-white text-2xl"
            >
              ✕
            </button>

            {/* links */}
            <ul className="mt-10 flex flex-col gap-6 text-lg font-medium text-white">
              {["Work", "Experience", "Skills"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block w-full py-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-500">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
