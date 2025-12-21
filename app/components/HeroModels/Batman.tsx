"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import  BatmanModel  from "./BatmanModel";

export default function Batman() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.5, 5], fov: 45 }}
    >
      {/* Ambient fill */}
      <ambientLight intensity={0.8} />

      {/* Key light */}
      <spotLight
        castShadow
        position={[-5, 6, 5]}
        angle={0.35}
        penumbra={1}
        intensity={2}
      />

      {/* Rim light (important) */}
      <directionalLight
        castShadow
        position={[-3, 2, -5]}
        intensity={0.6}
      />

      {/* HDR environment */}
      <Environment preset="city" />

      {/* Batman */}
      <BatmanModel scale={2.2} />

      {/* Camera controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={-1}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
