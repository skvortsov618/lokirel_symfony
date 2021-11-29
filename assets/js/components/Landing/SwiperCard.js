import React from "react";

const SwiperCard = () => {

    // https://titis.org/uploads/posts/2021-02/1614453529_28-p-nude-women-in-nature-erotika-33.jpg
    // https://hiqqu.com/files/www.hiqqu.com-4f27c8d01fbc408693519269c0000210fc69b5ef.jpg
    // https://ftopx.com/images/201305/ftop.ru_57935.jpg
    // https://boomba.club/uploads/posts/2021-04/1618027607_21-p-nude-photos-of-girls-in-the-forest-erotika-22.jpg
    // https://erowall.com/wallpapers/original/23637.jpg
    // https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg
    // https://nevseoboi.com.ua/uploads/posts/2011-04/1301821941_1296912623_e220f7e5ec20ece0f2fc20f0eee4e8ebe0_nevs.jpg
    const image_src = "https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg";
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