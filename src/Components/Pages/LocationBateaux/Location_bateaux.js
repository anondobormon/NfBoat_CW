import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Ship_card from "../../Shared/Ship_card/Ship_card";
import Tenant_card from "../../Shared/Tenant_card/Tenant_card";
import "./Location_bateaux.scss";

export default function Location_bateaux() {
  return (
    <div className="location_bateaux">
      <Navbar />
      <div className="module">
        <div className="container">
          <div className="hero_header">
            <div className="content_wrapper">
              <h2> La vie de votre bateau dans la poche</h2>

              <p>
                Le compagnon digital de navigation Transparent, sécurisé,
                indispensable
              </p>

              <button className="button">Explorer</button>
              <button className="button">Nos offres</button>
            </div>
          </div>
        </div>
      </div>
      <div className="space100"></div>
      <div className="container-1179px boat_search-area">
        <h2>Rechercher un bateau</h2>
        <p>Veuillez entrer vos critères de recherches</p>

        <div className="space75"></div>
        <div className="search_items">
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <p>Ville ou Port</p>
            <span className="arrow_icon">
              <i class="fa-solid fa-angle-right"></i>
            </span>
            <div className="details_element">Ville ou Port</div>
          </div>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-calendar-days"></i>
            </span>
            <p>Dates</p>
            <span className="arrow_icon">
              <i class="fa-solid fa-angle-right"></i>
            </span>
            <div className="details_element">Ville ou Port</div>
          </div>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-money-check-dollar"></i>
            </span>
            <p>A louer</p>
            <span className="arrow_icon">
              <i class="fa-solid fa-angle-right"></i>
            </span>
            <div className="details_element">
              <Link to="/">A louer</Link>
              <Link to="/">A vendre</Link>
            </div>
          </div>
          <div className="item">
            <span className="icon">
              <i class="fa-solid fa-house"></i>
            </span>
            <p>Type de bateau</p>
            <span className="arrow_icon">
              <i class="fa-solid fa-angle-right"></i>
            </span>
            <div className="details_element">
              <Link to="/">Bateau à moteur</Link>
              <Link to="/">Semi-rigide</Link>
              <Link to="/">Voilier</Link>
              <Link to="/">Catamaran</Link>
              <Link to="/">Jet-ski</Link>
              <Link to="/">Péniche</Link>
              <Link to="/">Yacht</Link>
              <Link to="/">Goélette</Link>
            </div>
          </div>

          <div className="">
            <div className="button">Rechercher</div>
          </div>
        </div>
        <div class="success">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="form_fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>

      <div className="space75"></div>

      <hr />

      {/* Suggestions */}

      <div className="container">
        <div className="suggestions">
          <div className="space125"></div>
          <h3>Suggestions</h3>
          <p className="desc">
            Des milliers de navires de particuliers et professionnels à louer ou
            à acheter au meilleur prix
          </p>

          <div className="space50"></div>
          <div className="grid_col_3">
            {Ship_Data.map((item, index) => (
              <Ship_card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space100"></div>
      <div className="container">
        <Tenant_card />
      </div>

      <div className="space125"></div>
      <hr />
      <div className="space200"></div>
      {/* Services */}
      <div className="container-medium-886px">
        <div className="services">
          <h2>
            Découvrez nos <br /> services uniques
          </h2>
          <p>
            Stockez toutes les informations relatives à votre bateau en un seul
            endroit grâce à un portefeuille crypté et sécurisé.
          </p>

          <div className="space50"></div>

          <div className="grid_col_2">
            {servicesData.map((item, i) => (
              <div key={i} className="service_card">
                <img src={item.img} alt="" />
                <p className="card_title">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="space50"></div>
          <div className="learn_more">
            <button className="button button_black">En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="space200"></div>

      <hr />

      <Footer />
    </div>
  );
}

const Ship_Data = [
  {
    title: "Aujourd'hui",
    img: images.Image_7,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Réservations en cours",
    img: images.Ship_image2,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Historique de réservations",
    img: images.Ship_image3,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Aujourd'hui",
    img: images.Image_7,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Réservations en cours",
    img: images.Ship_image2,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Historique de réservations",
    img: images.Ship_image3,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
];

const servicesData = [
  {
    img: images.Entypo_wallet,
    title: "Gestion de documents",
  },
  {
    img: images.Mdi_sail_boat,
    title: "Location, achat et vente",
  },
  {
    img: images.Fxemoji_anchor,
    title: "Booking de places de ports",
  },
  {
    img: images.Clarity_contract_solid,
    title: "Génération de contrats",
  },
];
