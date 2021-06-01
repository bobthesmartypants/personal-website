import React from "react";

import "./Navbar.css";

import NavOp from "./NavOp"

const NavOps = props => {
    const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

    const opComp = options.map(
        item => (<NavOp text={item}/> )
    );

    return (
        <div className="NavOps">
            {opComp}
        </div>
    );
};

export default NavOps;