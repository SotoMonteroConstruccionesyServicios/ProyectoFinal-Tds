//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import './css/proyects.css';

let navigation - useNavigate;

const proyects =  (navigate) =>
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
export default proyects;