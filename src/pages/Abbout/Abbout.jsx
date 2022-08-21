//imports the react resources
import React from "react";
import {Card } from 'react-bootstrap';
import {Carrousel}  from '../../Components/Carrousel/Carrousel';


//css
import './Abbout.css';


const Abbout = () => 
{
    return(
        <div>
        <body>
            <Carrousel/>
            <br/>
            <br/>
            <center>
              <t1> About US </t1>
            </center>
            <br/>
            <br/>
            <div className='tarjetas'>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>MISIÓN</Card.Title>
                  <Card.Text>
                  Satisfacer a nuestros clientes brindando un servicio de calidad, capaz de lograr empleados proactivos, con conciencia proactiva, lealtad y honestidad, capaces de alcanzar metas y objetivos especiales, y compromiso con nuestros clientes, accionistas y proveedores. 
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>VISIÓN</Card.Title>
                  <Card.Text>
                  Proporcionar hogares para familias de todos los niveles de ingresos en nuestro país mediante la construcción de viviendas que mejoren la vida. calidad de vida de los usuarios. 
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>VALORES</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
              </Card.Body>
            </Card>
            </div>
        </body>
    </div>

    )
}
export default Abbout;