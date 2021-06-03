import React, {useState, useEffect} from "react";

import './Navbar.scss';

import Logo from "./Logo/Logo";
import NavOps from "./NavOps";

/*
 * Commented out entire scroll to top code for now
 * Might reinclude if it comes to it
 */

const Navbar = (props) => {

    const [showNav, setShowNav] = useState(0);
    // const [leftTop, setLeftTop] = useState(0);

    /*
    // When mounting
    useEffect(() => {
        if (!props.isLarge) {
            setShowNav(1);
        }
    }, []);
    */

    // On scroll event management
    const onScroll = () => {
        if (props.isLarge) return;
        /*
        if (window.pageYOffset === 0) {
            setShowNav(1);
            setLeftTop(0);
        } else if (leftTop === 0) {
            setShowNav(0);
            setLeftTop(1);
        }*/

    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {window.removeEventListener("scroll", onScroll)};
    });

    const navReveal = () => {
        // if (window.pageYOffset === 0 && !props.isLarge) return;

        // toggle given that we're not on top of the page
        setShowNav(prevVal => 1-prevVal);
        console.log("clicked");
    };

    return (
        <div className="Navbar" is-large={props.isLarge}>
            <Logo logoClick={navReveal} isLarge={props.isLarge} showNav={showNav}>
                <NavOps options={props.optionLabels} paths={props.optionPaths} showNav={showNav} isLarge={props.isLarge} />
            </Logo>
        </div>
    );
};

export default Navbar;