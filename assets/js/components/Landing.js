import React from "react";
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import BlockCover from "./Landing/BlockCover";
import BlockCardPicture from "./Landing/BlockCardPicture";
import BlockCarousel from "./Landing/BlockCarousel";
import BlockFourSteps from "./Landing/BlockFourSteps";
import BlockVideo from "./Landing/BlockVideo";

const Landing = () => {

    return ( 
        <div className="Landing" style={{
            height: "100vh",
            position: "relative"
        }}>
            <Swiper
                modules={[Mousewheel, Navigation]}
                mousewheel
                direction={"vertical"}
                onSlideChange={()=>console.log('slide change')}
                style={{height:"100vh"}}
            >
                <SwiperSlide><BlockCover /></SwiperSlide>
                <SwiperSlide><BlockCardPicture /></SwiperSlide>
                <SwiperSlide><BlockCarousel /></SwiperSlide>
                <SwiperSlide><BlockFourSteps /></SwiperSlide>
                <SwiperSlide><BlockVideo /></SwiperSlide>
            </Swiper>
            {/* <BlockCover />
            <BlockCardPicture />
            <BlockCarousel />
            <BlockFourSteps />
            <BlockVideo /> */}
        </div>
    );
}
 
export default Landing;