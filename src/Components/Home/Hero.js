import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import "./Hero.scss";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <Zoom>
            <div className="left">
              <h2 className="title">La vie de votre bateau dans la poche</h2>

              <p>
                Le compagnon digital de navigation
                <br />
                Transparent, sécurisé, indispensable
              </p>

              <div className="discover_area">
                <Link to="/wallet-nfcard" className="button discover">
                  Découvrir
                </Link>
                <Link to="/recherche" className="button rent">
                  Louer un bateau
                </Link>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="right">
              <HeroSlider />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}
