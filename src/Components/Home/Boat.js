import React from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { images } from "../../Assets/Assets";
import TenantCard from "../Shared/TenantCard/TenantCard";
import "./Boat.scss";

const Demo_data = [
  {
    title: "Enregistrement d'un bateau",
    image: images.Boat1,
  },
  {
    title: "Gestion de documents",
    image: images.Boat2,
  },
  {
    title: "Booking de places de port",
    image: images.Boat3,
  },
  {
    title: "Locations de bateaux",
    image: images.Boat4,
  },
  {
    title: "Génération de contrats",
    image: images.Boat5,
  },
  {
    title: "Fonction contrôle en mer",
    image: images.Boat6,
  },
];

export default function Boat() {
  return (
    <div className="boat">
      <div className="container">
        <Fade bottom>
          <h3 className="boat_title">Une carte, un bateau</h3>
        </Fade>
        <p className="sub_title">
          Stockez tous les documents administratifs de votre bateau dans un
          coffre fort numérique grâce à la NFCard
        </p>
        <div className="space200"></div>
        <div className="grid_col_3">
          {Demo_data.map((item, i) => (
            <Fade bottom>
              <div key={i} className="card">
                <div className="card_img">
                  <img src={item.image} alt="" />
                </div>
                <div className="card_title">{item.title}</div>
              </div>
            </Fade>
          ))}
        </div>

        <div className="demander">
          <Zoom>
            <Link to="/wallet-nfcard" className="button">
              Demander ma NFCard
            </Link>
          </Zoom>
        </div>

        <div className="space200"></div>

        <TenantCard />
      </div>
    </div>
  );
}
