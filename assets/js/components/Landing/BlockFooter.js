import React from "react";
import {Link} from "react-router-dom";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import './../../../styles/index.scss'
import Grid from "@mui/material/Grid";

const BlockFooter = () => {
	
	const image_src = "https://images7.alphacoders.com/451/451013.jpg";
	const image_alt = "sdfsd";
	const header = "WELCOME";
	const subheader = "To the bottom! Yeeey you did it!";
	
	return (
			<div className='blockCardPicture' style={{
				backgroundImage: `url(${image_src})`
			}}>
			<Container sx={{color: 'black', paddingTop:'30vh', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}} className="blockCover" >
				
				<Grid container columns={{xs: 4, md: 12}} spacing={2} sx={{width:'80%', flex: '1 1 auto'}} >
                        <Grid item md={6}>
                            <div><Link   to="/contacts">Контакты</Link></div>
                            <Link to="/privacypolicy">Политика конфиденциальности</Link>
                        </Grid>
                        <Grid item md={6} sx={{textAlign:'right'}}>
                            <div>Позвоните нам: <a href="tel:+79776340878">89776340878</a></div>
                            <div>Напишите нам: <a href="https://wa.me/79776340878">WA</a></div>
                            <div>Lokirel в соцсетях: <a>Inst</a><a>Facebook</a></div>
                        </Grid>
				</Grid>
				<Divider variant="middle" flexItem={true}/>
				<Container sx={{ width:"100%", height: "20%", textAlign: "center", flex: ' 0 0 20%', padding:'3vh'}}>LOKIREL 2021</Container>
			</Container>
			</div>
	);
}

export default BlockFooter;