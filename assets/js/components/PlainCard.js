import { Paper } from "@mui/material";
import React from "react";

const PlainCard = ({title, text}) => {

    const image_src="https://images7.alphacoders.com/451/451013.jpg";

    return (
        <div style={{backgroundImage: `url(${image_src})`, width:"100%", height: "100vh", textAlign:"center"}}>
            <Paper elevation={2} sx={{width:"60%", height:"100%", padding:"20px", backgroundColor: "rgba(255,255,255,0.3)", margin:"auto"}}>
                <h1>{title}</h1>
                <div>{text}</div>
            </Paper>
        </div>
    );
}
 
export default PlainCard;