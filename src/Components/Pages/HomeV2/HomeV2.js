import React from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import MetaData from "../../Utils/MetaData";
import "./Home_v2.scss";
import Slider from "./Slider";

export default function HomeV2() {
  return (
    <div className="home_v2">
      <MetaData title={"Location et vente de bateaux | NFBoat"} />

      <Navbar />

      <div className="space50"></div>
      <div className="container">
        <div className="sub_header_link">
          <Fade bottom>
            <h4>Modèle du bateau - Nom du port</h4>
          </Fade>
          <Fade bottom>
            <div className="comment_wrapper">
              <div className="rating">
                <img src={images.Star_filled} alt="" />
                4.5/5 - 5 commentaires
              </div>
              <div className="share">
                <div>
                  <img src={images.Share} alt="" />
                  <p>Partager</p>
                </div>
                <div>
                  <img src={images.Heart_outline} alt="" />
                  <p>Enregistrer</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="slider">
        <Fade>
          <Slider />
        </Fade>
        <div className="space50"></div>
      </div>

      <div className="container">
        <div className="module">
          <Fade>
            <div className="left">
              <div className="header_flex">
                <div className="header_left">
                  <h3>Modèle du bateau - Nom du port</h3>
                  <p>x Passagers - x Places - x Lits</p>
                  <p>Année 2018 - 152 043 Miles</p>
                </div>
                <div className="header_right">
                  <img src={images.Image_testimonial} alt="" />
                </div>
              </div>

              <hr />

              <div className="content_section">
                <h4>Description</h4>
                <p>
                  Bonjour, <br />
                  Je propose une location de mon bateau (450 CV) qui se situe
                  sur le port de Marseille. N’hésitez pas à me contacter si
                  proposition d’achat, je suis ouvert à toute proposition.
                </p>
              </div>

              <hr />

              <div className="content_section">
                <h4>Caractéristiques</h4>

                <div className="features_cards">
                  <div className="features_card">
                    <img src={images.Power_solid} alt="" />
                    <h5>Puissance</h5>
                    <p>450 CV</p>
                  </div>
                  <div className="features_card">
                    <img src={images.Power_solid} alt="" />
                    <h5>Couchage(s)</h5>
                    <p>1</p>
                  </div>
                </div>
              </div>

              <div className="content_section">
                <h4>Avis</h4>

                <div className="notice_cards">
                  <div className="notice_card">
                    <div className="profile">
                      <div className="profile_picture">
                        <img src={images.Testimonial_1} alt="" />
                      </div>
                      <div className="author">Zoé</div>
                    </div>
                    <p>
                      Daniel est très arrangeant, notre séjour était excellent,
                      et la propreté du bateau est irréprochable. Au plaisir de
                      relouer votre bateau !
                    </p>
                  </div>
                  <div className="notice_card">
                    <div className="profile">
                      <div className="profile_picture">
                        <img src={images.Testimonial_1} alt="" />
                      </div>
                      <div className="author">Zoé</div>
                    </div>
                    <p>
                      Daniel est très arrangeant, notre séjour était excellent,
                      et la propreté du bateau est irréprochable. Au plaisir de
                      relouer votre bateau !
                    </p>
                  </div>
                </div>
              </div>

              <div className="content_section">
                <h4>Équipements</h4>

                <div className="equipment_cards">
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                  <div className="equipment_card">
                    <div className="img_wrapper">
                      <img src={images.Group_1655} alt="" />
                    </div>
                    <p>Gilets secours</p>
                  </div>
                </div>
              </div>

              <div className="content_section">
                <h4>Dates</h4>
                <div className="img_wrapper">
                  <img src={images.Calender} alt="" />
                </div>
              </div>
              <div className="content_section">
                <h4>Emplacement sur la carte</h4>
                <div className="img_wrapper">
                  <img src={images.Map} alt="" />
                </div>
              </div>

              <div className="content_section">
                <h4>Politique d'annulation</h4>
                <p>
                  Une annulation 2 jours avant la date entraine le paiement de
                  la première journée de location
                </p>
              </div>
            </div>
          </Fade>

          <Fade delay={100}>
            <div className="right">
              <div className="wrapper">
                <div className="amount">
                  <h3>
                    200,00€ <span>/ jour</span>{" "}
                  </h3>
                  <div className="rating">
                    <img src={images.Star_filled} alt="" />
                    <p>4.5/5</p>
                  </div>
                </div>
                <div className="arrival_card">
                  <div className="card_top">
                    <div className="card_left">
                      <h5>Arrivée</h5>
                      <p>Date</p>
                    </div>
                    <div className="card_right">
                      <h5>Départ</h5>
                      <p>Date</p>
                    </div>
                  </div>
                  <div className="card_bottom">
                    <h5>Passagers</h5>
                    <p>x Passagers</p>
                  </div>
                </div>

                <button className="button reserved">Réserver</button>
                <button className="button contact">Contacter</button>
                <p className="text-center">
                  Aucun montant ne vous sera débité pour le moment
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className="space175"></div>

      <hr />

      <Footer />
    </div>
  );
}
