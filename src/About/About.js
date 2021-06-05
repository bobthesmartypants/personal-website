import React from "react";

import "./About.css";
import "../pointable.css";

import polaroid from "../images/polaroid-frame.png";

const About = () => {


    return (
        <div id="about-main">
            <div id="picture-main">
                <div id="picture-container">
                    <div id="propic" />
                    <img src={polaroid} alt="polaroid frame" id="picture-frame"/>
                </div>


            </div>
            <div id="desc-main">
                hihiihihihiihhihih

            </div>
        </div>
    );
};

export default About;