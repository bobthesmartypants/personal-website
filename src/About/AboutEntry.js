import React, {useEffect} from "react";

import "./About.css";
import "../pointable.css";

import polaroid from "../images/polaroid-frame.png";

const nl2p = (text) => (
    text.split("\n").map(item => (
        <p key={"desc-" + item}>{item}</p>
    ))
);

const AboutEntry = (props) => {

    const scaleText = () => {
        let frame = document.getElementsByClassName("propic-caption-container")[props.idx];
        let captionText = document.getElementsByClassName("propic-caption")[props.idx];
        let descText = document.getElementsByClassName("desc-main")[props.idx];
        let frameWidth = frame.clientWidth;
        captionText.style.setProperty("font-size", frameWidth/10);
        descText.style.setProperty("font-size", frameWidth/10);

    };

    useEffect(() => {
        window.addEventListener('resize', scaleText);

        return () => (window.removeEventListener('resize', scaleText));
    });


    return (
        <div className="entry-main">
            <div className="picture-main">
                <div className="picture-container" parity={props.idx % 2}>
                    <div className="picture-select">
                        <img src={polaroid} alt="polaroid frame" className="picture-frame"/>
                        <div className="propic" idx={props.idx} />
                        <div className="propic-caption-container" >
                            <div className="propic-caption">
                                {props.caption}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="desc-main">
                {nl2p(props.text)}
            </div>
        </div>
    );
}

export default AboutEntry;