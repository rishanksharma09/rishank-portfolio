"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment,Center } from "@react-three/drei";
// import  BatmanModel  from "./BatmanModel";
import { EffectComposer, FXAA } from "@react-three/postprocessing";

import {Model} from "./LegoBatman"




export default function Batman() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: false }}
      camera={{ position: [0, -20, 8], fov: 25 }}
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
        intensity={1}
      />

      {/* HDR environment */}
      <Environment preset="city" />



      {/* Batman */}
      {/* <BatmanModel scale={2.2} /> */}
      <Center>

      {/* <Model scale={0.15} /> */}
      </Center>
       <EffectComposer multisampling={0}>
        <FXAA />
      </EffectComposer>

      {/* Camera controls */}
      <OrbitControls
        // autoRotate
        // autoRotateSpeed={-1}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
