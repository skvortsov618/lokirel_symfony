import React, {useEffect} from "react";
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import {Grow} from "@mui/material";
import Box from "@mui/material/Box";
import {myTheme} from "./Landing/CustomComponents/customTheme";

const AgreementPopup = () => {
	
	const [pop, setPop] = React.useState(false);
	useEffect(() => {
		setTimeout(function () {
			setPop(true);
		}, 2500)
	}, []);
	// setTimeout(function(){setPop(true);}, 2000)
	const ClosePopup = () => {
		setPop(false);
	}
	const message = "Наш сайт использует необходимые cookies и сторонние ресурсы для работы. Продолжая пользоваться сайтом вы автоматически соглашаетесь с "
	const policyLink = <Link to="/privacypolicy" onClick={ClosePopup} style={{color: "#659f86"}}>политикой
		конфиденциальности</Link>;
	
	return (

				<Grow in={pop} sx={{
					backgroundColor: "rgb(37 51 43)",
					color: "#fafafa",
					width: {
						sm:'100%',
						md: 500
					},
					position: 'sticky', left:30, bottom: 30,
					zIndex: 10000,
					padding: "2.5rem 1.6rem",
					borderRadius: "0.6rem",
					lineHeight: '1.4rem',
					[myTheme.breakpoints.down('md')]:{
						borderRadius: '0',
						left: 0,
						bottom: 0,
						lineHeight: '1.2rem',
						padding: '2rem 1.1rem',
						fontSize: '0.8rem'
					}
				}}>
					<Paper elevation={4}>
						<div style={{marginBottom: "0.6rem"}}>{message}{policyLink}</div>
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