import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
    Curve003: THREE.Mesh;
    Curve004: THREE.Mesh;
    Curve005: THREE.Mesh;
    Curve006: THREE.Mesh;
    Curve007: THREE.Mesh;
    Curve008: THREE.Mesh;
    Curve009: THREE.Mesh;
    Curve010: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/logo3d.glb") as GLTFResult;

  // Refs para las letras
  const curveRefs = useRef<THREE.Mesh[]>([]);

  // Función para manejar el hover
  const handlePointerEnter = (index: number) => {
    const target = curveRefs.current[index];
    if (target) {
      // Guardar la posición original solo la primera vez
      if (!target.userData.originalX) {
        target.userData.originalX = target.position.x;
      }

      // Mover sutilmente
      gsap.to(target.position, {
        x: target.userData.originalX + 0.02,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  // Función para regresar a la posición original
  const handlePointerLeave = (index: number) => {
    const target = curveRefs.current[index];
    if (target && target.userData.originalX !== undefined) {
      gsap.to(target.position, {
        x: target.userData.originalX, // Regresar a la posición original
        duration: 0.5,
        ease: "power1.out",
      });
    }
  };

  return (
    <group {...props} position={[0.02, 0, 0.25]} dispose={null}>
      {/* Letras */}
      {[
        nodes.Curve,
        nodes.Curve001,
        nodes.Curve002,
        nodes.Curve003,
        nodes.Curve004,
        nodes.Curve005,
        nodes.Curve006,
        nodes.Curve007,
        nodes.Curve008,
        nodes.Curve009,
        nodes.Curve010,
      ].map((curve, index) => (
        <mesh
          key={index}
          ref={(el) => (curveRefs.current[index] = el as THREE.Mesh)}
          castShadow
          receiveShadow
          geometry={curve.geometry}
          material={materials["Material.002"]}
          position={curve.position}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerEnter={() => handlePointerEnter(index)}
          onPointerLeave={() => handlePointerLeave(index)}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/logo3d.glb");
