//imports the react resources
import React from "react";
import { useNavigate } from "react-router-dom";

//css
import '../Css/Abbout.css';
let navigation = useNavigate;


const Abbout = (navigation) => 
{
    return
    (
        <div className="">
            <div>
                <div className="">
                    <button onClick={()=>{navigation('test')}}></button>                                      
                </div>
                <div className="">

                </div>
                <div className="">

                </div>
            </div>
        </div>


    )
}
export default Abbout;