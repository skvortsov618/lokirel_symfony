import React from "react";
import {Link} from "react-router-dom";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import './../../../styles/index.scss'
import Grid from "@mui/material/Grid";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';

import bg_image from './../../../images/backgrounds/001.jpg'
import Box from "@mui/material/Box";
import {MyBGBox} from "./CustomComponents/FirstPageComponents";
import {myTheme} from "./CustomComponents/customTheme";
import {Typography} from "@mui/material";
import {GridWrapper, IconWrapper} from "./CustomComponents/LastPageComponents";
import {FlexWrapper} from "./CustomComponents/ContactsComponents";


const BlockFooter = () => {
	
	return (
		<MyBGBox sx={{background:`url(${bg_image})`}}>
			<Container sx={{
				[myTheme.breakpoints.up('xl')]: {
					maxWidth:myTheme.breakpoints.values.lg
				},
				[myTheme.breakpoints.down('md')]: {
					maxWidth:myTheme.breakpoints.values.sm,
					textAlign:'center !important'
				},
				[myTheme.breakpoints.down('sm')]: {
					maxWidth:myTheme.breakpoints.values.xs,
				},
			}}>
			<GridWrapper>
				<Grid container sx={{[myTheme.breakpoints.down('md')]: {
						justifyContent:'center'
					}}}>
					<Grid item sm={12} md={6}>
						<Typography variant={"body1"} component='div'><a>Контакты</a></Typography>
						<Typography sx={{paddingTop:'0.3rem',
							[myTheme.breakpoints.down('md')]: {
								paddingBottom:'0.3rem'
							},}} variant={"body1"} component='div'><a>Политика конфиденциальности</a></Typography>
					</Grid>
					<Grid item sm={12} md={6} sx={{textAlign:'right',
						[myTheme.breakpoints.down('md')]: {
							textAlign:'center',
							alignSelf:'center'
						}}}>
						<Typography component='div'>Позвоните нам: <a href="tel:+79689533446" style={{color:myTheme.palette.primary.contrastText,
							textDecoration: 'none'}}> 8 (968)
							953-34-46</a></Typography>
						<Typography component='div'>Напишите нам: <IconWrapper href="https://wa.me/79689533446"><WhatsAppIcon/></IconWrapper></Typography>
						<Typography component='div'>Lokirel в соцсетях:
							<IconWrapper href="https://business.facebook.com/biolokirel"><FacebookIcon/></IconWrapper>
							<IconWrapper href="https://www.instagram.com/lokirel/"><InstagramIcon/></IconWrapper>
						</Typography>
						<Typography component='div'  sx={{paddingTop:'0.3rem'}}>
							Наша электронная почта: <a href="mailto:green@lokirel.ru" style={{color:myTheme.palette.primary.contrastText,
							textDecoration: 'none', paddingTop:'0.3rem'}}>green@lokirel.ru</a>
						</Typography>
					</Grid>
				</Grid>
			</GridWrapper>
					<Divider flexItem={true} variant='middle' sx={{color: myTheme.palette.primary.contrastText}}/>
					<Typography sx={{height:'15vh', padding:' 0.5rem '}} textAlign='center'><CopyrightIcon fontSize='xs'/> Lokirel - 2021</Typography>
			</Container>
		</MyBGBox>
	);
}

export default BlockFooter;