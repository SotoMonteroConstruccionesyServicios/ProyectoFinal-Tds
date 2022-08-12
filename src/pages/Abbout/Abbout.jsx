//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

//css
import './Abbout.css';
let navigation = useNavigate;


const Abbout = (navigation) => 
{
    return
    (
        <div>
        <body>
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
            <br/>
            <br/>
            <center>
              <t1> ACERCA DE NOSOTROS </t1>
            </center>
            <br/>
            <br/>
            <div className='tarjetas'>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>MISSION</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <center>
                  <Button>klklamsdkl;jakj</Button>
                  </center>
              </Card.Body>
            </Card>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>MISSION</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <center>
                  <Button>klklamsdkl;jakj</Button>
                  </center>
              </Card.Body>
            </Card>
            <Card className='Cards'>
              <Card.Body>
                  <Card.Img variant="bottom" src ='https://picsum.photos/720/315'/>
                  <Card.Title>vission</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <center>
                  <Button>klklamsdkl;jakj</Button>
                  </center>
              </Card.Body>
            </Card>
            </div>
        </body>
    </div>

    )
}
export default Abbout;