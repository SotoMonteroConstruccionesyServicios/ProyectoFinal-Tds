//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/casa";
import { Center, OrbitControls } from '@react-three/drei';


function  Services() {
  return (
    <>
    <div className='bubleinfo'>
      <div className='conatiner'>
        <div className='burbuja'>
          <img src='fontanero' alt='fontanero'/>
          <a> ajshdlkjashjd</a>
        </div>
      </div>  
    </div>
    <div style={{width:'100%', heigth:'100%', position:'relative', top:'-50%' }}>
    <Canvas  camera={{zoom: 10, position:[15,20,15]}}>
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