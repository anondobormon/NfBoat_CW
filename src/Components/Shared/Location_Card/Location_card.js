import React from "react";
import { images } from "../../../Assets/Assets";
import "./Location_card.scss";

export default function Location_card() {
  return (
    <div className="location_card">
      <div className="left">
        <div className="image_wrapper">
          <img src={images.Image_7} alt="" />
          <div className="sale_button">A vendre</div>
        </div>
      </div>

      <div className="right">
        <h3>0.00€ / jour</h3>
        <h4>Nom ou modèle du bateau</h4>
        <div className="address">
          <span>
            <img src={images.Location} alt="" />
          </span>
          <p>Address ou port</p>
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
  );
}
