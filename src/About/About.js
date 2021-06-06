import React from "react";

import "./About.css";
import "../pointable.css";

import AboutEntry from "./AboutEntry";

import bio from "../Text Content/bio.json";

const About = () => {

    let textEntries = bio.text;
    let captions = bio.captions;
    let aboutEntries = textEntries.map((item, idx) => (
        <AboutEntry key={"entry-" + item} idx={idx} text={item} caption={captions?.[idx]} />
    ));

    return (
        <div id="about-main">
            {aboutEntries}
        </div>
    );

};

export default About;