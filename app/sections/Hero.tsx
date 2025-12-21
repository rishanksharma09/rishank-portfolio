"use client"
import { useState,useEffect, use } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from 'lucide-react'
import Batman from '../components/HeroModels/Batman'
import { skills } from '../constants'
import gsap from 'gsap'



const Hero = () => {
    const[currentSkillIndex, setCurrentSkillIndex] = useState(0);
    useEffect(() => {
        gsap.fromTo("#skills", {opacity:0, y: -20}, {opacity:1, y:0, duration:0.3, ease:"power2.out"});
        gsap.to("#skills", {opacity:0, y: 20, duration:0.3, ease:"power2.in", delay:2, onComplete: () => {
            setCurrentSkillIndex((currentSkillIndex) => (currentSkillIndex + 1) % skills.length);
        }});
    }, [currentSkillIndex]);
     
    return (
        <>
            <header className="w-full flex justify-center" id='navbar'>
                <Navbar />
            </header>
            <main className="w-full mt-20 flex justify-between items-center grid grid-cols-2 gap-0  px-19 ">
                <section className="left flex flex-col gap-6  justify-center h-[500px] w-full  ">
                    <div className="heading"><h1 className="text-7xl font-bold text-white">Saving the world through my <div className="text-blue-400" id='skills'>{skills[currentSkillIndex]}</div> skills</h1></div>
                    <div className="subheading"><span className="text-lg text-gray-300 mt-4">Hi, I'm <span className="text-blue-400 font-bold">Rishank Sharma</span> aka Batman, a developer passionate about creating impactful web solutions.</span></div>
                    <div className="button">
                        <Button className='bg-amber-50 text-black'>See my work <ArrowDownIcon></ArrowDownIcon></Button>
                    </div>


                </section>
                <section className="relative h-[500px] w-full 
                 ">

                    {/* Subtle Batman shadow */}
                    <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(120,120,120,0.25)_0%,rgba(120,120,120,0.15)_25%,transparent_65%)] blur-2xl pointer-events-none">
                    </div>

                    {/* Batman */}
                    <div className="absolute left-0 top-0 h-full w-full">
                        <Batman />
                    </div>

                </section>


            </main>
                <section className="grid grid-cols-4 gap-4 mt-10 w-full  flex justify-center items-center  text-white h- ">
                    <div className='bg-[#0e0e10] flex flex-col justify-center  p-8 rounded-lg py-11'>
                        <h2 className="text-3xl font-bold text-white">15+</h2>
                        <p>years of experience</p>
                    </div>
                    <div className='bg-[#0e0e10] flex flex-col justify-center p-8 py-11 rounded-lg'>
                        <h2 className="text-3xl font-bold text-white">200+</h2>
                        <p>satisfied clients</p>
                    </div>
                    <div className='bg-[#0e0e10] flex flex-col justify-center p-8 py-11 rounded-lg'>
                        <h2 className="text-3xl font-bold text-white">105+</h2>
                        <p>projects completed</p>
                    </div>
                    <div className='bg-[#0e0e10] flex flex-col justify-center p-8 py-11 rounded-lg'>
                        <h2 className="text-3xl font-bold text-white">150+</h2>
                        <p>positive reviews</p>
                    </div>
                </section>

        </>
    )
}

export default Hero
