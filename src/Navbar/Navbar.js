import React from "react";

import './Navbar.css';

import Logo from "./Logo";
import NavOps from "./NavOps";

const Navbar = () => {
    // optionLabels and optionPaths biject
    const optionLabels = ["Home", "Resume", "A/V", "Music Prod", "Hobbies"];
    const optionPaths = ["/", "/resume", "/av", "/music", "/hobbies"];

    const [showNav, setShowNav] = React.useState(0);

    const logoClick = () => {
        setShowNav(prevVal => 1-prevVal);
        console.log("clicked");
    };

    return (
        <div className="Navbar">
            <Logo logoClick={logoClick}/>
            <NavOps options={optionLabels} paths={optionPaths} showNav={showNav}/>
        </div>
    );
};

export default Navbar;