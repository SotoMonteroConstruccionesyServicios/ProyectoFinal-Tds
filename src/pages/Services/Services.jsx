//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/Casa";
import { Center, OrbitControls } from '@react-three/drei';

import './Services.css';

function  Services() {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href='/'><img src="img/logo.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <a class="navbar-brand" href='/'><img className='logo' src="https://media.discordapp.net/attachments/985659106796929095/1010028767277748234/unknown.png?width=608&height=171" alt=""/></a>
          <ul class="navbar-nav ml-auto">
            <img src='' alt=''/>
            <li><a href='/'>Pagina Principal</a></li>
            <li><a href = 'proyects'>Proyectos</a></li>
            <li><a href='Services'>Servicios</a></li>
            <li><a href = 'About'>Sobre Nosotros</a></li>
          </ul>
        </div>
        </nav>
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