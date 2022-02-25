import React from "react";
import  './../../../styles/index.scss'
import bgMain from './../../../images/backgrounds/001.jpg'
import {MyBGBox, MyH1, MyH2, TypographyWrapper} from "./CustomComponents/FirstPageComponents";

const BlockCover = ({header, subheader, picture}) => {

    return (

        <MyBGBox sx={{background: `url(${bgMain})`}}>
            <TypographyWrapper>
                <MyH1 variant="h1" component="h1">{header}</MyH1>
                <MyH2 variant="h2" component="h4">{subheader}</MyH2>
            </TypographyWrapper>

        </MyBGBox>
    );
}
 
export default BlockCover;