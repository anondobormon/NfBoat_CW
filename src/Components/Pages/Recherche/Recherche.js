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
import Range from "../../Shared/RangeSlider/Range";
import ShipCard from "../../Shared/ShipCard/ShipCard";
import MetaData from "../../Utils/MetaData";
import "../LocationBateaux/LocationBateaux.scss";
import "../RechercheDePorts/RechercheDePorts.scss";

const BoatData = [
  {
    title: "Bateau a moteur",
    img: images.Rectangle_517,
  },
  {
    title: "Semi-rigide",
    img: images.Rectangle_516,
  },

  {
    title: "Voilier",
    img: images.Rectangle_517_1,
  },
  {
    title: "Catamaran",
    img: images.Rectangle_517_2,
  },
  {
    title: "Jet-ski",
    img: images.Rectangle_516_1,
  },
  {
    title: "Yacht",
    img: images.Rectangle_516_2,
  },
  {
    title: "Goélette",
    img: images.Rectangle_516_3,
  },
];

export default function Recherche() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <div className="recherche_de_ports">
      <MetaData title={"Rechercher un bateau - Locations et ventes | NFBoat"} />

      <Navbar />
      <div className="container">
        <div className="space50"></div>
        <Fade bottom>
          <div className="header_filter">
            <h2>Résultats</h2>

            <button
              onClick={() => setShowModal(true)}
              className="button button_black"
            >
              <img src={images.Setting_icon} alt="" />
              Filtres
            </button>
          </div>
        </Fade>

        <div className="container-1179px boat_search-area">
          <div className="space75"></div>
          <Fade bottom delay={100}>
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
        <div className="space200"></div>

        <div className="grid_col_3">
          {Ship_Data.map((item, index) => (
            <ShipCard key={index} data={item} />
          ))}
        </div>

        <div className="space100"></div>
        <hr />
      </div>
      <Footer />

      {/* Modal */}

      {showModal && (
        <Fade>
          <div className="filter_modal">
            <div className="wrapper_full"></div>
            <div className="modules">
              <div className="container_750px">
                <div className="top">
                  <h5>Filtres</h5>
                  <div
                    onClick={() => setShowModal(false)}
                    className="close_icon"
                  >
                    <img src={images.Cross_Icon} alt="" />
                  </div>
                </div>
                <div className="modal_content_wrapper">
                  <h4>Localisation</h4>
                  <ul>
                    <li>Marseille</li>
                    <li>Cannes</li>
                    <li>
                      <img src={images.Filter_icon2} alt="" />
                      Ajouter
                    </li>
                  </ul>

                  <hr />

                  <h4>Fourchette de prix</h4>
                  <p>Le prix moyen par jour est de 225€</p>

                  <Range
                    min={0}
                    max={1000}
                    onChange={({ min, max }) =>
                      console.log(`min = ${min}, max = ${max}`)
                    }
                  />

                  <hr />

                  <h4>Type de bateau</h4>

                  <div className="grid_col_2">
                    {BoatData.map((i, index) => (
                      <div key={index} className="type_card">
                        <p>{i.title}</p>
                        <img src={i.img} alt="" />
                      </div>
                    ))}
                  </div>

                  <hr />

                  <h4>Yachtclub</h4>

                  <div className="grid_col_2">
                    <div className="left">
                      <label className="">
                        <input type="checkbox" name="Garden-2" id="Garden-2" />
                        <div className="checkbox checked"></div>
                        <span className="asdf" for="Garden-2">
                          Avec
                        </span>{" "}
                      </label>
                      <p>
                        Parfait si vous n'avez pas de permis bateau ou ne
                        souhaitez pas être à la barre
                      </p>
                    </div>
                    <div className="left">
                      <label className="">
                        <input type="checkbox" name="Garden-2" id="Garden-2" />
                        <div className="checkbox checked"></div>
                        <span className="asdf" for="Garden-2">
                          Sans
                        </span>{" "}
                      </label>
                      <p>
                        Vous disposez déjà d'un permis bateau, ou vous souhaitez
                        un navire sans permis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <Link to="/">Tout effacer</Link>
                  <button className="button button_black">
                    Afficher les bateaux
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      )}
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
