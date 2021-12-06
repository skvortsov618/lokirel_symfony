import React from "react";
import './../../../styles/index.scss'
import {Tab, Tabs, Box} from "@mui/material"
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Container from "@mui/material/Container";
import ficus from '../../../images/photos/ficus.png'
import {styled} from "@mui/system";
import bgFeedback from "../../../images/backgrounds/feedback.jpg";
import bg from '../../../images/backgrounds/01.jpg'

function TabPanel(props) {
	const {children, value, index, ...other} = props;
	
	return (
			<div
					role="tabpanel"
					hidden={value !== index}
					id={`vertical-tabpanel-${index}`}
					aria-labelledby={`vertical-tab-${index}`}
					{...other}
					style={{color: "black"}}
			>
				{value === index && (
						<Box sx={{p: 3}}>
							<Typography sx={{fontFamily:'Montserrat', fontWeight: 500, color: '#ededed'}}>{children}</Typography>
						</Box>
				)}
			</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const MyFlex = styled('div')({
	width: '100%',
	display: "flex",
	justifyContent: 'space-between',
	alignItems: 'center'
})

const MyBg = styled('div')({
	backgroundImage: `url(${bg})`,
	backgroundPosition:'right center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	height: '100vh',
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	
})

const BlockVTabs = () => {
	
	const [value, setValue] = React.useState(0);
	
	const handleChange = (event, newValue) => {
		setValue(newValue);
	}
	
	return (
			<MyBg>
				<Container sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<div style={{width: '100%'}}>
						<h2 style={{
							paddingBottom: '4vh',
							paddingTop: '5vh',
							fontSize: '2rem',
							fontWeight: 700,
							textAlign: 'center',
							color:'#ededed'
						}}>Преимущества работы с нами</h2>
						<MyFlex>
							<Tabs
									orientation="vertical"
									value={value}
									onChange={handleChange}
									aria-label="Vertical tabs example"
									sx={{borderRight: 1, borderColor: 'divider', flex: '0 0 20%'}}
							>
								<Tab sx={{fontFamily:'Montserrat', fontWeight: 700, color: '#ededed'}} label="Item One" {...a11yProps(0)} />
								<Tab sx={{fontFamily:'Montserrat', fontWeight: 700, color: '#ededed'}} label="Item Two" {...a11yProps(1)} />
								<Tab sx={{fontFamily:'Montserrat', fontWeight: 700,color: '#ededed'}} label="Item Three" {...a11yProps(2)} />
								<Tab sx={{fontFamily:'Montserrat', fontWeight: 700,color: '#ededed'}} label="Item Four" {...a11yProps(3)} />
							</Tabs>
							<div><img style={{maxHeight: '80vh'}} src={ficus}/></div>
							<div style={{flex: '0 0 30%'}}>
								<TabPanel value={value} index={0}>
									Item One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur
									cumque deleniti dolorem dolorum fuga itaque modi perspiciatis quos ratione vitae,
									voluptas voluptate voluptates. Adipisci ducimus ipsam iure non ullam.
								</TabPanel>
								<TabPanel value={value} index={1}>
									Item Two
								</TabPanel>
								<TabPanel value={value} index={2}>
									Item Three
								</TabPanel>
								<TabPanel value={value} index={3}>
									Item Four
								</TabPanel>
							</div>
						</MyFlex>
					</div>
				</Container>
			</MyBg>
	);
}

export default BlockVTabs;