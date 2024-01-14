import React from "react";
import logo from "../images/logo.png";


const Header = () => {
    
    return (
        <div className="ui fixed menu center">
            <div className="title">
                <img className="ui mini spaced image" alt="logo" src={logo} />
                <h1>MoviesApp</h1>
            </div>
        </div>
    );

};


export default Header;