import React from "react";
// import {useHistory} from "react-router-dom";

import "./Navbar.css";

const Logo = () => {
    /* TODO: fix this when you implement react router
    const hist = useHistory();

    const goHome = () => {
        let path = "https://dansl.dev";
        hist.push(path);
    };
    */

    return (
        <div className="LogoContainer" /*onClick={goHome}*/>
           <span className="Logo">
               dansl.dev
           </span>
        </div>
    );
};

export default Logo;