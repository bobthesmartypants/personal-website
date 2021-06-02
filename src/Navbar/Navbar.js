import React from "react";

import './Navbar.scss';

import Logo from "./Logo";
import NavOps from "./NavOps";

const Navbar = () => {
    // optionLabels and optionPaths biject
    const optionLabels = ["Home", "Resume", "Hobbies", "Music Prod", "A/V"];
    const optionPaths = ["/", "/resume", "/hobbies", "/music", "/av"];

    const [showNav, setShowNav] = React.useState(0);

    const logoClick = () => {
        setShowNav(prevVal => 1-prevVal);
        console.log("clicked");
    };

    return (
        <div className="Navbar">
            <Logo logoClick={logoClick}>
                <NavOps options={optionLabels} paths={optionPaths} showNav={showNav}/>
            </Logo>
        </div>
    );
};

export default Navbar;