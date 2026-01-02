"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Model } from "./Fan";
import { useFrame } from "@react-three/fiber";

const EnergyScene = () => {
  return (
    <Canvas
  shadows
  dpr={[1, 2]}
  camera={{ position: [0, 1.1, 8.5], fov: 50 }}
  gl={{ antialias: true, toneMappingExposure: 0.9 }}
>
  <ambientLight intensity={0.1} />



  <directionalLight
    castShadow
    position={[3, 6, 3]}
    intensity={0.8}
  />

  <directionalLight
    position={[-2, 2, 4]}
    intensity={0.35}
  />

  <directionalLight
    position={[-4, 3, -4]}
    intensity={0.5}
    color="#6ea8ff"
  />

  <pointLight
    position={[0, 0.4, 0]}
    intensity={1.4}
    distance={7}
    decay={2}
    color="#3b82f6"
  />

  <Environment preset="city" />

  <Suspense fallback={null}>
    <Model scale={0.3} position={[0, 1, 0]} />
  </Suspense>

  <mesh position={[0, 0.4, 0]}>
    <sphereGeometry args={[1.2, 32, 32]} />
    <meshStandardMaterial
      color="#3b82f6"
      emissive="#3b82f6"
      emissiveIntensity={0.15}
      transparent
      opacity={0.05}
    />
  </mesh>

  <ContactShadows
    position={[0, -1.1, 0]}
    opacity={0.6}
    scale={6}
    blur={2}
    far={3}
  />



  <OrbitControls enableZoom={false} enablePan={false}  />
</Canvas>

  );
};

export default EnergyScene;
