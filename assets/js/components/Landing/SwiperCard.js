import React from "react";

const SwiperCard = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    return ( 
        <div className="swiperCard" style={{
            backgroundImage: `url(${image_src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/* <img className="blockCover__image" src={image_src} alt={image_alt} /> */}
            <div className="swiperCard__info" style= {{
                textAlign: "center",
                color: "white"
            }}>
                <div style={{fontSize: "50px"}}className="blockCover__titles__header">{ header }</div>
                <h1 className="blockCover__titles__subheader">{ subheader }</h1>
            </div>
        </div>
    );
}
 
export default SwiperCard;