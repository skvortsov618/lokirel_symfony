import React from "react";
import {Helmet} from "react-helmet";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import bgMain from './../../images/backgrounds/01.jpg'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CopyrightIcon from "@mui/icons-material/Copyright";
import {Box, Typography} from "@mui/material";
import {myTheme} from "./Landing/CustomComponents/customTheme";
import {IconWrapper} from "./Landing/CustomComponents/LastPageComponents";
import {MyBGBox} from "./Landing/CustomComponents/FirstPageComponents";
import bg_image from './../../images/backgrounds/01.jpg'
import {Flex, FlexWrapper} from "./Landing/CustomComponents/ContactsComponents";
import styled from "@emotion/styled";



const Contacts = () => {

    return (
        <MyBGBox sx={{background: `url(${bg_image})`}}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lokirel - Контакты. Озеленение и уход за растениями.</title>
                <meta name="description" content="Озеленение и уход за растениями в Москве и Московской области." />
            </Helmet>
            <Container sx={{
                height:'100vh',
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
            }}><FlexWrapper>
                <Flex>
                    <Typography>Наш телефон: <a style={{color:myTheme.palette.primary.contrastText,
                        textDecoration: 'none'}} href="tel:+79689533446">8 (968) 953-34-46</a></Typography>
                    <Typography>Наш чат: <IconWrapper href="https://wa.me/79689533446"><WhatsAppIcon/></IconWrapper></Typography>
                    <Typography>Lokirel в соцсетях: <IconWrapper href="https://business.facebook.com/biolokirel/"><FacebookIcon /></IconWrapper>
                        <IconWrapper href="https://www.instagram.com/lokirel/"><InstagramIcon /></IconWrapper></Typography>
                    <Typography sx={{paddingTop:'0.3rem'}}>Наш email: <a style={{color:myTheme.palette.primary.contrastText,
                        textDecoration: 'none'}} href="mailto:green@lokirel.ru">green@lokirel.ru</a></Typography>
                </Flex>
                <Divider flexItem={true} variant='middle' sx={{color: myTheme.palette.primary.contrastText}}/>
                <Typography sx={{    height:'15vh', padding:' 0.5rem '}} textAlign='center'><CopyrightIcon fontSize='xs'/> Lokirel - 2021</Typography>
            </FlexWrapper>
            </Container>
        </MyBGBox>
    );
}

export default Contacts;