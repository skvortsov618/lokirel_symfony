import React from "react";

const BlockFourSteps = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    return ( 
        <div className="blockFourSteps">
            <h2 className="blockFourSteps__title">Florafication like one two and you are in the forest</h2>
            <h3 className="blockFourSteps__subtitle">This is how we do our job</h3>
            <div className="blockFourSteps__steps steps">
                <div className="steps__step">
                    <div className="steps__step__number">1</div>
                    <div className="steps__step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">1</div>
                    <div className="steps__step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">1</div>
                    <div className="steps__step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">1</div>
                    <div className="steps__step__text">Озеленение и профессиональный уход за растениями</div>
                </div>
            </div>
        </div>
    );
}
 
export default BlockFourSteps;