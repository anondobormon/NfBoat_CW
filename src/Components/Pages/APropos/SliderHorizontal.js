import React from "react";
import { images } from "../../../Assets/Assets";
// import Fade from "react-reveal/Fade";
import "./SliderHorizontal.scss";

export default function SliderHorizontal() {
  return (
    <div className="container">
      <div className="horizontal">
        <div className="content_wrapper1">
          <div className="img_wrapper2 img_wrapper">
            <img src={images.Home1_1} alt="" />
          </div>
          <div className="left">
            <div className="img_wrapper1 img_wrapper">
              <img src={images.Apple_iPhone_11} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="img_wrapper img_wrapper0">
              <img src={images.Home12} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
