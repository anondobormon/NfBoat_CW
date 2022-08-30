import React, { useState } from "react";
import { Fade } from "react-reveal";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Location_card from "../../Shared/LocationCard/LocationCard";
import PortCard from "../../Shared/PortCard/PortCard";
import SubHeaderLink from "../../Shared/SubHeaderLink/SubHeaderLink";
import MetaData from "../../Utils/MetaData";
import "./LocEtReservations.scss";

export default function LocEtReservations() {
  const [toggle, setToggle] = useState("locations");
  return (
    <div className="locEtReservations">
      <MetaData title={"Locations et réservations | NFBoat"} />

      <Navbar />
      <SubHeaderLink link={"Réservations"} />

      <div className="container-1179px">
        <div className="toggle_wrapper">
          <div className="toggle_two_btn">
            <Fade delay={100}>
              <button
                onClick={() => setToggle("locations")}
                className={`button ${toggle === "locations" && "active"}`}
              >
                Locations
              </button>
            </Fade>
            <Fade delay={100}>
              <button
                onClick={() => setToggle("port")}
                className={`button ${toggle === "port" && "active"}`}
              >
                Ports
              </button>
            </Fade>
          </div>
        </div>

        <div className="space75"></div>

        {toggle === "locations"
          ? Location_Data.map((item, index) => (
              <section key={index} className="location_card_wrapper">
                <h3>{item.title}</h3>

                <div className="space25"></div>

                <Location_card data={item} />

                <hr />
                <div className="space50"></div>
              </section>
            ))
          : Port_Data.map((item, index) => (
              <section key={index} className="location_card_wrapper">
                <h3>{item.title}</h3>

                <div className="space25"></div>

                <PortCard data={item} />

                <div className="space75"></div>
                <hr />
                <div className="space50"></div>
              </section>
            ))}
      </div>

      <hr />
      <Footer />
    </div>
  );
}

const Location_Data = [
  {
    title: "Aujourd'hui",
    img: "Location",
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
    img: "Location",
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
    img: "Location",
    price: "0.00€ / jour",
    sub_title: "Nom ou modèle du bateau",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
];
const Port_Data = [
  {
    title: "Aujourd'hui",
    img: "Location",
    price: "0.00€ / nuit",
    sub_title: "Nom du port",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Réservations en cours",
    img: "Location",
    price: "0.00€ / nuit",
    sub_title: "Nom du port",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
  {
    title: "Historique de réservations",
    img: "Location",
    price: "0.00€ / nuit",
    sub_title: "Nom du port",
    address: "Adresse ou port",
    bed: 3,
    avec: "Avec",
    rating: "5/5",
    what_for: "A vendre",
  },
];
