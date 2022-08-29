import React from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import "./Port_card.scss";

export default function Port_card() {
  return (
    <Fade delay={100}>
      <div className="ports_card">
        <div className="left">
          <div className="top">
            <h3>0.00€ / jour</h3>
            <h4>Nom ou modèle du bateau</h4>
            <div className="address">
              <span>
                <img src={images.Location} alt="" />
              </span>
              <p>Address ou port</p>
            </div>
          </div>

          <div className="bottom">
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
        <div className="right">
          <div className="image_wrapper">
            <img src={images.City_image} alt="" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
