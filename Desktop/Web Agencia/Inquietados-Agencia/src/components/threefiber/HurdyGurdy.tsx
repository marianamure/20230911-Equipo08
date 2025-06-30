import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
type GLTFResult = GLTF & {
  nodes: {
    afinadores001: THREE.Mesh;
    afinadores002: THREE.Mesh;
    afinadores003: THREE.Mesh;
    afinadores004: THREE.Mesh;
    afinadores005: THREE.Mesh;
    afinadores011: THREE.Mesh;
    arcos001: THREE.Mesh;
    cabeza: THREE.Mesh;
    cable: THREE.Mesh;
    cable001: THREE.Mesh;
    cable001_1: THREE.Mesh;
    cable001001: THREE.Mesh;
    cable002: THREE.Mesh;
    cable002001: THREE.Mesh;
    cuello: THREE.Mesh;
    cuerpo: THREE.Mesh;
    manivela001: THREE.Mesh;
    media_rueda: THREE.Mesh;
    paletita: THREE.Mesh;
    paletita001: THREE.Mesh;
    paletita002: THREE.Mesh;
    paletita003: THREE.Mesh;
    paletita004: THREE.Mesh;
    paletita005: THREE.Mesh;
    paletita006: THREE.Mesh;
    puente001: THREE.Mesh;
    tapa: THREE.Mesh;
    tecla: THREE.Mesh;
    tecla001: THREE.Mesh;
    tecla002: THREE.Mesh;
    tecla003: THREE.Mesh;
    tecla004: THREE.Mesh;
    tecla005: THREE.Mesh;
    tecla006: THREE.Mesh;
    tirante001: THREE.Mesh;
  };
  materials: {
    "Material:007": THREE.Material;
    "Material:008": THREE.Material;
    "Material:009": THREE.Material;
    "Material:010": THREE.Material;
    "Material:011": THREE.Material;
  };
};

interface ModelProps extends GroupProps {}

export function HurdyGurdy(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "/3d/hurdyGurdy/hurdyGurdy.gltf"
  ) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.afinadores001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.afinadores002.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.afinadores003.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.afinadores004.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.afinadores005.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.afinadores011.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.arcos001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cabeza.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable001_1.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable001001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable002.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cable002001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cuello.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cuerpo.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.manivela001.geometry}
        material={materials["Material:007"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.media_rueda.geometry}
        material={materials["Material:010"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita002.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita003.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita004.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita005.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.paletita006.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.puente001.geometry}
        material={materials["Material:009"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tapa.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla001.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla002.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla003.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla004.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla005.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tecla006.geometry}
        material={materials["Material:011"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tirante001.geometry}
        material={materials["Material:008"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/3d/hurdyGurdy/hurdyGurdy.gltf");
