import React from "react";
import "./HeroSlider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { images } from "../../Assets/Assets";

export default function HeroSlider() {
  return (
    <div className="hero_slider">
      <div className="h_slider">
        <div className="slider_wrapper">
          <img src={images.slider_wrapper} alt="" />
        </div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={images.slide1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slide2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.slide3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
