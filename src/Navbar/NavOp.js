import React from "react";
import {Link} from "react-router-dom";

import "./Navbar.scss";

const NavOp = props => (
    <div className="NavOp" show-nav={props.showNav} is-large={props.isLarge}>
        <Link to={props.path} className="NavOpText pointable">
            {props.text}
        </Link>
    </div>
);

export default NavOp;