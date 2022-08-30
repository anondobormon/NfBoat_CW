import React from "react";
import { images } from "../../../Assets/Assets";
import MetaData from "../../Utils/MetaData";
import "./Error401.scss";

export default function Error401() {
  return (
    <div className="error_401">
      <MetaData title={"Page protégée"} />
      <div className="container">
        <div className="error_content">
          <div className="error_wrapper">
            <div className="lock_icon">
              <img src={images.Lock_icon} alt="" />
            </div>
            <h2 className="title">Page protégée</h2>
            <p>Merci de rentrer le mot de passe</p>
            <form action="">
              <input
                type="text"
                name=""
                placeholder="Entrez votre mot de passe"
              />
              <input
                type="submit"
                value="Entrer sur le site"
                data-wait="Veuillez patienter..."
                class="button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
