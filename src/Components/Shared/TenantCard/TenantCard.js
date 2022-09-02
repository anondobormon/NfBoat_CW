import React from "react";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import "./TenantCard.scss";

export default function TenantCard() {
  return (
    <div className="tenant-card">
      <div className="grid_col_2">
        <Zoom>
          <div className="card left">
            <h3 className="title">Locataire</h3>
            <div className="desc">
              Parcourez notre plateforme et trouvez le bateau de vos rêves pour
              vos prochaines vacances. Avec ou sans Skipper, et au meilleur
              prix.
            </div>
            <Link to="/recherche" className="button">
              Louer un bateau
            </Link>
          </div>
        </Zoom>
        <Zoom>
          <div className="card">
            <h3 className="title">Propriétaire</h3>
            <p>
              Enregistrez votre bateau et rendez le visible à la location. Nos
              services comprennent la gestion et l&#x27;assurance de toute la
              location.
            </p>
            <Link to="/join-us" className="button">
              Publier une annonce
            </Link>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
