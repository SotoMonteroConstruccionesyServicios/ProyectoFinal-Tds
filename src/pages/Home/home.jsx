//imports the react resources
import { render } from "@testing-library/react";
import React from "react";

import {useNavigate} from 'react-router'

//css
import './home.css';

let navigate = useNavigate;


function home(navigate)
{
    return(
            <div className="App" onLoad={console.log('funcionando')}>
            <div>
              <body>
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://picsum.photos/1080/500" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 >slide</h5>
                                    <p id="slide1-info" ></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1080/500"  class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 >slide</h5>
                                    <p id="slide2-info" ></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://picsum.photos/1080/500"  class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 >slide</h5>
                                    <p id="slide3-info" ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div class="container mt-5 mb-5">
                      <div class="row align-items-center bg-dark">
                          <div class="col-sm-6">
                              <h1 class="text-center text-warning display-4">BIENVENIDOS</h1>
                              <p class="text-white text-justify pt-3 p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga magni facilis minima, maxime temporibus. Atque fugiat, blanditiis voluptatum quae, illum ipsam at cumque excepturi deleniti rerum perferendis rem a!</p>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-12 pt-5 pb-5 bg-warning">
                                      <h2 class="h1 pt-5">ARQUITECTURA</h2>
                                      <p class="text-center pb-5">Lorem, ipsum dolor sit amet consectetur </p>
                                  </div>
                                  <div class="col-12 pt-5 pb-5 bg-gray text-white">
                                      <h2 class="h2 pt-5">CONSTRUCCI�N</h2>
                                      <p class="text-center pb-5">Lorem, ipsum dolor sit amet consectetur </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </body>
          </div>
        </div>
    )
}
export default home;