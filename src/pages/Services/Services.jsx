//imports the react resources
import React,{Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/Casa";
import {  OrbitControls } from '@react-three/drei';

import './Services.css';


function  Services() {

var x,y,z;
x = 75;
y=20; 
z=15

  return (
    <>
    <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href='/'><img src="img/logo.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"className='nav' id="navbarNav">
          <ul class="navbar-nav ml-auto" className='item'>
            <img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011104472468037733/ebanista.png' alt=''/>
            <li><a></a></li>
            <img className='items'src='https://cdn.discordapp.com/attachments/985659106796929095/1011103983277973545/construccion.png' alt/>
            <li><a></a></li>
            <img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011103532453200003/electricidad.png' alt/>
            <li><a></a></li>
            <img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011103119704330273/plomeria.png' alt/>
            <li><a></a></li>
            <img className='items'src="https://cdn.discordapp.com/attachments/985659106796929095/1011102755651342366/plano.png" alt="" />
            <li><a></a></li>
          </ul>
        </div>
        </nav>
    <div className='d3'>
    <Canvas camera={{zoom: 5, position:[x,y,z]}}>
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