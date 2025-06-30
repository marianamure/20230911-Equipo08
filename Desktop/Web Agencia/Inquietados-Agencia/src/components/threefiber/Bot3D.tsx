import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";

interface GLTFResult extends GLTF {
  nodes: {
    frente003: THREE.Mesh;
    antena001: THREE.Mesh;
    antenitas002: THREE.Mesh;
    antenitas002_1: THREE.Mesh;
    antenitas003_1: THREE.Mesh;
    antenitas003_2: THREE.Mesh;
    cabeza001001: THREE.Mesh;
    cabeza003001: THREE.Mesh;
    cachetes001: THREE.Mesh;
    cachetes001001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle001001: THREE.Mesh;
    Circle002001_1: THREE.Mesh;
    Circle002001_2: THREE.Mesh;
    Circle003001: THREE.Mesh;
    Circle004001: THREE.Mesh;
    frente004001: THREE.Mesh;
    inel_hd001: THREE.Mesh;
    motor002: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane001001: THREE.Mesh;
    Sphere002: THREE.Mesh;
    Star001: THREE.Mesh;
    Star001001: THREE.Mesh;
    Vert001: THREE.Mesh;
    Vert001001: THREE.Mesh;
    Vert002001: THREE.Mesh;
  };
  materials: {
    "Material.002": THREE.Material;
    "Material.004": THREE.Material;
  };
}

interface ModelProps extends GroupProps {}

export function Bot3D(props: ModelProps) {
  const { nodes, materials } = useGLTF("/B12-bot.glb") as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frente003.geometry}
        material={materials["Material.002"]}
        position={[-0.001, 0.002, 0.58]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.antena001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <group position={[0.438, -0.539, -0.417]} rotation={[-0.384, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antenitas002.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antenitas002_1.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <group position={[-0.44, -0.539, -0.417]} rotation={[-0.377, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antenitas003_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.antenitas003_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cabeza001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cabeza003001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cachetes001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cachetes001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <group position={[-0.001, -1.217, -0.463]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <group position={[-0.001, -1.217, -0.463]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002001_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002001_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.frente004001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.inel_hd001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.motor002.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Star001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Star001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert002001.geometry}
          material={materials["Material.002"]}
          position={[-0.001, -1.217, -0.463]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/B12-bot.glb");
