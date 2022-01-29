import React from "react";
import  './../../../styles/index.scss'
import bgMain from './../../../images/backgrounds/001.jpg'
import {MyBGBox, MyH1, MyH2, TypographyWrapper} from "./CustomComponents/FirstPageComponents";

const BlockCover = () => {

    const header    = "LOKIREL";
    const subheader = "Профессиональное озеленение и квалифицированная забота о растениях";

    return (

        <MyBGBox sx={{background: `url(${bgMain})`}}>
            <TypographyWrapper>
                <MyH1 variant="h1" component="h1">{header}</MyH1>
                <MyH2 variant="h2" component="h4">{subheader}</MyH2>
            </TypographyWrapper>

        </MyBGBox>

        // <div className="blockCover" style={{
        //     backgroundImage: `url(${bgMain})`
        // }}>
        //     <div className="blockCover__titles">
        //         <div className="blockCover__titles__header">{header}</div>
        //         <h1 className="blockCover__titles__subheader">{ subheader }</h1>
        //     </div>
        // </div>
    );
}
 
export default BlockCover;