import React, { useEffect } from "react";
import Paper from '@mui/material/Paper';
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
    const policyLink = <Link to="/privacypolicy" onClick={ClosePopup} style={{color: "#659f86"}}>политикой конфиденциальности</Link>;

    return (
        <Grow in={pop} sx={{
            backgroundColor: "rgb(37 51 43)",
            color:"#fafafa",
            width: 500,
            position: 'sticky', left: 30, bottom: 30,
            zIndex: 10000,
            padding: "40px 25px",
            borderRadius: "10px",
            lineHeight: '1.4rem'}}>
            <Paper elevation={2} >
                <div style={{marginBottom: "15px"}}>{message}{policyLink}</div>
                <Button 
                    fullWidth
                    variant="contained"
                    onClick={ClosePopup}
                >Хорошо</Button>
            </Paper>
        </Grow>
    );
}
 
export default AgreementPopup;