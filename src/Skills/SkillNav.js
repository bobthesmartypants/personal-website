import React from "react";

import "./Skills.css";
import "../pointable.css";


const SkillNav = (props) => {



    return (
        <div id="skillnav-main" className="title-font">
            <div id="skillnav-left" className="pointable scales" onClick={() => props.shift(-1)}>{"<"}</div>
            <div id="skill-name">NAME</div>
            <div id="skillnav-right" className="pointable scales" onClick={() => props.shift(1)}>{">"}</div>
        </div>
    );
};

export default SkillNav;