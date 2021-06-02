import React from "react";

import "./Navbar.css";

import NavOp from "./NavOp"

const NavOps = props => {
    const opComp = props.options.map(
        (item, idx) => (<NavOp key={idx} idx={idx} text={item} path={props.paths[idx]} showNav={props.showNav}/> )
    );

    return (
        <div className="NavOps">
            {opComp}
        </div>
    );
};

export default NavOps;