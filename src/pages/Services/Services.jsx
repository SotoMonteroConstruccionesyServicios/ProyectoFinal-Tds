//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/casa";
import { OrbitControls } from '@react-three/drei';

function  Services() {
  return (
    <>
    <div className='d3'>
    <Canvas  camera={{zoom: 10, position:[15,20,15]}}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[35,35,0]} intensity={0.4}/>
      <pointLight position={[-35,35,0]} intensity={0.4}/>
      <Suspense fallback={null}>
        <Casa/>
      </Suspense>
      <OrbitControls/>
    </Canvas>
    </div>
  </>
  );
};

export default Services;