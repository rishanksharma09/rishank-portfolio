import * as THREE from "three";
import type { JSX } from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function BatmanModel(
  props: JSX.IntrinsicElements["group"]
): JSX.Element {
  const groupRef = useRef<THREE.Group>(null!);

  const gltf = useGLTF("/models/batmantexturedrigged.glb");

  const nodes = gltf.nodes as Record<string, THREE.Object3D>;
  const materials = gltf.materials as Record<
    string,
    THREE.MeshStandardMaterial
  >;

  const body = nodes.Object_286 as THREE.SkinnedMesh;
  const head = nodes.Object_287 as THREE.SkinnedMesh;
  const pack = nodes.Object_288 as THREE.SkinnedMesh;

  // Floating animation (smooth & correct)
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.y =
      -1.75 + Math.sin(state.clock.elapsedTime) * 0.05;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint} />

          <skinnedMesh
            castShadow
            receiveShadow
            geometry={body.geometry}
            material={materials.M_MED_Cavern_Armored_Body}
            skeleton={body.skeleton}
          />

          <skinnedMesh
            castShadow
            receiveShadow
            geometry={head.geometry}
            material={materials.M_MED_Cavern_Armored_Head}
            skeleton={head.skeleton}
          />

          <skinnedMesh
            castShadow
            receiveShadow
            geometry={pack.geometry}
            material={materials.M_MED_Cavern_Pack}
            skeleton={pack.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/batmantexturedrigged.glb");
