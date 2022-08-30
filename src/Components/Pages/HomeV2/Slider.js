import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../../Assets/Assets";

export default function Slider() {
  return (
    <div className="home_v2_slider">
      <Swiper
        centeredSlides={true}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider_image_wrapper">
            <img src={images.Slider_img_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_image_wrapper">
            <img src={images.Slider_img_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_image_wrapper">
            <img src={images.Slider_img_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_image_wrapper">
            <img src={images.Slider_img_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_image_wrapper">
            <img src={images.Slider_img_1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
