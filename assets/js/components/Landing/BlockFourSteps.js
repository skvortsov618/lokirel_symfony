import React from "react";

const BlockFourSteps = () => {

    const image_src = "https://images7.alphacoders.com/451/451013.jpg";
    const image_alt = "sdfsd";
    const header    = "Lokirel";
    const subheader = "Озеленение и профессиональный уход за растениями";

    return ( 
        <div className="blockFourSteps">
            <h2 className="blockFourSteps__title">Озеленение пространств с Lokirel - просто, быстро и эффективно</h2>
            <h3 className="blockFourSteps__subtitle">Этапы разработки и внедрения проекта</h3>
            <div className="blockFourSteps__steps steps">
                <div className="steps__step">
                    <div className="steps__step__number">1</div>
                    <div className="steps__step__text">Разработка проекта озеленения, подбор растений</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">2</div>
                    <div className="steps__step__text">Согласование проекта и договора с Заказчиком</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">3</div>
                    <div className="steps__step__text">Реализация проекта</div>
                </div>
                <div className="steps__step">
                    <div className="steps__step__number">4</div>
                    <div className="steps__step__text">Сервисное гарантийное обслуживание растений</div>
                </div>
            </div>
        </div>
    );
}
 
export default BlockFourSteps;