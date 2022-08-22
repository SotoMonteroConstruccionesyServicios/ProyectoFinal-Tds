//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/Casa";
import { Center, OrbitControls } from '@react-three/drei';

import './Services.css';

function  Services() {
  return (
    <>
    <div className='d3'>
    <Canvas camera={{zoom: 1, position:[15,20,15]}}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[35,35,0]} intensity={0.4}/>
      <pointLight position={[-35,35,0]} intensity={0.4}/>
        <Casa/>
      <OrbitControls/>
    </Canvas>
    </div>
  </>
  );
};
export default Services;