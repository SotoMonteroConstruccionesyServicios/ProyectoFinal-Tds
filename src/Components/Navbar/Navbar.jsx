import react from 'react'
import {useNavigate} from 'react-router'

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
            <li class="nav-item active"><h1 onClick={()=>{navigate('/')}}>HOME</h1></li>
            <li class="nav-item"><h1 onClick={()=>{navigate('Abbout')}}>Abbout US</h1></li>
            <li class="nav-item"><h1 onClick={()=>{navigate('proyects')}}>Proyects</h1></li>
            <li class="nav-item"><h1 onClick={()=>{navigate('Services')}}>Services</h1></li>
          </ul>
        </div>
        </nav>
    </div>
    )
}
export default navbar;