import React from "react";
import {Link} from "react-router-dom";

import "./Navbar.scss";
import "../pointable.css";

const HomeButton = (props) => {
    if (props.isLarge) return null;

    return (
        <div className="HomeButtonContainer">
            <div className="pointable">
                <Link to="/" className="HomeButtonText " is-large={props.isLarge}>
                    ^
                </Link>
            </div>
        </div>

    );
};

export default HomeButton;