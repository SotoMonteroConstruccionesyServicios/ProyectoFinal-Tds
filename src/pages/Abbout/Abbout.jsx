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
              <t1> Acerca de Nosotros </t1>
            </center>
            <br/>
            <br/>
          <center>
            <div class="tarjetas">
              <div class="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011034976600469676/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>MISIÓN</h2>
                          <p>Satisfacer a nuestros clientes brindando un servicio de calidad, capaz con cde lograr empleados proactivos, mostrando compromiso con nuestros clientes y proveedores.</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011035107420798986/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>VISIÓN</h2>
                          <p>Proporcionar hogares para familias de todos los niveles de ingresos en nuestro país mediante la construcción de viviendas que mejoren la vida. calidad de vida de los usuarios. </p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011035186789634058/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>VALORES</h2>
                          <p>Responsabilidad</p>
                          <p>Crecimiento</p>
                          <p>Servicio al Cliente</p>
                          <p>Trabajo en Equipo</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
                <br/>
                <br/>
                <br/>
                    <center>
                    <t2>Propietarios</t2>
                    <br/>
                    <br/>
              <div class="tarjetas">
              <div class="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011034976600469676/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>MISIÓN</h2>
                          <p>Satisfacer a nuestros clientes brindando un servicio de calidad, capaz con cde lograr empleados proactivos, mostrando compromiso con nuestros clientes y proveedores.</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011035107420798986/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>VISIÓN</h2>
                          <p>Proporcionar hogares para familias de todos los niveles de ingresos en nuestro país mediante la construcción de viviendas que mejoren la vida. calidad de vida de los usuarios. </p>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                        <div className="img1"><img src="https://media.discordapp.net/attachments/985659106796929095/1011035107420798986/unknown.png" alt="" /></div>
                        <div className="main-text">
                          <h2>VISIÓN</h2>
                          <p>Proporcionar hogares para familias de todos los niveles de ingresos en nuestro país mediante la construcción de viviendas que mejoren la vida. calidad de vida de los usuarios. </p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </center>
        </body>
    </div>

    )
}
export default Abbout;