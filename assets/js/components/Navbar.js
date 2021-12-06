import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import bgHeader from '../../images/backgrounds/header.jpg'
const Navbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        <Box fullWidth sx={{
            backgroundColor: 'blue',
            background: `url(${bgHeader})`,
            backgroundPosition:' center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:50,
            zIndex:5000,
            position: "sticky",
            left:0,
            top: 0,
            display: "flex",
            boxShadow: '0px 0px 10px rgba(0,0,0,0.6)'
        }}>
            <Link to="/" ><Tab label="LOKIREL" /></Link>
            <div style={{position:"absolute", right:40}}>
                <Link to="/contacts" ><Tab label="Контакты" /></Link>
            </div>
        </Box>
    );
}
 
export default Navbar;