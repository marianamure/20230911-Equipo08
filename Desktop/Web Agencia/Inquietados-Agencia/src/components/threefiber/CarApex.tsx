import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    culata_Low: THREE.Mesh;
    Cargador_Low: THREE.Mesh;
    Guarda_mano_Low: THREE.Mesh;
    caja_cilindros_Low: THREE.Mesh;
    cili_centro_Low: THREE.Mesh;
    Tope_Low: THREE.Mesh;
    Detallitos_Low: THREE.Mesh;
    Sostiene_Mango_Low: THREE.Mesh;
    Debajo_de_bocacha_Low: THREE.Mesh;
    bocacha_Low: THREE.Mesh;
    Riel_del_mango_Low: THREE.Mesh;
    Mango_Low: THREE.Mesh;
    Encima_del_cargador_Low: THREE.Mesh;
    Metal_oscuro_Low: THREE.Mesh;
    Parte_extra_metal__Low: THREE.Mesh;
    Cuadrados_metal_negro_Low: THREE.Mesh;
    Encimeros_metal_abajo_Low: THREE.Mesh;
    Metal_arriba_y_abajo_Low: THREE.Mesh;
    Encimeros_Metal_arriba_Low: THREE.Mesh;
    Abajo_bochata_Low: THREE.Mesh;
    Metal_arriba_sobresalido_Low: THREE.Mesh;
    Metal_detras_Low: THREE.Mesh;
    Cilindro_adelante_Low: THREE.Mesh;
    cilindro_culata_Low: THREE.Mesh;
    hierrito_rojo_Low: THREE.Mesh;
    Detalle_circular_Low: THREE.Mesh;
    Mira_adelante_Low: THREE.Mesh;
    Sosten_mira_atras_Low: THREE.Mesh;
    Mira_atras_Low: THREE.Mesh;
    Boton_Tope_Low: THREE.Mesh;
    Remaches_sostiene_mango_Low: THREE.Mesh;
    Remaches_Low: THREE.Mesh;
    Ruedita_Mira_atras_Low: THREE.Mesh;
    Rueditas_Mira_adelante_Low: THREE.Mesh;
    Rueditas_mira_adelanteA_Low: THREE.Mesh;
    "Arandela_Metal_oscuro_(negra)_Low": THREE.Mesh;
    Arandelas_Metal_oscuro_Low: THREE.Mesh;
    Manijita_Metal_oscuro_Low: THREE.Mesh;
    Remaches_Metal_arriba_sobresalido_Low: THREE.Mesh;
    Botones_Mango_Low: THREE.Mesh;
    Botones_mangoA_Low: THREE.Mesh;
    Remaches_Encimeros_Metal_Arriba_Low: THREE.Mesh;
    Remaches_Encimeros_metal_abajo_Low: THREE.Mesh;
    Tornillo_Encima_del_cargador_Low: THREE.Mesh;
    Boton_Encima_del_cargadorA_Low: THREE.Mesh;
    Boton_Encima_del_cargador_Low: THREE.Mesh;
    BotonP_Encima_del_cargador_Low: THREE.Mesh;
    Boton_Debajo_de_bocacha_Low: THREE.Mesh;
    Botones_cuadrados_Culata_Low: THREE.Mesh;
    Pantalla_culata_Low: THREE.Mesh;
    Plaquitas_culata_Low: THREE.Mesh;
    Metalcito_culata_Low: THREE.Mesh;
    Manijita_metal_culata_Low: THREE.Mesh;
    Agarre_culata_Low: THREE.Mesh;
    Punta_culata_Low: THREE.Mesh;
    plastico_cilindro_culata_Low: THREE.Mesh;
    Metalito_Cargador_Low: THREE.Mesh;
    Botones_Mira_atras_Low: THREE.Mesh;
    Boton_Mira_atras_Low: THREE.Mesh;
    cosa_circular_Mira_atras_Low: THREE.Mesh;
    Pantalla_Sosten_mira_atras_Low: THREE.Mesh;
    Rueditas_Sosten_mira_atras_Low: THREE.Mesh;
    Rueditas_Sosten_mira_atrasA_Low: THREE.Mesh;
  };
  materials: {
    Material: THREE.Material;
  };
};

export function CarApex(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    "/3d/carApex/carApex.gltf"
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      position={[0.7, -0.45, -1]}
      rotation={[0, 1, 0]}
    >
      <mesh
        geometry={nodes.culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Cargador_Low.geometry}
        material={materials.Material}
        position={[-0.009, 0.35, -0.214]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Guarda_mano_Low.geometry}
        material={materials.Material}
        position={[-0.833, 0.83, -0.026]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.302, 0.272, 0.302]}
      />
      <mesh
        geometry={nodes.caja_cilindros_Low.geometry}
        material={materials.Material}
        position={[-0.511, 1.092, 0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.cili_centro_Low.geometry}
        material={materials.Material}
        position={[-0.608, 1.004, 0.089]}
        rotation={[Math.PI / 2, 0, 1.669]}
        scale={[0.302, 0.341, 0.302]}
      />
      <mesh
        geometry={nodes.Tope_Low.geometry}
        material={materials.Material}
        position={[-1.389, 1.043, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Detallitos_Low.geometry}
        material={materials.Material}
        position={[-0.169, 0.726, 0.067]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.105}
      />
      <mesh
        geometry={nodes.Sostiene_Mango_Low.geometry}
        material={materials.Material}
        position={[-1.714, 0.705, 0.029]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Debajo_de_bocacha_Low.geometry}
        material={materials.Material}
        position={[-2.059, 1.042, 0.056]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.bocacha_Low.geometry}
        material={materials.Material}
        position={[-2.265, 1.176, -0.009]}
        rotation={[0.639, 0, Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Riel_del_mango_Low.geometry}
        material={materials.Material}
        position={[-1.738, 0.863, -0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Mango_Low.geometry}
        material={materials.Material}
        position={[-1.668, 0.423, -0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Encima_del_cargador_Low.geometry}
        material={materials.Material}
        position={[-0.491, 0.78, -0.041]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Metal_oscuro_Low.geometry}
        material={materials.Material}
        position={[-0.491, 1.213, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.303}
      />
      <mesh
        geometry={nodes.Parte_extra_metal__Low.geometry}
        material={materials.Material}
        position={[-0.514, 1.194, 0.004]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.293, 0.271, 0.271]}
      />
      <mesh
        geometry={nodes.Cuadrados_metal_negro_Low.geometry}
        material={materials.Material}
        position={[-0.491, 1.213, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.303}
      />
      <mesh
        geometry={nodes.Encimeros_metal_abajo_Low.geometry}
        material={materials.Material}
        position={[-1.699, 0.737, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Metal_arriba_y_abajo_Low.geometry}
        material={materials.Material}
        position={[-1.385, 1.484, -0.029]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Encimeros_Metal_arriba_Low.geometry}
        material={materials.Material}
        position={[0.34, 1.484, -0.029]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Abajo_bochata_Low.geometry}
        material={materials.Material}
        position={[-2.297, 1.176, -0.009]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.288}
      />
      <mesh
        geometry={nodes.Metal_arriba_sobresalido_Low.geometry}
        material={materials.Material}
        position={[-0.569, 1.314, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Metal_detras_Low.geometry}
        material={materials.Material}
        position={[-0.564, 1.354, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Cilindro_adelante_Low.geometry}
        material={materials.Material}
        position={[-2.345, 1.343, -0.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.cilindro_culata_Low.geometry}
        material={materials.Material}
        position={[1.72, 1.12, -0.009]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.hierrito_rojo_Low.geometry}
        material={materials.Material}
        position={[-0.568, 1.252, 0.038]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Detalle_circular_Low.geometry}
        material={materials.Material}
        position={[0.969, 1.072, 0.099]}
        rotation={[Math.PI / 2, 0.097, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Mira_adelante_Low.geometry}
        material={materials.Material}
        position={[-1.791, 1.498, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Sosten_mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.723, 1.486, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.933, 1.626, 0.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Boton_Tope_Low.geometry}
        material={materials.Material}
        position={[-1.389, 1.043, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Remaches_sostiene_mango_Low.geometry}
        material={materials.Material}
        position={[-1.714, 0.705, 0.029]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Remaches_Low.geometry}
        material={materials.Material}
        position={[0.723, 1.486, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Ruedita_Mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.933, 1.626, 0.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Rueditas_Mira_adelante_Low.geometry}
        material={materials.Material}
        position={[-1.791, 1.498, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Rueditas_mira_adelanteA_Low.geometry}
        material={materials.Material}
        position={[-1.791, 1.498, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes["Arandela_Metal_oscuro_(negra)_Low"].geometry}
        material={materials.Material}
        position={[-0.491, 1.213, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.303}
      />
      <mesh
        geometry={nodes.Arandelas_Metal_oscuro_Low.geometry}
        material={materials.Material}
        position={[-0.491, 1.213, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.303}
      />
      <mesh
        geometry={nodes.Manijita_Metal_oscuro_Low.geometry}
        material={materials.Material}
        position={[-0.491, 1.213, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.303}
      />
      <mesh
        geometry={nodes.Remaches_Metal_arriba_sobresalido_Low.geometry}
        material={materials.Material}
        position={[-0.569, 1.314, 0.001]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Botones_Mango_Low.geometry}
        material={materials.Material}
        position={[-1.668, 0.423, -0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Botones_mangoA_Low.geometry}
        material={materials.Material}
        position={[-1.668, 0.423, -0.032]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Remaches_Encimeros_Metal_Arriba_Low.geometry}
        material={materials.Material}
        position={[0.34, 1.484, -0.029]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Remaches_Encimeros_metal_abajo_Low.geometry}
        material={nodes.Remaches_Encimeros_metal_abajo_Low.material}
        position={[-1.699, 0.737, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Tornillo_Encima_del_cargador_Low.geometry}
        material={materials.Material}
        position={[-0.491, 0.78, -0.041]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Boton_Encima_del_cargadorA_Low.geometry}
        material={materials.Material}
        position={[-0.491, 0.78, -0.041]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Boton_Encima_del_cargador_Low.geometry}
        material={materials.Material}
        position={[-0.491, 0.78, -0.041]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.BotonP_Encima_del_cargador_Low.geometry}
        material={materials.Material}
        position={[-0.491, 0.78, -0.041]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Boton_Debajo_de_bocacha_Low.geometry}
        material={materials.Material}
        position={[-2.059, 1.042, 0.056]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Botones_cuadrados_Culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Pantalla_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Plaquitas_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Metalcito_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Manijita_metal_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Agarre_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Punta_culata_Low.geometry}
        material={materials.Material}
        position={[0.332, 0.876, 0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.plastico_cilindro_culata_Low.geometry}
        material={materials.Material}
        position={[1.72, 1.12, -0.009]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Metalito_Cargador_Low.geometry}
        material={materials.Material}
        position={[-0.009, 0.35, -0.214]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Botones_Mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.933, 1.626, 0.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Boton_Mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.933, 1.626, 0.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.cosa_circular_Mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.933, 1.626, 0.02]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Pantalla_Sosten_mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.723, 1.486, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Rueditas_Sosten_mira_atras_Low.geometry}
        material={materials.Material}
        position={[0.723, 1.486, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
      <mesh
        geometry={nodes.Rueditas_Sosten_mira_atrasA_Low.geometry}
        material={materials.Material}
        position={[0.723, 1.486, -0.009]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.302}
      />
    </group>
  );
}

useGLTF.preload("/3d/carApex/carApex.gltf");
