"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2
  z-50
  px-6 py-3
  flex gap-8 items-center
  bg-white/5
  backdrop-blur-xl
  border border-white/10

  shadow-lg shadow-black/30 rounded-3xl">
      <div className="left flex items-center gap-2 ">
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} className='invert'></Image>
        <h1 className="text-2xl font-bold text-white"></h1>
      </div>
      <div className="center">
        <ul className="flex gap-8 text-white">
          <li><a href="#home">Work</a></li>
          <li><a href="#about">Skills</a></li>
          <li><a href="#projects">Experience</a></li>
          <li><a href="#contact">Testimonials</a></li>
        </ul>
      </div>
      <div className="right">
        <Button>Contact me</Button>
      </div>
    </div>
  )
}

export default Navbar
