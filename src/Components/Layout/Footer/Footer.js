import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { images } from "../../../Assets/Assets";
import "./Footer.scss";

export default function Footer() {
  const [opacity, setOpacity] = useState(false);

  return (
    <Fade>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="left">
              <div className="logo">
                <img src={images.logo} alt="" />
              </div>
              <p>Compagnon digital de navigation</p>

              <div className="mobile_app">
                <button className="button">
                  <span>
                    <img src={images.Apple_icon} alt="" />
                  </span>
                  App Store
                </button>
                <button className="button">
                  <span>
                    <img src={images.Android_icon} alt="" />
                  </span>
                  Google Play
                </button>
              </div>
              <div className="social_icons">
                <ul>
                  <li>
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <p>S'abonner à notre newsletter</p>

              <form action="" className="newsletter">
                <div className="icon_wrapper">
                  <input
                    type="text"
                    onFocus={() => setOpacity(true)}
                    placeholder="Entrez votre adresse email"
                  />
                  <span>
                    <img
                      //   style={{ opacity: 0.5 }}
                      className="icon"
                      src={images.Message_icon}
                      alt=""
                    />
                  </span>
                </div>

                <input
                  type="submit"
                  value="Confirmer"
                  data-wait="Veuillez patienter..."
                  className="button"
                />
              </form>
            </div>
          </div>

          <hr />

          <div className="bottom">
            <div className="left">
              <p>Plus d'informations</p>
              <ul>
                <li>Contact</li>
                <li>Politique de confidentialité</li>
                <li>Termes et conditions</li>
              </ul>
            </div>
            <div className="right">
              <p>Siège social</p>

              <div className="address">
                <div className="image">
                  <img src={images.Unnamed} alt="" />
                </div>
                <div>
                  <h4>
                    Marseille, France
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </h4>
                  <div className="address_text"> Adresse à rajouter</div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="copy_write">
            <div class="text-center">Made with ♥ by ©NFBoat</div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
