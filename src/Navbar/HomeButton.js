import React from "react";
import {Link} from "react-router-dom";

import "./Navbar.scss";
import "../pointable.css";

const HomeButton = (props) => {
    if (props.isLarge) return null;

    return (
        <div id="HomeButtonContainer">
            <div className="pointable scales">
                <Link to="/" id="HomeButtonText" is-large={props.isLarge}>
                    ^
                </Link>
            </div>
        </div>

    );
};

export default HomeButton;