import React from 'react'
import { techStack } from '../constants'
import TechLogo from '../components/TechModels/TechLogo'

const TechStack = () => {
    return (
        <div className="min-h-screen p-8 text-white pt-20 space-y-8 ">
            <h1 className="text-4xl font-bold">My Preffered Tech Stack</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2  ">
                {techStack.map((tech) => (
                    <div key={tech.name} className="tech-item h-[360px] w-[210px]  rounded-md flex justify-center items-center flex-col bg-[#0E0E10] hover:bg-[#2D3240] p-6 rounded-t-full rounded-b-full py-15">
                        <TechLogo model={tech.model} scale={tech.scale} />
                        <h2 className="text-lg font-bold ">{tech.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack
