"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-6 bg-[#1D1C2291] w-full rounded-lg">
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
