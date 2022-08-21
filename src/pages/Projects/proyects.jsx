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
                  <div className='tarjetas'>
                  <Card  className="bg-dark text-black Cards">
      <Card.Img  src='https://media.discordapp.net/attachments/985659106796929095/1007785073594081310/unknown.png?width=711&height=702' alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider csupporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card  className="bg-dark text-black Cards">
    <Card.Img  src="https://media.discordapp.net/attachments/985659106796929095/1007785122151546880/unknown.png?width=720&height=540" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider csupporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card  className="bg-dark text-black Cards">
    <Card.Img  src="https://media.discordapp.net/attachments/985659106796929095/1007784784354889758/unknown.png?width=526&height=702" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card  className="bg-dark text-black Cards">
      <Card.Img src="https://media.discordapp.net/attachments/985659106796929095/1007784575335944293/unknown.png?width=526&height=702" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card  className="bg-dark text-black Cards">
      <Card.Img src="https://media.discordapp.net/attachments/985659106796929095/1007784514459815996/unknown.png?width=526&height=702" alt="Card image" />
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