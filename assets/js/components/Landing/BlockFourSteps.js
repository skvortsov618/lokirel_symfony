import React from "react";

const BlockFourSteps = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
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