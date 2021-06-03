import React, {useEffect, useState} from "react";

import "./Home.css";

const Home = () => {

    const onPointerMove = (event) => {
        const shiftMax = 10;
        let normalizedCoords = {x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight};
        let newCoords = {x: (1-normalizedCoords.x*2)*shiftMax, y: (1-normalizedCoords.y*2)*shiftMax};

        let backgroundElem = document.getElementById("home-background");
        backgroundElem.style.setProperty("--shiftx" , newCoords.x + "vmin");
        backgroundElem.style.setProperty("--shifty" , newCoords.y + "vmin");
    };

    useEffect(() => {
        window.addEventListener("pointermove", onPointerMove);
        return () => {window.removeEventListener("pointermove", onPointerMove)};
    });

    return (
        <div className="BackgroundContainer" >
            <div id="home-background" className="BackgroundImage" />
        </div>
    );
};

export default Home;