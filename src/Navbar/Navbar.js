import React, {useState, useEffect} from "react";

import "./Header.css";
import "./Navbar.scss";

import Logo from "./Logo/Logo";
import NavOps from "./NavOps";
import HomeButton from "./HomeButton";


const Navbar = (props) => {

    const [showNav, setShowNav] = useState(0);

    // On scroll event management
    const onScroll = () => {

    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => (window.removeEventListener("scroll", onScroll));
    });

    const navReveal = () => {
        setShowNav(prevVal => 1-prevVal);
        console.log("clicked");
    };

    return (
        <div className="Header">
            <div id="screenblur" show-nav={showNav} is-large={props.isLarge}/>
            <div id="HeaderPadding" is-large={props.isLarge} />
            <div id="Navbar" is-large={props.isLarge}>
                <Logo logoClick={navReveal} isLarge={props.isLarge} showNav={showNav}>
                    <NavOps
                        navClick={navReveal}
                        options={props.optionLabels}
                        paths={props.optionPaths}
                        showNav={showNav}
                        isLarge={props.isLarge}
                    />
                </Logo>
            </div>
            <HomeButton isLarge={props.isLarge}/>
        </div>
    );
};

export default Navbar;