import React, {useState} from "react";
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
import useFetch from "./useFetch";

import 'swiper/css';
import 'swiper/css/scrollbar';
import {ThemeProvider} from "@mui/material";
import {myTheme} from "./Landing/CustomComponents/customTheme";
import { host } from "../helpers/Helpers";

const Landing = () => {

	const [loaded, setLoaded] = useState(false)
	const [content, setContent] = useState({

		landing_meta_title: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'},
		landing_meta_description: {content: 'Озеленение офисов, предприятий. Профессиональный уход за растениями, спасение. Услуги фитоняни.'},
		landing_meta_robots: {content: 'all'},
		landing_meta_canonical: {content: 'https://lokirel.ru'},
		landing_meta_og_title: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'},
		landing_meta_twitter_title: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'},
		landing_meta_og_description: {content: 'Озеленение офисов, предприятий. Профессиональный уход за растениями, спасение. Услуги фитоняни.'},
		landing_meta_twitter_description: {content: 'Озеленение офисов, предприятий. Профессиональный уход за растениями, спасение. Услуги фитоняни.'},
		landing_meta_og_image: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'}, // set picture
		landing_meta_twitter_image: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'}, // set picture
		landing_meta_og_url: {content: 'https://lokirel.ru'},
		landing_meta_twitter_card: {content: 'Lokirel - Профессиональное озеленение и квалифицированная забота о растениях'}, // set card

		main_header: {content: 'Lokirel'},
		main_subheader: {content: 'Профессиональная забота о ваших растениях'}
	})

	useFetch(`${host()}/content`, {pack: 'landing'}, (data, error) => {
        setContent({...content, ...data})
		setLoaded(true)
    })
	console.log(content)
    return loaded
        ? <div className="Landing" style={{
            height: "100vh",
            position: "relative"
        }}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{content.landing_meta_title.content}</title>
                <meta name="description" content={content.landing_meta_description.content} />
				<meta name="robots" content={content.landing_meta_robots.content} />
				<meta name="canonical" content={content.landing_meta_description.content} />
				<meta name="og:title" content={content.landing_meta_og_title.content} />
				<meta name="og:description" content={content.landing_meta_og_description.content} />
				<meta name="og:image" content={content.landing_meta_og_image.content} />
				<meta name="og:url" content={content.landing_meta_og_url.content} />
				<meta name="twitter:title" content={content.landing_meta_twitter_title.content} />
				<meta name="twitter:description" content={content.landing_meta_twitter_description.content} />
				<meta name="twitter:image" content={content.landing_meta_twitter_image.content} />
				<meta name="twitter:card" content={content.landing_meta_twitter_card.content} />
            </Helmet>
            <Swiper
                modules={[Mousewheel, Scrollbar]}
                mousewheel
                scrollbar={{
                    draggable: true
                }}
                direction={"vertical"}
                style={{height: "100vh"}}
            >
                <SwiperSlide><BlockCover header={content.main_header.content} subheader={content.main_subheader.content}/></SwiperSlide>
                <SwiperSlide><BlockCardPicture/></SwiperSlide>
                <SwiperSlide><BlockCarousel/></SwiperSlide>
                <SwiperSlide><BlockFourSteps/></SwiperSlide>
                {/*<SwiperSlide><BlockVideo/></SwiperSlide>*/}
                {/* <SwiperSlide><BlockVTabs /></SwiperSlide> */}
                <SwiperSlide><BlockFeedback/></SwiperSlide>
                <SwiperSlide><BlockFooter/></SwiperSlide>
            </Swiper>
        </div>
        : <div style={{fontSize:'200px', color:'#333'}}>LOADING</div>
}

export default Landing