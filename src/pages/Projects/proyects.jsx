//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";


//css
import './Proyects.css';

let navigation = useNavigate;

const proyects =  (navigate) =>
{
    return (  
      <div className="App" onLoad={console.log('funcionando')}>
                  <div id="carouselExampleControls" class="carousel slide carousel-fade" data-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="https://picsum.photos/1320/720" class="d-block w-100" alt="..." />
                              <div class="carousel-caption d-none d-md-block">
                                  <a href="" class="btn btn-lg btn-outline-light rounded-0"> CONOCER M�S</a>
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
                  <div className="container">
                    <h1>Our Proyects</h1>
                  </div>
                  <div>
                  <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
                    </div>

    </div>    
    )
  }
export default proyects;