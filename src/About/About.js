import React from "react";

import "./About.css";
import "../pointable.css";

import polaroid from "../images/polaroid-frame.png";

const About = () => {


    return (
        <div id="about-main">
            <div id="picture-main">
                <div id="picture-container">
                    <div id="picture-select">
                        <img src={polaroid} alt="polaroid frame" id="picture-frame"/>
                        <div id="propic" />
                        <div id="propic-caption">

                        </div>
                    </div>
                </div>
            </div>
            <div id="desc-main">
                hihiihihihiihhihih

            </div>
        </div>
    );
};

export default About;