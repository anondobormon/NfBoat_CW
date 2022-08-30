import React from "react";
import { images } from "../../../Assets/Assets";
import "./SenaryCard.scss";

import Fade from "react-reveal/Fade";

export default function SenaryCard() {
  return (
    <div className="navigate_senary">
      <div className="navigate">
        <Fade bottom>
          <h2>Naviguez sereinement ‍</h2>
        </Fade>

        <Fade bottom delay={100}>
          <p>
            Une volonté de réinventer la navigation et la gestion de votre
            bateau.
          </p>
        </Fade>
        <br />
        <Fade bottom delay={150}>
          <p>Tous vos documents accessibles sans attendre</p>
        </Fade>

        <div className="space100"></div>

        <Fade bottom delay={150}>
          <div className="grid_col_2">
            <div className="item">
              <div className="img_wrapper">
                <img src={images.Wallet_boat} alt="" />
                <div className="second_img">
                  <img src={images.Apple_iPhone_11} alt="" />
                </div>
                <div className="overlay"></div>
              </div>
              <h3>Gérez et partagez</h3>
              <p>
                Envie d'acheter un bateau ? Demandez l'historique de vie à son
                propriétaire et profitez d'une expérience sans limites
              </p>
            </div>
            <div className="item">
              <div className="img_wrapper">
                <img src={images.Search_boat} alt="" />
                <div className="second_img">
                  <img src={images.Apple_iPhone_11} alt="" />
                </div>
                <div className="overlay"></div>
              </div>
              <h3>Louez un bateau</h3>
              <p>
                Rentrez en relation avec des milliers de propriétaires et
                découvrez de nouvelles destinations grâce à notre communauté
              </p>
            </div>
          </div>
        </Fade>
        <div className="space50"></div>

        <Fade>
          <button className="button">Plus d'informations</button>
        </Fade>
      </div>
    </div>
  );
}
