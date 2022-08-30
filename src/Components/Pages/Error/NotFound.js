import React from "react";
import { images } from "../../../Assets/Assets";
import Navbar from "../../Layout/Navbar/Navbar";
import MetaData from "../../Utils/MetaData";
import "./Error401.scss";

export default function NotFound() {
  return (
    <div>
      <MetaData
        title={"Not Found - Realtor X - Webflow Ecommerce website template"}
      />

      <Navbar />
      <div className="error_404">
        <div className="container">
          <div className="error_content">
            <div className="error_wrapper">
              <div className="lock_icon">
                <img src={images.SearchError} alt="" />
              </div>
              <h2 className="title">Page non trouvée</h2>
              <p>
                Il semblerait qu'une erreur est survenue.
                <br />
                Merci de revenir a l'accueil ou de vous connecter
              </p>

              <div className="button_area">
                <button className="button">Retour a l&#x27;accueil</button>
                <button className="button">Connexion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
