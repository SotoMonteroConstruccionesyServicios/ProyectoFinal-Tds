//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "../../Components/Model/GltfModel";


var modelsarrays = ["1","2","3","4"];

let modpath;
function changeModel(modpath) {
  let btn = document.getElementById("modelbtn");
  btn.onclick = function() {
    for(let i = 0; i < modelsarrays.length; i++) {
      modpath = Math.random(modelsarrays.length);
    }
  }
  return modpath;
}

const Services = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
      <Services scale="40" modelPath={modpath()} />
      <OrbitControls />
      </Suspense>
      <button id='modelbtn' className='modelbtn'> show more</button>
    </Canvas>
  );
};

export default Services;