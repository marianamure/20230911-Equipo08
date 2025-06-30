import * as THREE from "three";
import { useRef, useReducer, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, Center, Environment, Lightformer } from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
  RigidBodyApi,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";

const accents = ["#FF4824", "#0C5EEF", "#D326A2", "#ffcc00", "#008446"];

const shuffle = (accent = 0) => [
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.75, accent: true },
];

const letterData = [
  { letter: "i", position: [-5.6, 0, 0], rotation: [0, 0, 0] },
  { letter: "n", position: [-4.6, 0, 0], rotation: [0, 0, 0] },
  { letter: "q", position: [-3.4, 0, 0], rotation: [0, 0, 0] },
  { letter: "u", position: [-2.1, 0, 0], rotation: [0, 0, 0] },
  { letter: "i", position: [-1.1, 0, 0], rotation: [0, 0, 0] },
  { letter: "e", position: [-0.2, 0, 0], rotation: [0, 0, 0] },
  { letter: "t", position: [0.9, 0, 0], rotation: [0, 0, 0] },
  { letter: "a", position: [1.9, 0, 0], rotation: [0, 0, 0] },
  { letter: "d", position: [3.1, 0, 0], rotation: [0, 0, 0] },
  { letter: "o", position: [4.3, 0, 0], rotation: [0, 0, 0] },
  { letter: "s", position: [5.6, 0, 0], rotation: [0, 0, 0] },
];

export default function TextContainer() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);

  return (
    <div className="bg-orange w-full pb-20">
      <div className="container mx-auto h-[40rem]">
        <Canvas
          onClick={click}
          shadows
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 11], fov: 30, near: 1, far: 40 }}
          className="rounded-2xl"
        >
          <color attach="background" args={["#0D0D0D"]} />
          <ambientLight intensity={0.6} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            castShadow
          />

          <Physics gravity={[0, -2, 0]}>
            <Pointer />
            {letterData.map((item, i) => (
              <TextLetter
                key={i}
                letter={item.letter}
                position={item.position as [number, number, number]}
                rotation={item.rotation as [number, number, number]}
                originalPosition={item.position as [number, number, number]}
                {...connectors[i % connectors.length]}
              />
            ))}
          </Physics>

          <EffectComposer disableNormalPass multisampling={8}>
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
      </div>
    </div>
  );
}

function Pointer({ vec = new THREE.Vector3() }: { vec?: THREE.Vector3 }) {
  const ref = useRef<RigidBodyApi>(null);

  useFrame(({ mouse, viewport }) => {
    if (!ref.current) return;

    // Calcula la posición del puntero en el espacio del viewport
    const x = (mouse.x * viewport.width) / 2 || 1000;
    const y = (mouse.y * viewport.height) / 2 || 1000;

    ref.current.setNextKinematicTranslation(vec.set(x, y, 0));
  });

  return (
    <RigidBody
      type="kinematicPosition"
      position={[1000, 1000, 0]} // Inicialmente fuera de la vista
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1.5]} />
    </RigidBody>
  );
}

interface TextLetterProps {
  letter: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  originalPosition?: [number, number, number];
  color?: string;
  roughness?: number;
  accent?: boolean;
  vec?: THREE.Vector3;
}

function TextLetter({
  letter,
  position,
  rotation,
  originalPosition,
  color = "white",
  roughness = 0,
  accent,
  vec = new THREE.Vector3(),
}: TextLetterProps) {
  const api = useRef<RigidBodyApi>(null);
  const textRef = useRef<THREE.Mesh>(null);

  const pos = useMemo<[number, number, number]>(
    () => position || [0, 0, 0],
    [position]
  );

  const originalPos = useMemo(
    () => new THREE.Vector3(...(originalPosition || pos)),
    [originalPosition, pos]
  );

  const originalRot = useMemo(
    () => new THREE.Euler(...(rotation || [0, 0, 0])),
    [rotation]
  );

  const targetQuat = useMemo(
    () => new THREE.Quaternion().setFromEuler(originalRot),
    [originalRot]
  );

  useEffect(() => {
    if (!api.current) return;
    api.current.setTranslation(originalPos, true); // true = wake up
    api.current.setRotation(targetQuat, true);
  }, []);

  useFrame((_, delta) => {
    delta = Math.min(0.1, delta);
    if (!api.current) return;
    api.current.wakeUp();
    const pos = api.current.translation();
    if (!pos) return;

    const currentVec = new THREE.Vector3(pos.x, pos.y, pos.z);

    // --- Limitar la distancia máxima respecto a la posición original ---
    const maxDistance = 10; // Puedes ajustar este valor
    const offset = currentVec.clone().sub(originalPos);
    if (offset.length() > maxDistance) {
      // Clamp la posición al círculo/esfera de radio maxDistance
      const clampedVec = originalPos
        .clone()
        .add(offset.clampLength(0, maxDistance));
      api.current.setTranslation(clampedVec, true);
    }
    // --- Fin del clamp ---

    const distance = currentVec.distanceTo(originalPos);
    const direction = originalPos.clone().sub(currentVec).normalize();
    const maxForce = 8;
    const stopDistance = 0.2;

    if (distance > stopDistance) {
      const force = direction.multiplyScalar(Math.min(maxForce, distance));
      api.current.applyImpulse(force, true);
    } else {
      const vel = api.current.linvel();
      const damping = new THREE.Vector3(vel.x, vel.y, vel.z).multiplyScalar(
        0.0
      );
      api.current.applyImpulse(damping, true);
    }

    const currentRot = api.current.rotation();
    if (currentRot) {
      const currentQuat = new THREE.Quaternion(
        currentRot.x,
        currentRot.y,
        currentRot.z,
        currentRot.w
      );
      const blendedQuat = currentQuat.clone().slerp(targetQuat, 0.1);
      api.current.setRotation(blendedQuat, true);
    }

    if (
      textRef.current &&
      (textRef.current.material as THREE.MeshStandardMaterial)?.color
    ) {
      easing.dampC(
        (textRef.current.material as THREE.MeshStandardMaterial).color,
        color,
        0.2,
        delta
      );
    }
  });

  return (
    <RigidBody
      linearDamping={6}
      angularDamping={2}
      friction={0.2}
      position={pos}
      rotation={rotation}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.4, 0.6, 0.3]} />
      <Center>
        <Text3D
          ref={textRef as React.MutableRefObject<THREE.Mesh>}
          font="/fonts/Montserrat_Bold.json"
          size={1.2}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.03}
          bevelOffset={0}
          bevelSegments={5}
        >
          {letter}
          <meshStandardMaterial
            metalness={0.1}
            roughness={roughness}
            color={color}
          />
        </Text3D>
      </Center>
      {accent && <pointLight intensity={6} distance={3} color={color} />}
    </RigidBody>
  );
}
