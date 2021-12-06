import React from "react";
import  './../../../styles/index.scss'
import bgMain from './../../../images/backgrounds/001.jpg'

const BlockCover = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Профессиональное озеленение и квалифицированная забота о растениях";

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${bgMain})`
        }}>
            <div className="blockCover__titles">
                <div className="blockCover__titles__header">{header}</div>
                <h1 className="blockCover__titles__subheader">{ subheader }</h1>
            </div>
        </div>
    );
}
 
export default BlockCover;