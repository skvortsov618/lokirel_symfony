import React from "react";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import  './../../../styles/index.scss'

const BlockFooter = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "WELCOME";
    const subheader = "To the bottom! Yeeey you did it!";

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${image_src})`
        }}>
            <Stack sx={{width:"100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5"}}>
                <Container sx={{ width:"100%", height: "80%"}}>
                    <Stack>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/privacypolicy">Политика конфиденциальности</Link>
                    </Stack>
                    <Stack>
                        <div>Позвоните нам: <a href="tel:+79776340878">89776340878</a></div>
                        <div>Напишите нам: <a href="https://wa.me/79776340878">WA</a></div>
                        <div>Lokirel в соцсетях: <a>Inst</a><a>Facebook</a></div>
                    </Stack>
                </Container>
                <Divider variant="middle" />
                <Container sx={{ width:"100%", height: "20%", textAlign: "center"}}>LOKIREL 2021</Container>
            </Stack>
        </div>
    );
}
 
export default BlockFooter;