import React from "react";

import './Navbar.css';

import Logo from "./Logo";
import NavOps from "./NavOps";

const Navbar = () => (
    <div className="Navbar">
        <Logo />
        <NavOps />
    </div>
);

export default Navbar;