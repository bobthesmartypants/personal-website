import React from "react";

import "./Navbar.scss";

const Logo = (props) => {

    return (
        <div className="LogoContainer" >
            {props.children}
            <div className="Logo pointable" onClick={props.logoClick} is-large={props.isLarge}>
                dansl.dev
            </div>
        </div>
    );
};

export default Logo;