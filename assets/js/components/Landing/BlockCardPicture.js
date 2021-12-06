import React from "react";
import image1 from './../../../back.jpg'
import bgBlock from '../../../images/backgrounds/02.jpg'
import Box from "@mui/material/Box";
import bgBox from '../../../images/photos/cardPic.jpg'

const BlockCardPicture = () => {
	// const background_src = "https://images7.alphacoders.com/451/451013.jpg";
	const picture_src = "https://images7.alphacoders.com/451/451013.jpg";
	const picture_alt = "sdfsd";
	const infoSupertitle = "Фитодизайн. Озеленение интерьеров и пространств";
	const infoTitle = "Lokirel";
	const infoText = "Lokirel это команда специалистов с большим опытом работы с растениями. У нас общие цели, стремления и философия. Мы - профессионалы своего дела и знаем, как работать с растениями, делать качественный фитодизайн и создавать впечатляющие зеленые пространства.";
	
	return (
		
		<div className="blockCardPicture" style={{
			backgroundImage: `url(${bgBlock})`
		}}>
			<div className="blockCardPicture__container">
				{/* TODO image should be set in pixels to save proportions */}
				{/*                  height: 600px;
                  width: 390px;
                  position: relative;
                  left: -3.5%;
                  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.5);
                  img{
                        display: block;
                        width: 100%;
                        height: 100%;
                  }*/}
				
				<div className="blockCardPicture__container__img">
				<Box
						sx={{
							width: '390px',
							height: '600px',
							background: `url(${bgBox})`,
							backgroundPosition:'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							// position: 'relative',
							// left: '-3.5%',
							// boxShadow:' -4px 4px 15px rgba(0, 0, 0, 0.5)',
						}}
				/>
				{/*	<img src={image1} alt={picture_alt}/>*/}
				</div>
				<div className="blockCardPicture__container__card">
					<div className="info">
						<div className="info__supertitle">{infoSupertitle}</div>
						<h2 className="info__title">{infoTitle}</h2>
						<div className="info__text">{infoText}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlockCardPicture;