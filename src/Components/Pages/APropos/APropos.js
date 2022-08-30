import React from "react";
import Fade from "react-reveal/Fade";
import { images } from "../../../Assets/Assets";
import Comming_Soon_Slider from "../../Home/Comming_Soon_Slider/Comming_Soon_Slider";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import SenaryCard from "../../Shared/SenaryCard/SenaryCard";
import MetaData from "../../Utils/MetaData";
import "./APropos.scss";

export default function APropos() {
  return (
    <div className="a_propos">
      <MetaData title={"A propos | NFBoat"} />
      <Navbar />

      <div className="propos_header">
        <div className="content_wrapper">
          <Fade bottom>
            <div className="img_wrapper">
              <img src={images.Group_554} alt="" />
            </div>
          </Fade>
          <Fade bottom delay={100}>
            <h2>La vie d'un bateau dans votre poche</h2>
          </Fade>
          <div className="space200"></div>
          <Fade bottom delay={150}>
            <p>Votre compagnon digital de navigation ‍</p>
          </Fade>
          <Fade bottom delay={200}>
            <p>‍Transparent, sécurisé, indispensable</p>
          </Fade>
          <div className="space175"></div>
          <Fade>
            <div className="button_wrapper">
              <button className="button button_black">
                <div>
                  <img src={images.Apple_icon} alt="" />
                </div>
                Bientôt sur iOS
              </button>
              <button className="button button_black">
                <div>
                  <img src={images.Android_icon} alt="" />
                </div>
                Bientôt sur Android
              </button>
            </div>
          </Fade>
        </div>
        <div className="ellipse_holder">
          <div className="left_bg">
            <img src="" alt="" />
          </div>
          <div className="right_bg">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="partner_section">
          <Fade bottom>
            <h3>Nos partenaires</h3>
          </Fade>
          <div className="space50"></div>
          <Fade bottom delay={100}>
            <div className="grid_col_3">
              <div className="item">
                <img src={images.DS_Case} alt="" />
              </div>
              <div className="item">
                <img src={images.Amazon} alt="" />
              </div>
              <div className="item">
                <img src={images.Itext} alt="" />
              </div>
            </div>
          </Fade>
          <div className="space150"></div>
          <div className="space150"></div>
        </div>
        <div className="experience">
          <Fade bottom>
            <h3>Expérimentez la simplicité</h3>
          </Fade>
          <Fade bottom delay={100}>
            <p>
              NFBoat répond à des enjeux de sécurité et de facilité d'usage Tous
              vos documents à portée de main
            </p>
          </Fade>
          <div className="space100"></div>
          <Fade delay={100}>
            <div className="grid_col_2">
              <div className="item">
                <div>
                  <h4>Accédez à vos documents de navigation en un clic</h4>
                  <p>
                    Stockez toutes les informations relatives à votre bateau en
                    un seul endroit grâce à un portefeuille crypté et sécurisé
                  </p>
                  <p>
                    Gérez la vie de votre bateau, et partagez votre expérience
                    avec une grande communauté
                  </p>
                </div>

                <img src={images.Infog1} alt="" />
              </div>
              <div className="item">
                <img src={images.Infog} alt="" />
                <div>
                  <h4>
                    Une plateforme d'achat, de vente et de location de bateaux
                  </h4>
                  <p>En quête d'un bateau pour vos prochaines vacances ?</p>
                </div>{" "}
              </div>
            </div>
          </Fade>

          <div className="space100"></div>
          <Fade delay={150}>
            <div className="grid_col_3">
              <div className="item">
                <img src={images.Nft} alt="" />
                <div className="title">Simple</div>
                <p>
                  Une expérience facilitée pour une utilisation sans condition
                </p>
              </div>
              <div className="item">
                <img src={images.Nft} alt="" />
                <div className="title">Innovant</div>
                <p>
                  NFBoat utilise une blockchain privée pour stocker vos
                  documents
                </p>
              </div>
              <div className="item">
                <img src={images.Document_icon} alt="" />
                <div className="title">Sécurisé</div>
                <p>Des données cryptées, dont vous êtes le seul propriétaire</p>
              </div>
            </div>
          </Fade>

          <div className="space200"></div>

          <div className="discover_area">
            <div className="left">
              <Fade bottom>
                <h2>Découvrez nos services uniques</h2>
              </Fade>
              <Fade bottom delay={100}>
                <p>Votre compagnon digital de navigation</p>{" "}
              </Fade>
            </div>
            <div className="right">
              <div className="card">
                <Fade delay={100}>
                  <div className="title">
                    <h2>1</h2> <h3>Gestion de documents</h3>
                  </div>
                </Fade>

                <Fade delay={150}>
                  <p>
                    Certificat d’immatriculation, assurance, contrôle technique,
                    factures, et historique d’entretien. Tout est désormais à
                    portée de main.
                  </p>
                </Fade>
              </div>
              <div className="card">
                <Fade delay={100}>
                  <div className="title">
                    <h2>2</h2> <h3>Génération de contrats</h3>
                  </div>
                </Fade>

                <Fade delay={150}>
                  <p>
                    5 minutes. C'est le temps qu'il vous faudra pour générer et
                    signer un contrat de vente conforme à la loi française.
                  </p>
                </Fade>
              </div>
              <div className="card">
                <Fade delay={100}>
                  <div className="title">
                    <h2>3</h2> <h3>Achetez, vendez, louez</h3>
                  </div>
                </Fade>

                <Fade delay={150}>
                  <p>
                    Des milliers de bateaux près de chez vous et dans la France
                    entière pour vos prochaines vacances. Trouvez le bateau
                    adapté à vos envies.
                  </p>
                </Fade>
              </div>
              <div className="card">
                <Fade delay={100}>
                  <div className="title">
                    <h2>4</h2> <h3>Booking de places de ports</h3>
                  </div>
                </Fade>

                <Fade delay={150}>
                  <p>
                    Un moyen digital et simplifié de réserver vos places de
                    ports, et points d'amarrages sur tout le littoral français.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          <div className="space200"></div>
        </div>
      </div>
      <SenaryCard />
      <div className="space200"></div>
      <Fade>
        <Comming_Soon_Slider />
      </Fade>

      <hr />
      <Footer />
    </div>
  );
}
