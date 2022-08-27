import React, { useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Location_card from "../../Shared/Location_Card/Location_card";
import Port_card from "../../Shared/Port_Card/Port_card";
import Sub_header_link from "../../Shared/Sub_Header_Link/Sub_header_link";
import "./LocEtReservations.scss";

export default function LocEtReservations() {
  const [toggle, setToggle] = useState("locations");
  return (
    <div className="locEtReservations">
      <Navbar />
      <Sub_header_link link={"Réservations"} />

      <div className="container-1179px">
        <div className="toggle_wrapper">
          <div className="toggle_two_btn">
            <button
              onClick={() => setToggle("locations")}
              className={`button ${toggle === "locations" && "active"}`}
            >
              Locations
            </button>
            <button
              onClick={() => setToggle("port")}
              className={`button ${toggle === "port" && "active"}`}
            >
              Ports
            </button>
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

                <Port_card data={item} />

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
