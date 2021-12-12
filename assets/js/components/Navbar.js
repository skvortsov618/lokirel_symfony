import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import bgHeader from '../../images/backgrounds/header.jpg'
import {colors, Tabs} from "@mui/material";
import Container from "@mui/material/Container";
import {myTheme} from "./Landing/CustomComponents/customTheme";

const Navbar = () => {
	
	const [value, setValue] = React.useState(0);
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	return (
			<Box fullWidth sx={{
				backgroundColor: 'rgb(37 51 43)',
				backgroundPosition: ' center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: 50,
				zIndex: 5000,
				position: "sticky",
				left: 0,
				top: 0,
				display: "flex",
				boxShadow: '0px 0px 10px rgba(0,0,0,0.6)',
				
			}}>
				<Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'space-between', minWidth: '90vw',}}>
					<Link to="/">
						<Tab label="LOKIREL"/>
					</Link>
					<Link to="/contacts">
						<Tab label="Контакты"/>
					</Link>
				</Container>
			</Box>
	);
}

export default Navbar;