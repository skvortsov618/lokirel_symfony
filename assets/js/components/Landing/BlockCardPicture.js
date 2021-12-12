import React from "react";
import image1 from './../../../back.jpg'
import bgBlock from '../../../images/backgrounds/02.jpg'
import Box from "@mui/material/Box";
import bg_image from '../../../images/backgrounds/01.jpg'
import {Container, Typography} from "@mui/material";
import {MyBGBox} from "./CustomComponents/FirstPageComponents";
import {myTheme} from "./CustomComponents/customTheme";
import {
	FlexBox,
	ImageContainer,
	InfoContainer,
	MyCardTitle,
	MySuperTitle
} from "./CustomComponents/SecondPageComponents";

const BlockCardPicture = () => {

	const infoSuperTitle = "Фитодизайн. Озеленение интерьеров и пространств";
	const infoTitle = "Lokirel";
	const infoText = "Lokirel это команда специалистов с большим опытом работы с растениями. У нас общие цели, стремления и философия. Мы - профессионалы своего дела и знаем, как работать с растениями, делать качественный фитодизайн и создавать впечатляющие зеленые пространства.";
	
	return (

		<MyBGBox sx={{background: `url(${bg_image})`}}>
			<Container maxWidth='xl' sx={{
				[myTheme.breakpoints.up('xl')]: {

				},
				[myTheme.breakpoints.down('xl')]: {

				},
				[myTheme.breakpoints.down('md')]: {
					maxWidth:'100vw',
					width: '100vw',
					height:'100vh',
					padding: '0'
				},
				[myTheme.breakpoints.down('sm')]: {
				},
			}}>
				<FlexBox>
					<ImageContainer><Box
						sx={{
							width: '100%',
							height: '100%',
							position: 'absolute',
							boxShadow: ' inset 10px 10px 20px rgba(0, 0, 0, 0.6)'
						}}
					/></ImageContainer>
					<InfoContainer elevation={10}>
						<MySuperTitle>{infoSuperTitle}</MySuperTitle>
						<MyCardTitle variant='h4' component='h2'>{infoTitle}</MyCardTitle>
						<Typography variant='body1' component='div' sx={{color: myTheme.palette.primary.contrastText,
							[myTheme.breakpoints.up('xl')]: {

							},
							[myTheme.breakpoints.down('lg')]: {
								fontSize:'0.9rem',
							},
							[myTheme.breakpoints.down('md')]: {
								padding:'1rem 0 0 0'
							},
							[myTheme.breakpoints.down('sm')]: {
							},}}>{infoText}</Typography>
					</InfoContainer>
				</FlexBox>
			</Container>
		</MyBGBox>

			// <div className="blockCardPicture" style={{
			// 	backgroundImage: `url(${bgBlock})`
			// }}>
			// 	<div className="blockCardPicture__container">
			// 		<div className="blockCardPicture__container__img">
			// 			<Box className='boxMUI'
			// 					sx={{
			//
			// 						width: '24.5rem',
			// 						height: '100%',
			// 						background: `url(${bgBox})`,
			// 						backgroundPosition: 'center',
			// 						backgroundSize: 'cover',
			// 						backgroundRepeat: 'no-repeat',
			// 						borderRadius: '0.25rem'
			//
			// 					}}
			// 			>
			// 				<Box
			// 					sx={{
			// 						width: '24.5rem',
			// 						height: '100%',
			// 						position: 'absolute',
			// 						boxShadow: ' inset 10px 10px 20px rgba(0, 0, 0, 0.6)'
			// 					}}
			// 				/>
			// 			</Box>
			// 		</div>
			// 		<div className="blockCardPicture__container__card">
			// 			<div className="info">
			// 				<div className="info__supertitle">{infoSupertitle}</div>
			// 				<h2 className="info__title">{infoTitle}</h2>
			// 				<div className="info__text">{infoText}</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
	);
}

export default BlockCardPicture;