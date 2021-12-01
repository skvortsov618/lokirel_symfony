import React from "react";
import firstIcon from './../../../images/elements/office.svg'
import secondIcon from './../../../images/elements/crowd.svg'
import thirdIcon from './../../../images/elements/home.svg'

const BlockVideo = () => {

    const videoID       = "id_nEx2i3Yo";
    const videoSRC      = "https://www.youtube.com/embed/"+videoID+"?controls=0&autoplay=1&mute=1&playlist="+videoID;
    const videoTitle    = "LOKIREL lorem ipsum dolor sit amet, consectetur ";
    const iconOneText   = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";
    const iconTwoText   = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";
    const iconThreeText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita omnis quibusdam vitae aliquam voluptatibus nisi a placeat, quasi deserunt";

    return ( 
        <div className="blockVideo">
            <div className="blockVideo__video">
                <iframe  src={videoSRC} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowFullScreen></iframe>
            </div>
            <div className="blockVideo__content content">
                <div className="content__title">{ videoTitle }</div>
                <div className="content__icons">
                    <div className="content__icons__icon">
                        <img src={firstIcon} alt="" />
                        <div className="content__text">{ iconOneText }</div>
                    </div>
                    <div className="content__icons__icon">
                        <img src={secondIcon} alt="" />
                        <div className="content__text">{ iconTwoText }</div>
                    </div>
                    <div className="content__icons__icon">
                        <img src={thirdIcon} alt="" />
                        <div className="content__text">{ iconThreeText }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlockVideo;