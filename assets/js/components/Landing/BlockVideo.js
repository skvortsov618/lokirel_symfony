import React from "react";

const BlockVideo = () => {

    const videoID       = "id_nEx2i3Yo";
    const videoSRC      = "https://www.youtube.com/embed/"+videoID+"?controls=0&autoplay=1&mute=1&playlist="+videoID;
    const videoTitle    = "LOKIREL";
    const iconOneText   = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";
    const iconTwoText   = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";
    const iconThreeText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";

    return ( 
        <div className="blockVideo" style={{
            height: "100vh",
            width: "100%",
            position: "relative"
        }}>
            <div className="blockVideo__video" style={{
            height: "100%",
            width: "100%",
            position: "relative"
            }}>
                <iframe  src={videoSRC} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{
                    position: 'absolute',
                    top:0, left:0, zIndex: -10,
                    height: "100%", width: "100%",
                }}></iframe>
            </div>
            <div className="blockVideo__content" style={{
                position: 'absolute',
                top:0, left:0,
                height: "100%", width: "100%",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.496)",
            }}>
                <div className="blockVideo__content__title" style={{
                    color: "white",
                    fontSize: 38,
                    fontWeight: 700,
                    lineHeight: "130%",
                    textAlign: "center",
                    textTransform: "uppercase",
                    marginTop: 300
                }}>{ videoTitle }</div>
                <div className="video__icons" style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    zIndex: 0
                }}>
                    <div className="video__icon" style={{
                        width: 100,
                        height: 100,
                        zIndex: 0
                    }}>
                        <img src="./images/back.jpg" alt="" style={{
                            width: 100,
                            height: 100,
                            zIndex: 0
                        }} />
                        <div className="video__text" style={{visibility: "hidden"}}>{ iconOneText }</div>
                    </div>
                    <div className="video__icon" style={{
                        width: 100,
                        height: 100,
                        zIndex: 0
                    }}>
                        <img src="./images/back.jpg" alt="" style={{
                            width: 100,
                            height: 100,
                            zIndex: 0
                        }} />
                        <div className="video__text" style={{visibility: "hidden"}}>{ iconTwoText }</div>
                    </div>
                    <div className="video__icon" style={{
                        width: 100,
                        height: 100,
                        zIndex: 0
                    }}>
                        <img src="./images/back.jpg" alt="" style={{
                            width: 100,
                            height: 100,
                            zIndex: 0
                        }} />
                        <div className="video__text" style={{visibility: "hidden"}}>{ iconThreeText }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlockVideo;