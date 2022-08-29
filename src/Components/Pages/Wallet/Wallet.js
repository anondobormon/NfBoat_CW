import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Wallet.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Fade } from "react-reveal";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Wallet() {
  const [card, setCard] = useState("");
  const [infoDetails, setInfoDetails] = useState("");
  return (
    <div>
      <div className="wallet">
        <Navbar />
        <div className="space50"></div>
        <Fade bottom>
          <div className="wallet_name">
            <h3>Wallet de 'name'</h3>
            <button className="button_small button_black">
              Enregistrer un nouveau bateau
            </button>
          </div>
        </Fade>

        <div className="container">
          <div className="wallet_content_wrapper">
            <Fade bottom>
              <h3>0,00€</h3>
            </Fade>
            <Fade bottom delay={100}>
              <p>Fonds disponibles</p>
            </Fade>
            <Fade bottom delay={250}>
              <button className="button_small button_black">
                Transférer vers mon compte
              </button>
            </Fade>
            <Fade bottom delay={200}>
              <Link to="/">Consulter l'historique</Link>
            </Fade>
            <Fade bottom delay={300}>
              <div className="divider"></div>
            </Fade>
            <Fade bottom delay={350}>
              <h3>NFCards</h3>
            </Fade>
            <Fade bottom delay={400}>
              <p>Cliquez sur une carte pour accéder aux documents</p>
            </Fade>
            {card === "" && (
              <Fade delay={500}>
                <Swiper
                  navigation={true}
                  slidesPerView={1}
                  spaceBetween={20}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div
                      onClick={() => setCard("card")}
                      className="wallet_card"
                    >
                      <div className="image_wrapper">
                        <img src={images.Group_600} alt="" />
                      </div>
                      <div className="content_wrapper">
                        <div>Nom du bateau</div>
                        <div className="gray_title">NFBoat</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onClick={() => setCard("card")}
                      className="wallet_card"
                    >
                      <div className="image_wrapper">
                        <img src={images.Group_600} alt="" />
                      </div>
                      <div className="content_wrapper">
                        <div>Nom du bateau</div>
                        <div className="gray_title">NFBoat</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Fade>
            )}
          </div>

          {card === "card" && (
            <div className="card_details container-medium-886px">
              <div className="space100"></div>
              <Fade left>
                <div onClick={() => setCard("")} className="close_icon">
                  <img src={images.Cross_Icon} alt="" />
                </div>
              </Fade>
              <Fade delay={100}>
                <div className="card_demo">
                  <div className="wallet_card wallet_card_details">
                    <div className="image_wrapper">
                      <img src={images.Group_600} alt="" />
                    </div>
                    <div className="content_wrapper">
                      <div>Nom du bateau</div>
                      <div className="gray_title">NFBoat</div>
                    </div>
                  </div>
                  <div className="card_info">
                    <h3>Nom du bateau</h3>
                    <h6>Type - Année</h6>
                    <p>Largeur : x mètres</p>
                    <p>Longueur : x mètres</p>

                    <h6>Affaires maritimes : Région</h6>
                    <h6>Immatriculation : imxczZ2t</h6>

                    <div className="rent">
                      <h4>En location</h4>

                      <div>
                        {" "}
                        <img src={images.healthicons_no} alt="" />
                        <img src={images.healthicons_yes} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
              <div className="space50"></div>
              <Fade delay={100}>
                <div className="grid_col_3">
                  <div className="info_card">
                    <div className="top">
                      <img src={images.ri_safe} alt="" />
                      <h5>Assurance</h5>
                    </div>

                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="info_card">
                    <div className="top">
                      <img src={images.carbon_character} alt="" />
                      <h5>Assurance</h5>
                    </div>

                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="info_card">
                    <div className="top">
                      <img src={images.uil_bill} alt="" />
                      <h5>Assurance</h5>
                    </div>

                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                    <div className="date">
                      <div>
                        <p>Date de l'upload</p>
                        <h5>Nom du document</h5>
                      </div>
                      <div className="icon">
                        <img src={images.akar_icons_share} alt="" />
                        <img src={images.eye} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          )}

          <div className="space50"></div>

          {infoDetails === "" && (
            <div className="service_section">
              <Fade bottom>
                <h3>Services NFBoat</h3>
              </Fade>

              <Fade bottom delay={100}>
                <div className="grid_col_3">
                  <div className="account_card">
                    <div className="icon_wrapper">
                      <img src={images.bx_id_card} alt="" />
                    </div>
                    <div className="account_title">Louer un bateau</div>
                    <p>
                      Publiez une annonce de location ou de vente de votre
                      bateau automatiquement avec votre NFCard
                    </p>
                  </div>
                  <div className="account_card">
                    <div className="icon_wrapper">
                      <img src={images.carbon_document} alt="" />
                    </div>
                    <div
                      onClick={() => setInfoDetails("Ajouter un document")}
                      className="account_title"
                    >
                      Ajouter un document
                    </div>
                    <p>
                      Ajoutez un document (assurance, acte de francisation,
                      facture d'entretien...) a une de vos NFCards
                    </p>
                  </div>
                  <div className="account_card">
                    <div className="icon_wrapper">
                      <img src={images.maki_police} alt="" />
                    </div>
                    <div
                      onClick={() => setInfoDetails("Contrôle en mer")}
                      className="account_title"
                    >
                      Contrôle en mer
                    </div>
                    <p>
                      Configurez la fonction Contrôle en mer en téléchargeant
                      vos documents de navigation
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          )}

          {infoDetails === "Ajouter un document" && (
            <Fade>
              <div className="container-medium-712px wallet_565">
                <div className="informations control">
                  <div className="sub_header_link">
                    <ul>
                      <li>
                        <Link onClick={() => setInfoDetails("")} to={`/wallet`}>
                          Wallet
                        </Link>{" "}
                        <span>
                          <i class="fa-solid fa-chevron-right"></i>
                        </span>
                      </li>

                      <li>
                        <Link to="/">Contrôle en mer</Link>
                      </li>
                    </ul>
                  </div>

                  <h4>Contrôle en mer</h4>
                  <p>
                    Veuillez télécharger les documents pour utiliser la
                    fonctionnalité
                  </p>
                  <br />
                  <hr />
                  <div className="space25"></div>

                  <div className="expender">
                    <div className="title">
                      <div>
                        <h4>Choisir un bateau</h4>
                        <p>Date de dépôt</p>
                      </div>
                      <Link className="text_green" to="/">
                        Document vérifié
                      </Link>
                    </div>
                    <div className="title">
                      <div>
                        <h4>Assurance</h4>
                        <p>Date de dépôt</p>
                      </div>
                      <Link className="text_yellow" to="/">
                        En cours de vérification
                      </Link>
                    </div>
                    <div className="input_field">
                      <label className="file_input Group_553">
                        <input type="file" name="" id="" />
                        <img width="58px" src={images.Group_553} alt="" />
                        <p>Télécharger des photos</p>
                      </label>
                    </div>
                    <div className="title">
                      <div>
                        <h4>Immatriculation européenne</h4>
                        <p>Date de dépôt</p>
                      </div>
                      <Link className="text_red" to="/">
                        Document vérifié
                      </Link>
                    </div>

                    <div className="input_field">
                      <label className="file_input Group_553">
                        <input type="file" name="" id="" />
                        <img width="58px" src={images.Group_553} alt="" />
                        <p>Télécharger des photos</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          )}
          {infoDetails === "Contrôle en mer" && (
            <Fade>
              <div className="container-medium-712px wallet_565">
                <div className="informations">
                  <div className="sub_header_link">
                    <ul>
                      <li>
                        <Link onClick={() => setInfoDetails("")} to={`/wallet`}>
                          Wallet
                        </Link>{" "}
                        <span>
                          <i class="fa-solid fa-chevron-right"></i>
                        </span>
                      </li>

                      <li>
                        <Link to="/">Ajouter un document</Link>
                      </li>
                    </ul>
                  </div>

                  <h4>Ajouter un document</h4>
                  <p>Veuillez remplir les informations suivantes</p>
                  <div className="space25"></div>

                  <div className="expender">
                    <div className="title">
                      <h4>
                        Choisir un bateau
                        <span>
                          <i class="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div className="modal">
                        <Link to="/">Modèle ou nom du bateau 1</Link>
                        <Link to="/">Modèle ou nom du bateau 2</Link>
                      </div>
                    </div>
                    <div className="title">
                      <h4>
                        Choisir un type de document
                        <span>
                          <i class="fa-solid fa-angle-down"></i>
                        </span>
                      </h4>
                      <div className="modal">
                        <Link to="/">Facture</Link>
                        <Link to="/">Assurance</Link>
                        <Link to="/">Immatriculation</Link>
                        <Link to="/">Contrôle technique</Link>
                      </div>
                    </div>

                    <div className="input_field">
                      <label className="file_input Group_553">
                        <input type="file" name="" id="" />
                        <img width="58px" src={images.Group_553} alt="" />
                        <p>Télécharger des photos</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          )}
        </div>

        <div className="space50"></div>

        <hr />

        <Footer />
      </div>
    </div>
  );
}
