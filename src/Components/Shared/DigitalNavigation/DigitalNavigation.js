import React from "react";
import { images } from "../../../Assets/Assets";
import "./DigitalNavigation.scss";
export default function DigitalNavigation() {
  return (
    <div className="digital_wrapper">
      <div>
        <div className="icon_wrapper">
          <img src={images.Group_597} alt="" />
        </div>
        <h4>NFPort, compagnon digital de navigation</h4>
        <p>
          Gérez les documents administratifs de votre navire en demandant
          NFCard.
        </p>
      </div>
      <div>
        <div className="icon_wrapper">
          <img src={images.Group_598} alt="" />
        </div>
        <h4>Réservez des places de port en ligne</h4>
        <p>
          Grâce a NFPort, réservez simplement votre point d'amarrage en quelques
          minutes.
        </p>
      </div>
      <div>
        <div className="icon_wrapper">
          <img src={images.Group_599} alt="" />
        </div>
        <h4>Louez votre bateau</h4>
        <p>
          Gérez la location d'un ou plusieurs navires 100% assuré(s) depuis
          votre application.
        </p>
      </div>
    </div>
  );
}
