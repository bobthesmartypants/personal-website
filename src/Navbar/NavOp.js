import React from "react";

import "./Navbar.css";

const NavOp = props => (
    <div className="NavOp">
        <span className="NavOpText">
            {props.text}
        </span>
    </div>
);

export default NavOp;