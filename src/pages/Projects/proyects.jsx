//imports the react resources
import React from "react";
import {useNavigate} from 'react-router-dom'

//css
import './Proyects.css';

//bootstrap
import {Card}  from 'react-bootstrap'


const proyects =  () =>
{
    return (  
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
              <div className="container">
                <h1>Our Proyects</h1>
              </div>
              <div className='cardiv'>
              <Card className="bg-dark text-black card">
  <Card.Img src="https://cdn.discordapp.com/attachments/985659106796929095/1007784708739969064/unknown.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='bg'>Card title</Card.Title>
    <Card.Text className='bg' >
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-black card">
  <Card.Img src="https://cdn.discordapp.com/attachments/985659106796929095/1007785073594081310/unknown.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='bg'>Card title</Card.Title>
    <Card.Text className='bg'>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-black card">
  <Card.Img src="https://cdn.discordapp.com/attachments/985659106796929095/1007785122151546880/unknown.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='bg'>Card title</Card.Title>
    <Card.Text className='bg'>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-black card">
  <Card.Img src="https://cdn.discordapp.com/attachments/985659106796929095/1007784843234512936/unknown.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='bg'>Card title</Card.Title>
    <Card.Text className='bg'>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-black ">
  <Card.Img src="https://cdn.discordapp.com/attachments/985659106796929095/1007784575335944293/unknown.png" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className='bg'>Card title</Card.Title>
    <Card.Text className='bg'>
      This is a wider card with supporting text below as a natural lead-in
      to additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
                </div>

</div>   
</div>

    )
  }
export default proyects;