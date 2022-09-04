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
import BerthCard from "../../Shared/BerthCard/BerthCard";
import MetaData from "../../Utils/MetaData";
import Accordion from "../Contact/Accordion";
import "../LocationBateaux/LocationBateaux.scss";
import "./Port_booking.scss";

export default function PortBooking() {
  const [faqstate, setFaqstate] = useState("card");
  const [value, setValue] = useState(null);
  return (
    <div className="port_booking">
      <MetaData title={"Réservation de places de ports | NFBoat"} />
      <Navbar />
      <div className="space75"></div>
      <div className="container boat_search-area">
        <div className="booking_header">
          <Fade bottom>
            <h2>Réserver une place de port</h2>
          </Fade>
        </div>
        <div className="space100"></div>
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

      <div className="container">
        <div className="suggestions">
          <div className="space125"></div>
          <Fade bottom>
            <h3>Suggestions</h3>
          </Fade>
          <Fade bottom delay={100}>
            <p className="desc">
              Réservez une place de port en quelques minutes
            </p>
          </Fade>

          <div className="space50"></div>

          <div className="grid_col_3">
            {Berth_Data.map((item, index) => (
              <Fade bottom>
                <BerthCard key={index} data={item} />
              </Fade>
            ))}
          </div>
        </div>
      </div>

      <div className="space75"></div>

      <div className="faq_wrapper">
        <div className="toggle_two_btn">
          <Fade>
            <button
              onClick={() => setFaqstate("card")}
              className={`button ${faqstate === "card" && "active"}`}
            >
              NFCard
            </button>
          </Fade>
          <Fade>
            <button
              onClick={() => setFaqstate("port")}
              className={`button ${faqstate === "port" && "active"}`}
            >
              NFPort
            </button>
          </Fade>
        </div>

        {faqstate === "port" && <Accordion data={data} />}
        {faqstate === "card" && <Accordion data={data2} />}
      </div>

      <hr />

      <div className="space75"></div>

      <Footer />
    </div>
  );
}
const Berth_Data = [
  {
    title: "Aujourd'hui",
    img: images.City_image,
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
    img: images.City_image,
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
    img: images.City_image,
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
    img: images.City_image,
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
    img: images.City_image,
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
    img: images.City_image,
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
];

const paragraph =
  " Proin sed libero enim sed faucibus turpis in elit ut tortor pretium viverra suspendisse potenti cras semper auctor neque vitae tempus quam pellentesque ulla pellentesque dignissim enim sit ltricies mi eget mauris  pharetra et ultrices neque ortor aliquam nulla facilisi  cras fermentum odioeu orttitor.";

const data = [
  {
    title: " Qu'est ce que la NFCard ?",
    paragraph,
    index: "1",
  },
  {
    title: "Comment enregistrer son bateau ?",
    paragraph,
    index: "2",
  },
  {
    title: " Quel est le prix annuel d'un abonnement a la    NFCard ?",
    paragraph,
    index: "3",
  },
  {
    title: "  Une assurance est t'elle comprise si je loue mon  bateau ?",
    paragraph,
    index: "4",
  },
  {
    title: "Quels sont les frais de location prélevés au loueur ?",
    paragraph,
    index: "5",
  },
];
const data2 = [
  {
    title: " Qu'est ce que la NFCard ?",
    paragraph,
    index: "1",
  },
  {
    title: " Comment réserver une place de port ?",
    paragraph,
    index: "2",
  },
  {
    title: " Est'il possible d'annuler une    réservation ?",
    paragraph,
    index: "3",
  },
  {
    title: "Comment contacter le port dans lequel j'ai reservé ?",
    paragraph,
    index: "4",
  },
  {
    title: "J'ai une place de port, puis-je la mettre en    location ?",
    paragraph,
    index: "5",
  },
];
