//react 
import 'react';
import {Routes, Route, Link } from 'react-router-dom';

//css's
import './App.css';

//importing pages
import Home from './pages/home'
import Proyects from './pages/proyects'
import About from './pages/Abbout'
//import ome from './pages/home'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Abbout' element={<Abbout/>}/>
      <Route path='Proyects' element={<Proyects/>}/>
      <Route path='' element={<elemento/>}/>
      <Route path='' element={<elemento/>}/>
      <Route path='' element={<elemento/>}/>
    </Routes>
    </div>
  );
}

export default App;
