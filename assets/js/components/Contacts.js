import React from "react";
import {Helmet} from "react-helmet";
import { Paper } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import bgMain from './../../images/backgrounds/01.jpg'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Divider from "@mui/material/Divider";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Contacts = () => {

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${bgMain})`
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lokirel - контакты</title>
                <meta name="description" content="Контактные данные компании Lokirel" />
            </Helmet>
            
            
            <div className='blockCardPicture' style={{
                backgroundImage: `url(${bgMain})`
            }}>
                <Container sx={{ paddingTop:'30vh', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}} className="blockCover" >
            
                    <Grid container columns={{xs: 4, md: 12}} spacing={2} sx={{ lineHeight:'3rem',maxWidth:'50%', flex: '1 1 auto'}} >
                        <Grid item xs={2} md={6}>
                            <div>Наш телефон: </div>
                            <div>Наш чат: </div>
                            <div>Lokirel в соцсетях: </div>
                            <div>Наш email: </div>
                        </Grid>
                        <Grid item xs={2} md={6} sx={{textAlign:'right',}} >
                            <div><a href="tel:+79689533446">8 (968) 953-34-46</a></div>
                            <div><a href="https://wa.me/79689533446"><WhatsAppIcon /></a></div>
                            <div><a href="https://business.facebook.com/biolokirel/"><FacebookIcon /></a><a href="https://www.instagram.com/lokirel/"><InstagramIcon /></a></div>
                            <div><a href="mailto:green@lokirel.ru">green@lokirel.ru</a></div>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" flexItem={true} />
                    <Container sx={{ width:"100%", height: "20%", fontWeight:300,fontSize:'1.2rem', textAlign: "center", flex: ' 0 0 20%', padding:'3vh'}}><CopyrightIcon fontSize='small'/> LOKIREL 2021</Container>
                </Container>
            </div>
            
            
            {/* <img className="blockCover__image" src={image_src} alt={image_alt} /> */}
            {/*<div style={{minWidth: "300px", width:"80%", height: "100vh", textAlign:"center", fontSize: 25, textAlign: "right"}}>*/}
                {/* <Paper elevation={2} sx={{minWidth: "300px", width:"60%", height:"100%", padding:"20px", backgroundColor: "rgba(255,255,255,0.3)", margin:"auto"}}> */}
{/*                    <h1 style={{textAlign: "center", marginBottom: 30}}>Наши контакты</h1>
                    <div>Наш телефон: <a href="tel:+79689533446">8 (968) 953-34-46</a></div>
                    <div>Наш чат: <a href="https://wa.me/79689533446"><WhatsAppIcon /></a></div>
                    <div>Lokirel в соцсетях: <a href="https://business.facebook.com/biolokirel/"><FacebookIcon /></a><a href="https://www.instagram.com/lokirel/"><InstagramIcon /></a></div>
                    <div>Наша электронная почта: <a href="mailto:green@lokirel.ru">green@lokirel.ru</a></div>*/}
                {/* </Paper> */}
            {/*</div>*/}
        </div>
    );
}
 
export default Contacts;