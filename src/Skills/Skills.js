import React, {useEffect, useState} from "react";

import SkillNav from "./SkillNav";
import SkillBubbles from "./SkillBubbles";
import SkillStats from "./SkillStats";

import "./Skills.css";

const Skills = () => {

    const resizeWidth = () => {
        let thresholdWidth = 720;
        let minRatio = 0.5;

        let windowWidth = window.innerWidth;
        let skillsComp = document.getElementById("skills-main");

        let newWidth = (windowWidth*minRatio >= thresholdWidth) ? windowWidth*minRatio : (windowWidth <= thresholdWidth) ? windowWidth : thresholdWidth;

        skillsComp.style.setProperty("width", "" + newWidth);
    };

    useEffect(() => {
        resizeWidth();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resizeWidth);

        return () => (window.removeEventListener("resize", resizeWidth));
    });


    const totalNum = 8;
    const [skillNum, setSkillNum] = useState(0);

    const changeSkill = (shift) => {
        setSkillNum((prevNum) => {
            return (prevNum + totalNum + shift) % totalNum;
        });
    };

    return (
        <div id="skills-main-container">
            <div id="skills-main">
                <SkillNav shift={changeSkill}/>
                <SkillBubbles skill={skillNum} />
                <SkillStats skill={skillNum}/>
            </div>
        </div>
    );
};

export default Skills;