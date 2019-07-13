import React from "react";
import "./style.css";


function Header() {
    return(
        <header className="header">
            <h1 className="text-white">Clicky Game!</h1>
            <h2 className="text-white">Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
    );
};


export default Header;