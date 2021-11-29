import React from "react";

const BlockFourSteps = () => {

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
        <div className="blockFourSteps" style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white"
        }}>
            <h2 className="blockFourSteps__title">Florafication like one two and you are in the forest</h2>
            <h3 className="blockFourSteps__subtitle">This is how we do our job</h3>
            <div className="blockFourSteps__steps" style={{
                border: "2px grey solid",
                borderRadius: "20px",
                display: "flex",
                flexFlow: "row wrap",
                height: 500,
                width: "100%"
            }}>
                <div className="step" style={{
                    height: "50%",
                    width: "50%",
                    display: "flex",
                    flexFlow: "row wrap",
                }}>
                    <div className="step__number" style={{
                        fontSize: 50,
                        border: "2px green solid",
                        borderRadius: "25px",
                        width: 50,
                        height: 50,
                        textAlign: "center"
                    }}>1</div>
                    <div className="step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="step" style={{
                    height: "50%",
                    width: "50%",
                    display: "flex",
                    flexFlow: "row wrap",
                }}>
                    <div className="step__number" style={{
                        fontSize: 50,
                        border: "2px green solid",
                        borderRadius: "25px",
                        width: 50,
                        height: 50,
                        textAlign: "center"
                    }}>2</div>
                    <div className="step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="step" style={{
                    height: "50%",
                    width: "50%",
                    display: "flex",
                    flexFlow: "row wrap",
                }}>
                    <div className="step__number" style={{
                        fontSize: 50,
                        border: "2px green solid",
                        borderRadius: "25px",
                        width: 50,
                        height: 50,
                        textAlign: "center"
                    }}>3</div>
                    <div className="step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="step" style={{
                    height: "50%",
                    width: "50%",
                    display: "flex",
                    flexFlow: "row wrap",
                }}>
                    <div className="step__number" style={{
                        fontSize: 50,
                        border: "2px green solid",
                        borderRadius: "25px",
                        width: 50,
                        height: 50,
                        textAlign: "center"
                    }}>4</div>
                    <div className="step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
            </div>
        </div>
    );
}
 
export default BlockFourSteps;