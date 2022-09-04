import React from "react";
import { images } from "../../../Assets/Assets";
import "./SenaryCard.scss";

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function SenaryCard() {
  const headerRef = React.createRef();

  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 800;
    const offset = headerHeight;
    const rect = headerRef.current.getBoundingClientRect();

    const didScrollPage = (e) => {
      let calc;
      if (window.innerWidth <= 992) {
        calc = 5.5 - (window.scrollY - offset + range) / range;
      } else {
        calc = 4 - (window.scrollY - offset + range) / range;
      }

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("scroll", didScrollPage);
    };
  }, []);

  return (
    <div
      style={{ background: `rgba(0, 0, 0, ${1 - opacity})` }}
      className="navigate_senary"
    >
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
            <div ref={headerRef} className="item">
              <div className="img_wrapper">
                <img src={images.Wallet_boat} alt="" />
                <div style={{ opacity: opacity }} className="fixed_img">
                  <img src={images.Publier_img} alt="" />
                </div>
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
            <div ref={headerRef} className="item">
              <div
                // style={{ opacity: opacity }}
                className="img_wrapper"
              >
                <img src={images.Search_boat} alt="" />
                <div style={{ opacity: opacity }} className="fixed_img">
                  <img src={images.Boat_section} alt="" />
                </div>
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
          <Link to="/a-propos" className="button">
            Plus d'informations
          </Link>
        </Fade>
      </div>
    </div>
  );
}
