"use client";

import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = forwardRef(function Model(props, ref) {
  const { nodes, materials } = useGLTF("/3d/legoBatman.glb");

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Color_24} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.Color_26_56630_bump} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.Decoration_3626d783} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.Decoration_3814d676} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.Color_26} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.Color_26} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.Color_26} />
      </group>
    </group>
  );
});

useGLTF.preload("/3d/legoBatman.glb");
