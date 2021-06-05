import React from "react";

import "./Navbar.scss";

import NavOp from "./NavOp"

const NavOps = props => {
    const opComp = props.options.map(
        (item, idx) => (<NavOp key={idx} navClick={props.navClick} text={item} path={props.paths[idx]} showNav={props.showNav} isLarge={props.isLarge}/> )
    );

    return (
        <div className="NavOps" is-large={props.isLarge}>
            {opComp}
        </div>
    );
};

export default NavOps;