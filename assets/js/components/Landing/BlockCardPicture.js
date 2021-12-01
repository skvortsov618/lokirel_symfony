import React from "react";
import image1 from './../../../back.jpg'

const BlockCardPicture = () => {
	const background_src = "https://images7.alphacoders.com/451/451013.jpg";
	const picture_src = "https://images7.alphacoders.com/451/451013.jpg";
	const picture_alt = "sdfsd";
	const infoSupertitle = "Озеленение и профессиональный уход за растениями";
	const infoTitle = "Lokirel";
	const infoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad et animi expedita magnam voluptatibus. Tenetur, temporibus nisi voluptates fugit consequatur voluptate ad dolore inventore blanditiis error, nesciunt hic architecto!";
	
	return (
		
		<div className="blockCardPicture" style={{
			backgroundImage: `url(${background_src})`
		}}>
			<div className="blockCardPicture__container">
				{/* TODO image should be set in pixels to save proportions */}
				{/* Что начсет тени над картинкой? ее не получается сделать, если картинка
                не bg. С пмощью стайлед компонент можно будет сделать, поставить картинку фоном
                и кавэр ей сделать, чтобы растягивалась как надо и не меняла пропорции*/}
				<div className="blockCardPicture__container__img">
					<img src={image1} alt={picture_alt}/>
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