import React from "react";
import { Mousewheel, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss"
import SwiperCard from "./SwiperCard";

const BlockCarousel = () => {

    // https://titis.org/uploads/posts/2021-02/1614453529_28-p-nude-women-in-nature-erotika-33.jpg
    // https://hiqqu.com/files/www.hiqqu.com-4f27c8d01fbc408693519269c0000210fc69b5ef.jpg
    // https://ftopx.com/images/201305/ftop.ru_57935.jpg
    // https://boomba.club/uploads/posts/2021-04/1618027607_21-p-nude-photos-of-girls-in-the-forest-erotika-22.jpg
    // https://erowall.com/wallpapers/original/23637.jpg
    // https://ero.motaen.com/upload/wallpapers/source/2015/11/03/15/02/46373/mota.ru_20151103149.jpg
    // https://nevseoboi.com.ua/uploads/posts/2011-04/1301821941_1296912623_e220f7e5ec20ece0f2fc20f0eee4e8ebe0_nevs.jpg
    const carousel_title = "Спасенные нами растения";

    return ( 
        <div className="blockCarousel" style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white"
        }}>
            <h2 className="BlockCarousel__title" style={{
                textAlign: "center",
                color: "black",
                height: "10%"
            }}>
                { carousel_title }
            </h2>
            <Swiper 
                spaceBetween={50}
                slidesPerView={3}
                loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style= {{
                    height: 500,
                    margin: "0px 100px 0px 100px",
                    overflow: "hidden"
                }}
            >
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
                <SwiperSlide><SwiperCard /></SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default BlockCarousel;