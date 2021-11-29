import React from "react";

const BlockVideo = () => {

    // https://titis.org/uploads/posts/2021-02/1614453529_28-p-nude-women-in-nature-erotika-33.jpg
    // https://hiqqu.com/files/www.hiqqu.com-4f27c8d01fbc408693519269c0000210fc69b5ef.jpg
    // https://ftopx.com/images/201305/ftop.ru_57935.jpg
    // https://boomba.club/uploads/posts/2021-04/1618027607_21-p-nude-photos-of-girls-in-the-forest-erotika-22.jpg
    // https://erowall.com/wallpapers/original/23637.jpg
    // https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg
    // https://nevseoboi.com.ua/uploads/posts/2011-04/1301821941_1296912623_e220f7e5ec20ece0f2fc20f0eee4e8ebe0_nevs.jpg
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