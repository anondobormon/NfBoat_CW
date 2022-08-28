import React from "react";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Ports.scss";

export default function Ports() {
  return (
    <div>
      <div className="ports">
        <Navbar />

        <div className="container">
          <div className="sub_header_link">
            <h4>Nom du port</h4>

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
          </div>
        </div>

        <div className="port_header_img"></div>

        <div className="space25"></div>

        <div className="container">
          <div className="module">
            <div className="left">
              <div className="header_flex">
                <div className="header_left">
                  <h3>Nom du port</h3>
                  <p>Profondeur : x m - Capacité : 1500</p>
                  <p>Région : PACA</p>
                </div>
              </div>

              <hr />

              <div className="content_section">
                <h4>Description</h4>
                <p>
                  Le port de plaisance de Marseille - Vieux-Port est situé dans
                  le Bouches-du-Rhône. Il dispose d'une capacité d'accueil de
                  3200 bateaux sur pontons. Le port de Marseille - Vieux-Port
                  dispose d'un espace visiteurs pour vos escales avec 20 places
                  disponibles. Attention, le tirant d'eau maximum est de 6 m.
                </p>
              </div>

              <hr />

              <div className="content_section">
                <h4>Caractéristiques</h4>

                <div className="features_cards">
                  <div className="features_card">
                    <img src={images.Shower_solid_main} alt="" />
                    <h5>Puissance</h5>
                  </div>
                  <div className="features_card">
                    <img src={images.Cli_wc} alt="" />
                    <h5>WC</h5>
                  </div>
                  <div className="features_card">
                    <img src={images.Maki_fuel} alt="" />
                    <h5>Station essence</h5>
                  </div>
                </div>
              </div>

              <div className="content_section">
                <h4>Caractéristiques</h4>

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
                <h4>Dates</h4>
                <div className="image_wrapper">
                  <img src={images.Calender} alt="" />
                </div>
              </div>
              <div className="content_section">
                <h4>Emplacement sur la carte</h4>
                <div className="image_wrapper">
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
                </div>

                <button className="button reserved">Réserver</button>
                <p className="text-center">
                  Aucun montant ne vous sera débité pour le moment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space100"></div>

        <hr />

        <Footer />
      </div>
    </div>
  );
}
