import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { Field, Form, Formik } from "formik";
import bgHeader from '../../images/backgrounds/header.jpg'
import {colors, Tabs} from "@mui/material";
import Container from "@mui/material/Container";
import {myTheme} from "./Landing/CustomComponents/customTheme";
import {MyTextField} from "./Landing/CustomComponents/FifthPageComponents";
import { Autocomplete,
	TextField,
	Select,
	Switch,
	ToggleButtonGroup,
	CheckboxWithLabel,
	Checkbox} from "formik-mui";

const Navbar = () => {
	
	const [showForm, setShowForm] = React.useState(false);

	const handleLoginClick = () => {
		setShowForm(true)
	}

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
					{/* <Button onClick={handleLoginClick} variant="contained" >LOGIN</Button>
					{showForm && <Box sx={{backgroundColor: "white", zIndex:6000}}>
						<Formik
							initialValues={{
								lemail: "",
								lpassword: ""
							}}
							validate={(values)=>{
								const errors={}
								return errors
							}}
							onSubmit={(values) => {
								const xhttp = new XMLHttpRequest();
								xhttp.onreadystatechange = function() {
									if (this.readyState == 4) {
										if (this.status == 200 && this.getResponseHeader("Content-Type") == "aplication/json") {
											console.log("submitted");
											console.log(this.responseText);
											// setSent(true);
										} else {
											console.log("request error");
											// setSubmitting(false)
											// setFeedError(true)
										}
									}
								};
								xhttp.open("POST", "/login", true);
								xhttp.setRequestHeader("Content-type", "application/json");
								xhttp.send(JSON.stringify(values));
							}}
						>
							{({submitForm}) => (
							<Form>
								<Field
									component={TextField}
									name="lemail"
									label="Ваш email"
									type="email"
									variant="outlined"
									style={{width:'100%'}}
								/>
								<Field
									component={TextField}
									name="lpassword"
									label="Ваш email"
									type="email"
									variant="outlined"
									style={{width:'100%'}}
								/>
								<Button
									fullWidth
									variant="contained"
									sx={{ mt: 2, pt:2, pb:2, borderRadius: 2}}
									onClick={submitForm}
								>
									Отправить
								</Button>
							</Form>
							)}
						</Formik>
					</Box>} */}
				</Container>
			</Box>
	);
}

export default Navbar;