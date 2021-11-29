import React from "react";

const BlockCardPicture = () => {

    
    const background_src = "https://images7.alphacoders.com/451/451013.jpg";
    const picture_src    = "https://images7.alphacoders.com/451/451013.jpg";
    const picture_alt    = "sdfsd";
    const infoSupertitle     = "Озеленение и профессиональный уход за растениями";
    const infoTitle          = "Lokirel";
    const infoText      = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad et animi expedita magnam voluptatibus. Tenetur, temporibus nisi voluptates fugit consequatur voluptate ad dolore inventore blanditiis error, nesciunt hic architecto!";

    return (
        <div className="blockCardPicture" style={{
            backgroundImage: `url(${background_src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: "100vh",
            width: "100%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center"
        }}>
            <div className="blockCardPicture__container" style= {{
                position: "relative",
                top: 200,
                left: 100,
                height: "40%",
                width: "50%"
            }}>
                {/* TODO image should be set in pixels to save proportions */}
                <img src={picture_src} alt={picture_alt} style={{
                    height: 284,
                    width: 384,
                    display: "block",
                    position: "absolute",
                    left: "0",
                    top: "-10%"
                }} />
                <div className="blockCardPicture__container__card" style={{
                    color: "white",
                    position: "absolute",
                    left: "50%",
                    top: "0",
                    width: "300px",
                    height: "100%",
                    border: "2px solid green",
                    borderRadius: "20px",
                    backgroundColor: "green",
                    padding: 20
                }}>
                    {/* TODO решить по семантике что из этого сделать заголовком 2 */}
                    <h2 className="info__supertitle">{ infoSupertitle }</h2>
                    <div className="info__title">{ infoTitle }</div>
                    <div className="info__text">{ infoText }</div>                        
                </div>
            </div>
        </div>
    );
}
 
export default BlockCardPicture;