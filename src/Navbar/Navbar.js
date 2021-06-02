import React, {useState, useEffect} from "react";

import './Navbar.scss';

import Logo from "./Logo";
import NavOps from "./NavOps";

const Navbar = () => {
    // optionLabels and optionPaths biject
    // also modify $menu-items in Navbar-anim.scss if array length changes
    const optionLabels = ["Home", "Resume", "Hobbies", "Music", "A/V"];
    const optionPaths = ["/", "/resume", "/hobbies", "/music", "/av"];

    const [showNav, setShowNav] = useState(0);
    const [leftTop, setLeftTop] = useState(0);

    useEffect(() => {
        setShowNav(1);
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                setShowNav(1);
                setLeftTop(0);
            }
            else if (leftTop === 0) {
                setShowNav(0);
                setLeftTop(1);
            }
        }
    });

    const navReveal = () => {
        if (window.pageYOffset === 0) return;

        // toggle given that we're not on top of the page
        setShowNav(prevVal => 1-prevVal);
        console.log("clicked");
    };

    return (
        <div className="Navbar">
            <Logo logoClick={navReveal}>
                <NavOps options={optionLabels} paths={optionPaths} showNav={showNav}/>
            </Logo>
        </div>
    );
};

export default Navbar;