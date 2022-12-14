import React from "react";
import { images } from "../../../Assets/Assets";
import "./ShipCard.scss";

import { Fade } from "react-reveal";

export default function ShipCard({ data }) {
  return (
    <Fade bottom>
      <div className="ship_card">
        <div className="left">
          <div className="image_wrapper">
            <div className="ship_image_wrapper">
              <img src={data.img} alt="" />
            </div>
            <div className="sale_button">{data.what_for}</div>
          </div>
        </div>

        <div className="right">
          <h3>{data.price}</h3>
          <h4>{data.sub_title}</h4>
          <div className="address">
            <span>
              <img src={images.Location} alt="" />
            </span>
            <p>{data.address}</p>
          </div>

          <hr />

          <div className="icon_wrapper">
            <li>
              <span>
                <img src={images.Tie_head} alt="" />
              </span>
              Avec
            </li>
            <li>
              <span>
                <img src={images.King_bed} alt="" />
              </span>
              3
            </li>
            <li>
              <span>
                <img src={images.Star} alt="" />
              </span>
              5/5
            </li>
          </div>
        </div>
      </div>
    </Fade>
  );
}
