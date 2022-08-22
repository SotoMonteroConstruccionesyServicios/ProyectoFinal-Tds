import React from "react";


export function Carrousel(){
return (
  <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="https://picsum.photos/1080/500" onClick="gotourl()" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 id="slide1"></h5>
                                <p id="S1info" ></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <iframe onClick="gotourl()" width="1920" height="820" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;  picture-in-picture" allowfullscreen></iframe>
                            <div class="carousel-caption d-none d-md-block">
                                <h5 id="slide2"></h5>
                                <p id="S2info" ></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src="https://picsum.photos/1080/500" onClick="" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 id="slide3"></h5>
                                <p id="S3info" ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
);

}

