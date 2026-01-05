"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { Model } from "./Robot";

const RobotScene = () => {
  return (
    <Canvas
      className="w-full h-full"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.8, 4.2], fov: 38 }}
    >
      
      <ambientLight intensity={0.25} />

     
      <directionalLight
        castShadow
        position={[3, 6, 3]}
        intensity={1.1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

     
      <directionalLight
        position={[-3, 3, -3]}
        intensity={0.8}
      />

     
      <spotLight
        position={[0, 6, 0]}
        intensity={0.4}
        angle={0.4}
        penumbra={1}
      />

      
      <Environment preset="studio" />

      <Suspense fallback={null}>
        <Model scale={1.2} position={[0, -1.25 , 0]} />
      </Suspense>

      
      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.45}
        scale={5}
        blur={2.5}
        far={2}
      />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default RobotScene;
