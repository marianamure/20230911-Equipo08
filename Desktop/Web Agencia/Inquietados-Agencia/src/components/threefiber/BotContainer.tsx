import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Bot3D } from "./Bot3D";
import { TbView360Number } from "react-icons/tb";
import { HurdyGurdy } from "./HurdyGurdy.tsx";
import { CarApex } from "./CarApex.tsx";

function BotContainer({ id }: any) {
  let container3D = "bg-orange";
  if (id === "1") container3D = "bg-pink";
  if (id === "2") container3D = "bg-green";
  if (id === "3") container3D = "bg-orange";
  return (
    <div
      className={`${container3D} h-[800px] w-[748px] m-auto rounded-xl relative`}
    >
      <div>
        <TbView360Number
          size={"3rem"}
          className="absolute right-10 top-7 text-white"
        />
      </div>
      <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
        {/* Luces */}
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <ambientLight intensity={0.3} />
        {/* Controles de Presentación */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Suspense fallback={null}>
            <group
              position={[0, -0.5, 0]}
              rotation={[0, 0, 0]}
              scale={[1, 1, 1]}
            >
              {id === "1" && <Bot3D />}
              {id === "2" && <HurdyGurdy />}
              {id === "3" && <CarApex />}
            </group>
          </Suspense>
        </PresentationControls>

        {/* Entorno y sombra */}
        <Environment preset="apartment" />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.6}
          scale={10}
          blur={1.5}
          far={2}
        />
      </Canvas>
    </div>
  );
}

export default BotContainer;
