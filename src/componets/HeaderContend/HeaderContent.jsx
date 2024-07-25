import React from "react";
import './HeaderContent.css'
import logo from '../../assets/react.svg'
import ManuLinke from "../ManuLinke/ManuLinke"

function HeaderContent(){

return(
    <div id="navcontent">
    
    <a href="http://www.react.dev">
        <img src={logo} alt="react" />
    </a>

    <div>
        <ManuLinke linkname="Home" url="#home"></ManuLinke>
        <ManuLinke linkname="About" url="#about"></ManuLinke>
        <ManuLinke linkname="Contact" url="contact"></ManuLinke>
        <ManuLinke linkname="Login" url="login"></ManuLinke>
    </div>

    </div>
)

}

export default HeaderContent
