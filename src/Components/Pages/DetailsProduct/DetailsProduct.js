import React from "react";
import { Fade } from "react-reveal";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import "./DetailsProduct.scss";

export default function DetailsProduct() {
  return (
    <div>
      <div className="details_product">
        <Navbar />
        <div className="container">
          <div className="product_wrapper">
            <Fade>
              <div className="wrapper">
                <h2>Accès au wallet NFBoat</h2>
                <p>
                  Le Wallet NFBoat est un gestionnaire permettant de stocker,
                  visionner et d'organiser ses documents administratifs. Vous
                  êtes le seul détenteur de vos données et de vos documents
                  grâce a une clé privée
                </p>

                <ul>
                  <li>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Création d'un Wallet NFBoat
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Enregistrement d'un bateau
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Génération de contrats juridiques
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Fonction contrôle en mer
                  </li>
                </ul>

                <h3>NFCard</h3>
                <p>
                  Permet une gestion simplifiée et digitalisée de ses documents
                  administratifs liés à l'activité nautique
                </p>

                <h4>Enregistrement de bateaux</h4>
                <p>
                  Enregistrez un ou plusieurs bateaux sur notre plateforme.
                  Chacun prend la forme d'un NFT et permet de répertorier la vie
                  d'un navire Chaque bateau supplémentaire enregistré est
                  facturé 50€ TTC.
                </p>

                <h4>Génération de contrats de vente</h4>

                <p>
                  Rentrez les informations de votre navire et des deux parties
                  ou utilisez celles de vos NFCards pour générer des contrats de
                  vente sur mesures
                </p>

                <h4>Fonction contrôle en mer</h4>
                <p>
                  Lors d'un contrôle en mer, vous n'avez qu'a cliquer sur le
                  bouton pour consulter ou partager vos documents.
                </p>
              </div>
            </Fade>
            <Fade delay={300}>
              <div className="wrapper">
                <h3>Accès Wallet + NFCard</h3>

                <p>
                  Merci de vous inscrire, ou de vous connecter pour configurer
                  votre wallet
                </p>

                <div className="amount">199,00€</div>
                <button className="button">Procéder au paiement</button>
              </div>
            </Fade>
          </div>
        </div>

        <div className="space125"></div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}
