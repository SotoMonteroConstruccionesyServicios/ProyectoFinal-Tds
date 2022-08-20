//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import './home.css';

let navigation = useNavigate;



const Home  = () =>
{
    return(
            <div className="App" onLoad={console.log('funcionando')}>
            <div>
              <body>
                  <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="https://picsum.photos/id/410/1400/550" />
                              <div class="carousel-caption d-none d-md-block">
                                  <a href= 'About' class="btn btn-lg btn-outline-light rounded-0"> CONOCER MÁS</a>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <img src="https://picsum.photos/1920/1080" class="d-block w-100" alt="..." />
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="container mt-5 mb-5">
                      <div class="row align-items-center bg-dark">
                          <div class="col-sm-6">
                              <h1 class="text-center text-warning display-5 pt-5">BIENVENIDOS</h1>
                              <p class="text-white text-justify pt-3 p-5">Somos el tipo de empresa operadora de servicios en donde ofrecemos distintos apartados concernientes a la construcción, de igual forma ofreciendo al cliente una experiencia diferente, con un nivel de confianza excepcional, prometiendo edificaciones y distintos servicios a la par de sus necesidades. Los clientes serán personas físicas o jurídicas que requieran de nuestros servicios a la hora de realizar cualquier tipo de construcción.</p>
                              <p class="text-white text-justify pt-0  p-5">El mundo cambió y con ello el diseño y la construcción, es tiempo de cambios de adaptarnos a las nuevas tendencias en texturas, colores, espacios y un mundo de opciones a la hora de construir.  La empresa venderá nuestros servicios para cualquier trabajo de construcción requerido y también venderemos productos de construcción al por mayor para clientes que necesiten los utensilios necesarios. </p>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-12 pt-7 pb-5 bg-warning">
                                    <h2 class="h1 pt-5">CONSTRUCCIÓN</h2>
                                      <p class="text-white text-justify pt-4 p-5">El negocio atenderá los requerimientos de construcción del cliente para ellos, si hay necesidad de construir torres con diferentes departamentos, se hacen convenios para que nuestra empresa constructora pueda empezar a trabajar, oficinas o alguna de las obras que quiera hacer en su casa, nosotros nos encargaremos.</p>

                                  </div>
                              </div>
                                    <div class="col-12 pt-5  align-items-center pb-5 bg-gray text-white">
                                      <h2 class="h2 pt-2 p-4">SERVICIOS</h2>
                                      <ul>
                                            <li>Plomería</li>
                                            <br/>
                                            <li>Electricidad</li>
                                            <br/>
                                            <li>Carpintería</li>
                                            <br/>
                                            <li>Vaciado con wincher</li>
                                            <br/>
                                            <li>Vaciado con tractor</li>
                                            <br/>
                                            <li>Vaciado con bote</li>
                                            <br/>
                                            <li>Diseño arquitectónico</li>
                                            <br/>
                                            <li>Administración de condominios</li>
                                        </ul>
                                  </div>
                          </div>
                      </div>
                  </div>
              </body>
          </div>
        </div>
    )
}
export default Home;