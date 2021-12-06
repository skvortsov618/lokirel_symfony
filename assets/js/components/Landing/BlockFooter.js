import React from "react";
import {Link} from "react-router-dom";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import './../../../styles/index.scss'
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import bgMain from './../../../images/backgrounds/001.jpg'

const BlockFooter = () => {
	
	return (
			<div className='blockCardPicture' style={{
				backgroundImage: `url(${bgMain})`
			}}>
			<Container sx={{ paddingTop:'30vh', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}} className="blockCover" >
				
				<Grid container columns={{xs: 4, md: 12}} spacing={2} sx={{width:'80%', flex: '1 1 auto'}} >
                        <Grid item md={6}>
                            <div><Link   to="/contacts">Контакты</Link></div>
                            <Link to="/privacypolicy">Политика конфиденциальности</Link>
                        </Grid>
                        <Grid item md={6} sx={{textAlign:'right'}}>
                            <div>Позвоните нам: <a href="tel:+79689533446">8 (968) 953-34-46</a></div>
                            <div>Напишите нам: <a href="https://wa.me/79689533446"><WhatsAppIcon /></a></div>
                            <div>Lokirel в соцсетях: <a href="https://business.facebook.com/biolokirel/"><FacebookIcon /></a><a href="https://www.instagram.com/lokirel/"><InstagramIcon /></a></div>
                        </Grid>
				</Grid>
				<Divider variant="middle" flexItem={true}/>
				<Container sx={{ width:"100%", height: "20%", textAlign: "center", flex: ' 0 0 20%', padding:'3vh'}}>LOKIREL 2021</Container>
			</Container>
			</div>
	);
}

export default BlockFooter;