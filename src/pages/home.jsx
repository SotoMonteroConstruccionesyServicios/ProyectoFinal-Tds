//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import '../Css/home.css';

let navigation = useNavigate;

console.log("funcionando")

const Home = (navigate) =>
{
    return
    (
        <div >
            <h1>hola mundo</h1>
        </div>


    )
}
export default Home;