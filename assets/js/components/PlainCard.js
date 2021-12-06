import React from "react";
import bgMain from './../../images/backgrounds/001.jpg'

const PlainCard = ({title, text}) => {

    return (
        <div style={{backgroundImage: `url(${bgMain})`, width:"100%", textAlign:"center", color:"white"}}>
            <h1>{title}</h1>
            <div>{text}</div>
        </div>
    );
}
 
export default PlainCard;