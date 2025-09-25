import React, { useEffect, useRef, useState } from "react";
import { Model } from "./Tut.jsx";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// ✅ Component that lives inside Canvas
const RotatingModel = () => {
  const modelRef = useRef();

  // Auto rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      position={[0, -9, 0]}
      rotation={[0, 0, 0]}
      scale={0.12}
      ref={modelRef}
    >
      <Model />
    </group>
  );
};

const GymRenderer = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full  h-[70vh] flex justify-center lg:justify-around items-center flex-col lg:flex-row mt-12">
      <div className="w-full h-full md:w-1/2 ">
        <Canvas
          camera={{ position: [0, 0, 25], fov: 60 }}
          shadows
          style={{ width: "100%", height: "100%" }}
        >
          {/* Lights */}
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 15, 10]}
            intensity={0.9}
            castShadow
          />
          <hemisphereLight
            skyColor={"#ffffff"}
            groundColor={"#444444"}
            intensity={0.2}
          />

          {/* Model inside Canvas */}
          <RotatingModel isMobile={isMobile} />

          {/* Controls (desktop only) */}
          {!isMobile && <OrbitControls enableZoom={false} />}
        </Canvas>
      </div>
    </section>
  );
};

export default GymRenderer;
