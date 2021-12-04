import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { Grow } from "@mui/material";

const AgreementPopup = () => {

    const [pop, setPop] = React.useState(false);
    useEffect(()=>{setTimeout(function(){setPop(true);}, 2500)}, []);
    // setTimeout(function(){setPop(true);}, 2000)
    const ClosePopup = () => {
        setPop(false);
    }
    const message = "Наш сайт использует необходимые cookies и сторонние ресурсы для работы. Продолжая пользоваться сайтом вы автоматически соглашаетесь с "
    const policyLink = <Link to="/privacypolicy" onClick={ClosePopup} style={{color: "lightskyblue"}}>политикой конфиденциальности</Link>;

    return (
        <Grow in={pop} >
            <Box sx={{
                backgroundColor: "white", color:"black",
                width: 600,
                position: 'sticky', left: 30, bottom: 50,
                zIndex: 10000,
                padding: "20px",
                borderRadius: "20px"}}>
                <div style={{marginBottom: "10px"}}>{message}{policyLink}</div>
                <Button 
                    fullWidth
                    variant="contained"
                    onClick={ClosePopup}
                >Хорошо</Button>
            </Box>
        </Grow>
    );
}
 
export default AgreementPopup;