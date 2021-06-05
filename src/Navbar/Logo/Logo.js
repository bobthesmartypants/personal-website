import React from "react";

import "./Logo.scss";
import "../../pointable.css";

const Logo = (props) => {

    return (
        <div className="LogoContainer" >
            <div className="Logo pointable scales" onClick={props.logoClick} is-large={props.isLarge}>
                <span>dansl.dev</span>
                <span id="carat" show-nav={props.showNav}>^</span>
            </div>
            {props.children}
        </div>
    );
};

export default Logo;