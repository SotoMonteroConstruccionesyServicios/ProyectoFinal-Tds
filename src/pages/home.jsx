//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import './css/home.css';

let navigation - useNavigate;

const Home = (navigate) =>
{
    return
    (
        <div className="">
            <div>
                <div className="">
                     <button onClick={() => {navigate('test')}}>hola</button>
                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </div>
        </div>


    )
}
export default Home;