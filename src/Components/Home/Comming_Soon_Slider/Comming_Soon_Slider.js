import React from "react";
import "./Comming_Soon_Slider.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../../Assets/Assets";

export default function Comming_Soon_Slider() {
  return (
    <div className="comming_soon_slider">
      <div className="space200"></div>
      <div className="container">
        <div className="slider_module">
          <div className="left">
            <div>
              <p>Bientôt disponible sur l&#x27;Apple Store et le Play Store</p>
              <h2>Votre compagnon digital de navigation</h2>
            </div>
          </div>
          <div>
            <div className="right">
              <div className="iphone_hand">
                <img src={images.IPhoneX_hand} alt="" />
              </div>
              <Swiper
                slidesPerView={1}
                effect={"fade"}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="wallet_card">
                    <div className="image_wrapper">
                      <img src={images.slide1} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wallet_card">
                    <div className="image_wrapper">
                      <img src={images.slide2} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wallet_card">
                    <div className="image_wrapper">
                      <img src={images.slide3} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
