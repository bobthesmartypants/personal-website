import React from "react";
import {Link} from "react-router-dom";

import "./Navbar.scss";
import "../pointable.css";

const NavOp = props => (
    <div className="NavOp" show-nav={props.showNav} is-large={props.isLarge}>
        <Link to={props.path} className="NavOpText pointable" is-large={props.isLarge} onClick={props.navClick}>
            {props.text}
        </Link>
    </div>
);

export default NavOp;