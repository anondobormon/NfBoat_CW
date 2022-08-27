import React from "react";
import { images } from "../../../Assets/Assets";
import "./Berth_Card.scss";

export default function Berth_Card({ data }) {
  return (
    <div className="berth_card">
      <div className="left">
        <div className="image_wrapper">
          <img src={data.img} alt="" />
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
              <img src={images.Bx_store} alt="" />
            </span>
            Avec
          </li>
          <li>
            <span>
              <img src={images.Shower_solid} alt="" />
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
  );
}
