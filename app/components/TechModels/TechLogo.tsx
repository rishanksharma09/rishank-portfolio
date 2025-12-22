"use client"

import { useGLTF, OrbitControls, Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

type TechLogoProps = {
  model: string,
  scale:number
}

function TechLogoModel({ model,scale }: TechLogoProps) {
  const gltf = useGLTF(model)

  return <primitive object={gltf.scene} scale={scale} />
  
}


export default function TechLogo({ model,scale}: TechLogoProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      {/* Lights */}
      <ambientLight intensity={0.2} />

      <spotLight
        castShadow
        position={[-5, 6, 5]}
        angle={0.35}
        penumbra={1}
        intensity={2}
      />

      <directionalLight
        castShadow
        position={[-3, 2, -5]}
        intensity={0.6}
      />
      <Environment preset="warehouse"/>

      

    

      {/* Model */}
      <TechLogoModel model={model} scale={scale} />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={3}
        enableZoom={false}
        enablePan={true}
        
      />
    </Canvas>
  )
}
