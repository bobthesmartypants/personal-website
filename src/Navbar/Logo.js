import React from "react";

import "./Navbar.css";

const Logo = (props) => {

    return (
        <div className="LogoContainer" >
           <div className="Logo pointable" onClick={props.logoClick}>
               dansl.dev
           </div>
        </div>
    );
};

export default Logo;