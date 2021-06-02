import React from "react";

import "./Navbar.scss";

import NavOp from "./NavOp"

const NavOps = props => {
    const opComp = props.options.map(
        (item, idx) => (<NavOp key={idx} text={item} path={props.paths[idx]} /> )
    );

    return (
        <div className="NavOps" shownav={props.showNav}>
            {opComp}
        </div>
    );
};

export default NavOps;