import {
  ContactShadows,
  Environment,
  Loader,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./Model";

// Canvas y entorno 3D
function LogoContainer() {
  return (
    <section className="bg-orange h-[35rem] pb-20">
      <div className="bg-black h-full w-[80%] m-auto rounded-3xl">
        <Canvas camera={{ position: [0, 0, 0.35] }}>
          <directionalLight />
          <ambientLight intensity={0.5} />
          <PresentationControls>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </PresentationControls>
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
    </section>
  );
}

export default LogoContainer;
