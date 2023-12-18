import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
//let btnNameReact="Login";
const [btnNameReact1,setBtnNameReact]=useState("Login");
console.log("Header Rendered");

    return(
        <div className="header">
            <div className="Logo-container">
             <img className="logo"src ={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    btnNameReact1==="Login"
                    ?setBtnNameReact("Logout")
                    :setBtnNameReact("Login");
                    }}
                    >
                {btnNameReact1}
                </button>
                </ul>
    
            </div>
        </div>    
        );
        };

        export default Header;