import React from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import MetaData from "../../Utils/MetaData";
import "../MonCompte/Mon_compte.scss";

export default function Search() {
  return (
    <div>
      <div className="mon_compte">
        <MetaData title={"Mon compte | NFBoat"} />

        <Navbar />

        <div className="container">
          <div className="search_area2">
            <Fade bottom>
              <h3>Mon compte</h3>
            </Fade>
            <Fade bottom delay={100}>
              <form className="search">
                <div className="icon_wrapper">
                  <input type="text" placeholder="Rechercher un sujet" />
                  <img src={images.Filter_icon} alt="" />
                </div>

                <button className="button">Recherche</button>
              </form>
            </Fade>
          </div>
          <div className="grid_col_3">
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.bx_id_card} alt="" />
              </div>
              <div className="account_title">Informations personnelles</div>
              <p>
                Fournissez des renseignements personnels et indiquez comment
                nous pouvons vous joindre
              </p>
            </div>
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.charm_shield} alt="" />
              </div>
              <div className="account_title">Connexion et sécurité</div>
              <p>Mettez à jour votre mot de passe et sécurisez votre compte</p>
            </div>
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.ion_cash} alt="" />
              </div>
              <div className="account_title">Paiements et versements</div>
              <p>
                Consultez les paiements, les versements, les coupons, les cartes
                cadeaux et les taxes
              </p>
            </div>
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.ci_notification} alt="" />
              </div>
              <div className="account_title">Notifications</div>
              <p>
                Choisissez vos préférences de notification et la façon dont vous
                souhaitez être contacté
              </p>
            </div>
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.akar_icons_eye} alt="" />
              </div>
              <div className="account_title">Vie privée et partage</div>
              <p>
                Contrôlez les applications connectées, ce que vous partagez et
                qui y a accès
              </p>
            </div>
            <div className="account_card">
              <div className="icon_wrapper">
                <img src={images.lucide_settings} alt="" />
              </div>
              <div className="account_title">Préférences globales</div>
              <p>
                Définissez votre langue, votre devise et votre fuseau horaire
                par défaut
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space50"></div>
      <hr />
      <Footer />
    </div>
  );
}
