import React from "react";
import { images } from "../../Assets/Assets";
import Tenant_card from "../Shared/Tenant_card/Tenant_card";
import "./Boat.scss";

export default function Boat() {
  return (
    <div className="boat">
      <div className="container">
        <h3 className="boat_title">Une carte, un bateau</h3>
        <div className="space200"></div>
        <div className="grid_col_3">
          <div className="card">
            <div className="card_img">
              <img src={images.Boat1} alt="" />
            </div>
            <div className="card_title">Enregistrement d&#x27;un bateau</div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={images.Boat2} alt="" />
            </div>
            <div className="card_title">Gestion de documents</div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={images.Boat3} alt="" />
            </div>
            <div className="card_title">Booking de places de port</div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={images.Boat4} alt="" />
            </div>
            <div className="card_title">Locations de bateaux</div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={images.Boat5} alt="" />
            </div>
            <div className="card_title">Génération de contrats</div>
          </div>
          <div className="card">
            <div className="card_img">
              <img src={images.Boat6} alt="" />
            </div>
            <div className="card_title">Fonction contrôle en mer</div>
          </div>
        </div>

        <div className="demander">
          <button className="button">Demander ma NFCard</button>
        </div>

        <div className="space200"></div>

        <div className="container">
          <Tenant_card />
        </div>
      </div>
    </div>
  );
}
