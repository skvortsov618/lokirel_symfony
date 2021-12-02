import React from "react";

const PrivacyPolicy = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Privacy politics";
    const subheader = "If we could just skip it";

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${image_src})`
        }}>
            {/* <img className="blockCover__image" src={image_src} alt={image_alt} /> */}
            <div className="blockCover__titles">
                <div className="blockCover__titles__header">{header}</div>
                <h1 className="blockCover__titles__subheader">{ subheader }</h1>
            </div>
        </div>
    );
}
 
export default PrivacyPolicy;