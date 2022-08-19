//imports the react resources
import {React} from 'react';
import { Button, Card } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

//css
import './Abbout.css';



function Abbout () 
{
    return(
        <div className="App">
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
            <body>

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