import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return ( 
        <div style={{color: "black"}}>
            <Link to="/" >LOKIREL     </Link>
            <Link to="/contacts" >  KONTAKTS </Link>
        </div>
    );
}
 
export default Navbar;