import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import ShipCard from "../../Shared/ShipCard/ShipCard";
import TenantCard from "../../Shared/TenantCard/TenantCard";
import MetaData from "../../Utils/MetaData";
import "./LocationBateaux.scss";

export default function LocationBateaux() {
  const [value, setValue] = useState(null);

  return (
    <div className="location_bateaux">
      <MetaData
        title={
          "Gestion, location de bateaux et réservations de places de ports | NFBoat"
        }
      />

      <Navbar />
      <div className="module">
        <div className="container">
          <div className="hero_header">
            <Fade>
              <div className="content_wrapper">
                <h2> La vie de votre bateau dans la poche</h2>

                <p>
                  Le compagnon digital de navigation Transparent, sécurisé,
                  indispensable
                </p>

                <button className="button">
                  <Link to="/recherche">Explorer</Link>
                </button>
                <button className="button">
                  <Link to="/">Nos offres</Link>
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="space100"></div>
      <div className="container-1179px boat_search-area">
        <Fade bottom>
          <h2>Rechercher un bateau</h2>
        </Fade>
        <Fade bottom delay={100}>
          <p>Veuillez entrer vos critères de recherches</p>
        </Fade>
        <div className="space75"></div>

        <Fade bottom delay={200}>
          <div className="search_items">
            <div className="item">
              <span className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <p>Ville ou Port</p>
              <span className="arrow_icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <div className="details_element">Ville ou Port</div>
            </div>
            <div className="item date42">
              <span className="icon">
                <i className="fa-solid fa-calendar-days"></i>
              </span>

              <p>{value == null && "Sélectionner une date"}</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  value={value}
                  keyboard
                  placeholder="MM/DD/YYYY"
                  format={"MM/DD/YYYY"}
                  minDate={dayjs("2017-01-01")}
                  toolbarTitle="Select Date"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <span className="arrow_icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
            <div className="item">
              <span className="icon">
                <i class="fa-solid fa-key"></i>
              </span>
              <p>A louer</p>
              <span className="arrow_icon">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <div className="details_element">
                <Link to="/">A louer</Link>
                <Link to="/">A vendre</Link>
              </div>
            </div>
            <div className="item">
              <span className="icon">
                <i class="fa-solid fa-sailboat"></i>
              </span>
              <p>Type de bateau</p>
              <span className="arrow_icon">
                <i className="fa-solid fa-angle-right"></i>
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
        </Fade>
      </div>

      <div className="space150"></div>

      <hr />

      {/* Suggestions */}

      <div className="container">
        <div className="suggestions">
          <div className="space125"></div>
          <Fade bottom delay={100}>
            <h3>Suggestions</h3>
          </Fade>
          <Fade bottom delay={200}>
            <p className="desc">
              Des milliers de navires de particuliers et professionnels à louer
              ou à acheter au meilleur prix
            </p>
          </Fade>

          <div className="space50"></div>
          <Fade bottom>
            <div className="grid_col_3">
              {Ship_Data.map((item, index) => (
                <ShipCard key={index} data={item} />
              ))}
            </div>
          </Fade>
        </div>
      </div>

      <div className="space100"></div>
      <div className="container">
        <TenantCard />
      </div>

      <div className="space100"></div>
      <hr />
      <div className="space100"></div>
      {/* Services */}
      <div className="container-medium-886px">
        <div className="services">
          <Fade bottom>
            <h2>Découvrez nos services uniques</h2>
          </Fade>
          <Fade bottom delay={100}>
            <p>
              Stockez toutes les informations relatives à votre bateau en un
              seul endroit grâce à un portefeuille crypté et sécurisé.
            </p>
          </Fade>

          <div className="space50"></div>

          <div className="grid_col_2">
            {servicesData.map((item, i) => (
              <Fade bottom>
                <div key={i} className="service_card">
                  <img src={item.img} alt="" />
                  <p className="card_title">{item.title}</p>
                </div>
              </Fade>
            ))}
          </div>
          <div className="space50"></div>
          <div className="learn_more">
            <Fade delay={100}>
              <button className="button button_black">
                <Link to="/a-props">En savoir plus</Link>
              </button>
            </Fade>
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
