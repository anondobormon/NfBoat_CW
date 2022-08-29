import React from "react";
import { Zoom } from "react-reveal";
import "./Tenant_card.scss";

export default function Tenant_card() {
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
            <button className="button">Louer un bateau</button>
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
            <button className="button">Louer un bateau</button>
          </div>
        </Zoom>
      </div>
    </div>
  );
}
