"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Model } from "./Fan";

/* =======================
   Animated Wrapper
======================= */
function EnergyCore({ children }: { children: React.ReactNode }) {
  const ref = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;

    ref.current.rotation.y = t * 0.25;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    ref.current.position.y = 1 + Math.sin(t * 1.2) * 0.05;
  });

  return <group ref={ref}>{children}</group>;
}

export default function EnergyScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.2, 6], fov: 45 }}
      gl={{ antialias: true }}
    >
      {/* ===== LIGHTING ===== */}
      <ambientLight intensity={0.05} />

      <directionalLight
        castShadow
        position={[4, 6, 4]}
        intensity={1.2}
      />

      <directionalLight
        position={[-6, 3, -6]}
        intensity={1}
        color="#7dd3fc"
      />

      <pointLight
        position={[0, 1, 0]}
        intensity={3}
        distance={6}
        decay={2}
        color="#3b82f6"
      />

      {/* ===== ENV ===== */}
      <Environment preset="night" />

      {/* ===== MODEL ===== */}
      <Suspense fallback={null}>
        <EnergyCore>
          <Model scale={0.15} />
        </EnergyCore>
      </Suspense>

      {/* ===== ENERGY CORE ===== */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1.25, 64, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#60a5fa"
          emissiveIntensity={1.1}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* ===== SHADOW ===== */}
      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.6}
        scale={6}
        blur={2.5}
        far={3}
      />

      {/* ===== CONTROLS ===== */}
      <OrbitControls enableZoom={false} enablePan={false} />

      {/* ===== POSTPROCESS (FIXED) ===== */}
      
    </Canvas>
  );
}
