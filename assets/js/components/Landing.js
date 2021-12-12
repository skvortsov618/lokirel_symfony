import React from "react";
import {Mousewheel, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import BlockCover from "./Landing/BlockCover";
import BlockCardPicture from "./Landing/BlockCardPicture";
import BlockCarousel from "./Landing/BlockCarousel";
import BlockFourSteps from "./Landing/BlockFourSteps";
import BlockVideo from "./Landing/BlockVideo";
import BlockFeedback from "./Landing/BlockFeedback";
import BlockVTabs from "./Landing/BlockVTabs";
import BlockFooter from "./Landing/BlockFooter";
import {Helmet} from "react-helmet";
import './../../styles/styles.css'

import 'swiper/css';
import 'swiper/css/scrollbar';
import {ThemeProvider} from "@mui/material";
import {myTheme} from "./Landing/CustomComponents/customTheme";

const Landing = () => {

    return (
        <div className="Landing" style={{
            height: "100vh",
            position: "relative"

        }}>
				<Helmet>
					<meta charSet="utf-8"/>
					<title>Lokirel - Профессиональное озеленение и квалифицированная забота о растениях</title>
					<meta name="description" content="Озеленение офисов, предприятий. Профессиональный уход за растениями, спасение. Услуги фитоняни."/>
				</Helmet>
				<Swiper
					modules={[Mousewheel, Scrollbar]}
					mousewheel
					scrollbar={{
						draggable: true
					}}
					direction={"vertical"}
					style={{height: "100vh"}}>
					<SwiperSlide><BlockCover/></SwiperSlide>
					<SwiperSlide><BlockCardPicture/></SwiperSlide>
					<SwiperSlide><BlockCarousel/></SwiperSlide>
					<SwiperSlide><BlockFourSteps/></SwiperSlide>
					{/*<SwiperSlide><BlockVideo/></SwiperSlide>*/}
					{/* <SwiperSlide><BlockVTabs /></SwiperSlide> */}
					<SwiperSlide><BlockFeedback/></SwiperSlide>
					<SwiperSlide><BlockFooter/></SwiperSlide>
				</Swiper>
        </div>
    );
}

export default Landing;