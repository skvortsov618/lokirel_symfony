import React from "react";
import {Helmet} from "react-helmet";

const Contacts = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Contact us anytime";
    const subheader = "8-800-key-to-happiness";

    return ( 
        <div className="blockCover" style={{
            backgroundImage: `url(${image_src})`
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lokirel - контакты</title>
                <meta name="description" content="Контактные данные компании Lokirel" />
            </Helmet>
            {/* <img className="blockCover__image" src={image_src} alt={image_alt} /> */}
            <div className="blockCover__titles">
                <div className="blockCover__titles__header">{header}</div>
                <h1 className="blockCover__titles__subheader">{ subheader }</h1>
            </div>
        </div>
    );
}
 
export default Contacts;