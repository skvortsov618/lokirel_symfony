import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        <Box fullWidth sx={{
            backgroundColor: "rgba(10,30,10,0.7)", 
            height:50,
            zIndex:5000,
            position: "sticky",
            left:0,
            top: 0,
            display: "flex"
        }}>
            <Link to="/" ><Tab label="LOKIREL" /></Link>
            <div style={{position:"absolute", right:40}}>
                <Link to="/contacts" ><Tab label="Контакты" /></Link>
            </div>
        </Box>
    );
}
 
export default Navbar;