import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <div className="left">
            <h2 class="title">La vie de votre bateau dans la poche</h2>

            <p>
              Le compagnon digital de navigation
              <br />
              Transparent, sécurisé, indispensable
            </p>

            <div className="discover_area">
              <Link to="/" className="button discover">
                Découvrir
              </Link>
              <Link to="/" className="button rent">
                Louer un bateau
              </Link>
            </div>
          </div>
          <div className="right">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
