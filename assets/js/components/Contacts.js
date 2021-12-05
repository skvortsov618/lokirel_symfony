import React from "react";
import {Helmet} from "react-helmet";
import { Paper } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacts = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Contact us anytime";
    const subheader = "8-800-key-to-happiness";

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${image_src})`
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lokirel - контакты</title>
                <meta name="description" content="Контактные данные компании Lokirel" />
            </Helmet>
            {/* <img className="blockCover__image" src={image_src} alt={image_alt} /> */}
            <div style={{backgroundImage: `url(${image_src})`, width:"100%", height: "100vh", textAlign:"center"}}>
            <Paper elevation={2} sx={{minWidth: "300px", width:"60%", height:"100%", padding:"20px", backgroundColor: "rgba(255,255,255,0.3)", margin:"auto"}}>
                <h1>Как с нами связаться:</h1>
                <div>Наш телефон: <a href="tel:+79689533446">8 (968) 953-34-46</a></div>
                <div>Наш чат: <a href="https://wa.me/79689533446"><WhatsAppIcon /></a></div>
                <div>Lokirel в соцсетях: <a href="https://business.facebook.com/biolokirel/"><FacebookIcon /></a><a href="https://www.instagram.com/lokirel/"><InstagramIcon /></a></div>
                <div>Наша электронная почта: <a href="mailto:green@lokirel.ru">green@lokirel.ru</a></div>
            </Paper>
        </div>
        </div>
    );
}
 
export default Contacts;