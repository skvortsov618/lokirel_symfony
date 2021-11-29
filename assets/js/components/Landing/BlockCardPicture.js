import React from "react";

const BlockCardPicture = () => {

    // https://titis.org/uploads/posts/2021-02/1614453529_28-p-nude-women-in-nature-erotika-33.jpg
    // https://hiqqu.com/files/www.hiqqu.com-4f27c8d01fbc408693519269c0000210fc69b5ef.jpg
    // https://ftopx.com/images/201305/ftop.ru_57935.jpg
    // https://boomba.club/uploads/posts/2021-04/1618027607_21-p-nude-photos-of-girls-in-the-forest-erotika-22.jpg
    // https://erowall.com/wallpapers/original/23637.jpg
    // https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg
    // https://nevseoboi.com.ua/uploads/posts/2011-04/1301821941_1296912623_e220f7e5ec20ece0f2fc20f0eee4e8ebe0_nevs.jpg
    const background_src = "https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg";
    const picture_src    = "https://ftopx.com/images/201305/ftop.ru_57935.jpg";
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