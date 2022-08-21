//imports the react resources
import React from "react";
import { Card } from "react-bootstrap";
import {Carrousel}  from '../../Components/Carrousel/Carrousel';



//css
import './Proyects.css';


const proyects =  () =>
{
    return (  
      <div className="App" onLoad={console.log('funcionando')}>
          <Carrousel/>

                  <div className="container">
                    <h1>Nuestros Proyectos</h1>
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
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/10/270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-black">
      <Card.Img src="https://picsum.photos/100/570" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
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
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>    
    )
  }
export default proyects;