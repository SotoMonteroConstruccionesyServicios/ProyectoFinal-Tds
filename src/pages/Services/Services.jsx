//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "../../Components/Model/GltfModel";


function  Services() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Services scale="40" modelPath={"house.glb"} />
      <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default Services;