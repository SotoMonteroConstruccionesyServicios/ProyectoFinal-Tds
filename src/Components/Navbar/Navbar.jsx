import react from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import './Navbar.css'


let navigate = useNavigate

const navbar = (navigate) =>
{
    return (
    <div className='App'>
        <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="#"><img src="img/logo.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <img className='logo' src="https://media.discordapp.net/attachments/985659106796929095/1001952488792006777/SOTO_MONTERO_LOGO.png" alt="" />
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href='/'>HOME</a></li>
            <li class="nav-item"><a href = 'about'>Abbout US</a></li>
            <li class="nav-item"><a href='proyects'>Proyects</a></li>
            <li class="nav-item"><a href='services'>Services</a></li>
          </ul>
        </div>
        </nav>
    </div>
    )
}
export default navbar;