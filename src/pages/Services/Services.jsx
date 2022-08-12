//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "../../Components/Model/GltfModel";

import {useNavigate} from 'react-router-dom';

let navigate = useNavigate;

var modelsarrays = ["1","2","3","4"];

let modpath;
function changeModel(modpath) {
    for(let i = 0; i < modelsarrays.length; i++) {
      modpath = Math.random(modelsarrays.length);
    }
  return modpath;
  }

const Services = (navigate) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <GltfModel scale="40" modelPath={modpath()} />
      <OrbitControls />
      </Suspense>
      <button id='modelbtn' className='modelbtn' onClick={changeModel()}> show more</button>
    </Canvas>
  );
};

export default Services;