import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import MetaData from "../../Utils/MetaData";
import "./Mon_compte.scss";

export default function MonCompte() {
  const [toggle, setToggle] = useState("cards");
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

          {toggle === "cards" && (
            <div className="grid_col_3">
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.bx_id_card} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Informations personnelles")}
                  className="account_title"
                >
                  Informations personnelles
                </div>
                <p>
                  Fournissez des renseignements personnels et indiquez comment
                  nous pouvons vous joindre
                </p>
              </div>
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.charm_shield} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Connexion et sécurité")}
                  className="account_title"
                >
                  Connexion et sécurité
                </div>
                <p>
                  Mettez à jour votre mot de passe et sécurisez votre compte
                </p>
              </div>
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.ion_cash} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Paiements et versements")}
                  className="account_title"
                >
                  Paiements et versements
                </div>
                <p>
                  Consultez les paiements, les versements, les coupons, les
                  cartes cadeaux et les taxes
                </p>
              </div>
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.ci_notification} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Notifications")}
                  className="account_title"
                >
                  Notifications
                </div>
                <p>
                  Choisissez vos préférences de notification et la façon dont
                  vous souhaitez être contacté
                </p>
              </div>
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.akar_icons_eye} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Vie privée et partage")}
                  className="account_title"
                >
                  Vie privée et partage
                </div>
                <p>
                  Contrôlez les applications connectées, ce que vous partagez et
                  qui y a accès
                </p>
              </div>
              <div className="account_card">
                <div className="icon_wrapper">
                  <img src={images.lucide_settings} alt="" />
                </div>
                <div
                  onClick={() => setToggle("Préférences globales")}
                  className="account_title"
                >
                  Préférences globales
                </div>
                <p>
                  Définissez votre langue, votre devise et votre fuseau horaire
                  par défaut
                </p>
              </div>
            </div>
          )}
          {toggle === "Vie privée et partage" && (
            <Privacy
              title={"Privacy and sharing"}
              data={Privacy_Data}
              setToggle
            />
          )}
          {toggle === "Préférences globales" && (
            <Information
              title={"Préférences globales"}
              data={Global_Data}
              setToggle
            />
          )}
          {toggle === "Notifications" && (
            <Information
              title={"Notifications"}
              data={Notifications_Data}
              setToggle
            />
          )}
          {toggle === "Paiements et versements" && (
            <Information
              title={"Paiements et versements"}
              data={Payment_Data}
              setToggle
            />
          )}
          {toggle === "Connexion et sécurité" && (
            <Information
              title={"Connexion et sécurité"}
              data={Connexion_Data}
              setToggle
            />
          )}
          {toggle === "Informations personnelles" && (
            <Information
              title={"Informations personnelles"}
              data={Information_Data}
              setToggle
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Other component and Data

function Privacy({ title, data, setToggle }) {
  return (
    <Fade>
      <div className="container-medium-712px">
        <div className="informations">
          <div className="sub_header_link">
            <ul>
              <li>
                <Link onClick={() => setToggle("cards")} to={`/mon-compte`}>
                  Mon compte
                </Link>{" "}
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </li>

              <li>
                <Link to="/">{title}</Link>
              </li>
            </ul>
          </div>

          <h4 className="title">{title}</h4>
          {data.map((item, i) => (
            <div key={i} className="info_wrapper">
              <form className="info_item">
                <label className="privacy_area">
                  <h6>{item.title}</h6>
                  <input type="checkbox" name="Garden-2" id="Garden-2" />
                  <div className="checkbox checked"></div>
                </label>
              </form>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
function Information({ title, data, setToggle }) {
  return (
    <Fade>
      <div className="container-medium-712px">
        <div className="informations">
          <div className="sub_header_link">
            <ul>
              <li>
                <Link onClick={() => setToggle("cards")} to={`/mon-compte`}>
                  Mon compte
                </Link>{" "}
                <span>
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </li>

              <li>
                <Link to="/">{title}</Link>
              </li>
            </ul>
          </div>

          <h4 className="title">{title}</h4>
          {data.map((item, i) => (
            <div key={i} className="info_wrapper">
              <div className="info_item">
                <div className="left">
                  <h6>{item.title}</h6>
                  {item.sub_title.map((d, i) => (
                    <p key={i}>{d.desc}</p>
                  ))}
                </div>

                <div className="right">
                  <Link to={`/${item.link}`}>{item.link_title}</Link>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

const Notifications_Data = [
  {
    title: "Offres commerciales",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Newsletters",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "SMS",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Activité du compte",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Politique et rappels",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Messages",
    sub_title: [{ desc: "Activé" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
];

const Privacy_Data = [
  {
    title: "Display my profile and my ad in search engines",
    name: "box1",
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Data sharing ",
    name: "box2",

    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Cookies",
    name: "box3",

    link_title: "Modifier",
    link: "mon-compte",
  },
];
const Global_Data = [
  {
    title: "Langue préférée",
    sub_title: [{ desc: "Français" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Devise préférée    ",
    sub_title: [{ desc: "Euro (€)" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Fuseau horraire",
    sub_title: [{ desc: "(GMT+01:00) Paris" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
];
const Payment_Data = [
  {
    title: "Mot de passe",
    sub_title: [
      { desc: "Abonnement annuel - 01/01/2021 - 199,00€" },
      { desc: "Location de bateau - 26/02/22 - 590,90€" },
      { desc: "Réservation de place de port - 26/02/22 - 590,90€" },
      { desc: "Paiement 1 - 26/02/22 - 590,90€" },
    ],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Paypal    ",
    sub_title: [{ desc: "Compte actif" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Carte de crédit **** 2142",
    sub_title: [{ desc: "Compte actif" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
  {
    title: "Compte bancaire de retrait",
    sub_title: [
      { desc: "RIB : 3454 3421 3134 3223" },
      { desc: "BIC : *********" },
    ],
    link_title: "Modifier",
    link: "mon-compte",
  },
];
const Connexion_Data = [
  {
    title: "Mot de passe",
    sub_title: [{ desc: "Dernière maj le 22/11/2021actif" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Compte google    ",
    sub_title: [{ desc: "Désactiver" }],
    link_title: "Connecter",
    link: "mon-compte",
  },
  {
    title: "Compte",
    sub_title: [{ desc: "Désactivez votre compte" }],
    link_title: "Désactiver",
    link: "mon-compte",
  },
];
const Information_Data = [
  {
    title: "Nom légal",
    sub_title: [{ desc: "Jean Dupont" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Sexe",
    sub_title: [{ desc: "Homme" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Date de naissance",
    sub_title: [{ desc: "29/06/1996" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Adresse email",
    sub_title: [{ desc: "contact@nfboat.com" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Numéro de téléphone",
    sub_title: [{ desc: "+33 6 66 66 66 66" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
  {
    title: "Identité confirmée",
    sub_title: [{ desc: "Oui" }],
    link_title: "Supprimer",
    link: "mon-compte",
  },
  {
    title: "Adresse",
    sub_title: [{ desc: "9 rue des clous, 34 000 Montpellier" }],
    link_title: "Modifier",
    link: "mon-compte",
  },
];
