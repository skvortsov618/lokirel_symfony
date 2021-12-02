import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const AgreementPopup = () => {

    const ClosePopup = () => {
        document.getElementById("loss").style.display = "none";
    }

    return ( 
        <Box id="loss" sx={{backgroundColor: "black", width: 300, height: 300, position: 'sticky', right: 30, bottom: 50, zIndex: 10000}}>
            <div>ALLOW</div>
            <Button 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={ClosePopup}
            >CLOSE</Button>
        </Box>
    );
}
 
export default AgreementPopup;