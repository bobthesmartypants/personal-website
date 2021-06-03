import React from "react";

import "./Logo.scss";

const Logo = (props) => {

    return (
        <div className="LogoContainer" >
            {props.children}
            <div className="Logo pointable" onClick={props.logoClick} is-large={props.isLarge}>
                <span>dansl.dev</span>
                <span id="carat" show-nav={props.showNav}>^</span>
            </div>
        </div>
    );
};

export default Logo;