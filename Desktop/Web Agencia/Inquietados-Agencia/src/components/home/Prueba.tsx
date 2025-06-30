import * as THREE from "three";
import React, { useRef, useReducer, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";

const accents = ["#4060ff", "#20ffa0", "#ff4060", "#ffcc00"]; // Al hacer click cambia el color de los objetos

// Color de los objetos
const shuffle = (accent = 0) => [
  { color: "#c3ff00", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

// Componente de prueba
const Prueba: React.FC = () => {
  return (
    <div className="container h-96 w-screen">
      <Scene />
    </div>
  );
};

export default Prueba;

interface ConnectorProps {
  position?: [number, number, number];
  children?: React.ReactNode;
  scale?: number;
  accent?: boolean;
  color?: string;
  vec?: THREE.Vector3;
  [key: string]: any;
}

// Componente de los conectores: se encarga de conectar los objetos
function Connector({
  position,
  children, // Se encarga de renderizar los objetos
  vec = new THREE.Vector3(),
  accent,
  ...props
}: ConnectorProps) {
  // Referencia a los objetos
  const api = useRef(null);
  // Genera una posición aleatoria para los objetos
  const pos = useMemo(
    () =>
      position || [
        THREE.MathUtils.randFloatSpread(10), // Genera un número aleatorio entre -10 y 10
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
      ],
    [position]
  );

  // Aplica una fuerza al objeto
  useFrame(() => {
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation() || new THREE.Vector3())
        .negate()
        .multiplyScalar(0.2)
    );
  });

  return (
    // RigidBody: Se encarga de aplicar las físicas a los objetos
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

const Scene: React.FC = () => {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      className="w-screen"
    >
      <color attach="background" args={["#141622"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass={true} multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

const Pointer: React.FC<{ vec?: THREE.Vector3 }> = ({
  vec = new THREE.Vector3(),
}) => {
  const ref = useRef(null);

  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
};

interface ModelProps {
  children?: React.ReactNode;
  color?: string;
  roughness?: number;
}

const Model: React.FC<ModelProps> = ({
  children,
  color = "white",
  roughness = 0,
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF("c-transformed.glb") as any;

  useFrame((state, delta) => {
    easing.dampC(
      ref.current!.material.color,
      new THREE.Color(color),
      0.2,
      delta
    );
  });

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes.connector.geometry}
    >
      <meshStandardMaterial
        metalness={0.2}
        roughness={roughness}
        map={materials.base.map}
      />
      {children}
    </mesh>
  );
};

export { Prueba, Model, Scene };
