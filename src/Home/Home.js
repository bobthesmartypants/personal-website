import React, {useEffect} from "react";

import "./Home.css";

const Home = () => {

    const onPointerMove = (event) => {

        if (!window.matchMedia("(hover: hover)").matches) return;

        // move background only when hovering exists
        const shiftMax = 2.9; // Not 3 to leave some buffer room
        let normalizedCoords = {x: event.clientX / window.innerWidth, y: event.clientY / window.innerHeight};
        let newCoords = {x: (1-normalizedCoords.x*2)*shiftMax, y: (1-normalizedCoords.y*2)*shiftMax};

        let backgroundElem = document.getElementById("BackgroundImage");
        if (backgroundElem == null) return; // catch edge case of trying to get element after page changes
        backgroundElem.style.setProperty("--shiftx" , newCoords.x + "vmin");
        backgroundElem.style.setProperty("--shifty" , newCoords.y + "vmin");
    };

    useEffect(() => {
        window.addEventListener("mousemove", onPointerMove);
        return () => {window.removeEventListener("mousemove", onPointerMove)};
    });

    return (
        <div id="BackgroundContainer" >
            <div id="BackgroundImage" />
        </div>
    );
};

export default Home;