"use client"

import { useGLTF, Environment } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { techStack } from "@/app/constants"
import { OrbitControls } from "@react-three/drei"
import { styleEffect } from "motion/react"

type TechLogoProps = {
  model: string
  scale: number
}

function TechLogoModel({ model, scale }: TechLogoProps) {
  const { scene } = useGLTF(model)
  const ref = useRef<THREE.Object3D>(null!)

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y += 0.01
  })

  return <primitive ref={ref} object={scene} scale={scale} />
}

techStack.forEach((tech) => {
  useGLTF.preload(tech.model)
})

export default function TechLogo({ model, scale }: TechLogoProps) {
  return (
    <Canvas className="cursor-grab active:cursor-grabbing" 
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
     
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 5]} intensity={0.8} />

      
      <Environment preset="studio" />

      <TechLogoModel model={model} scale={scale} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
      />

    </Canvas>
  )
}
