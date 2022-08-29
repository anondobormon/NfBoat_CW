import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Sub_Header from "../../Shared/Sub_Header/Sub_Header";
import "./Order_confirmation.scss";

const sub_header_data = {
  title: "Confirmation de commande",
  desc: "Merci d'avoir passé votre commande. Vous recevrez plus d'informations par e-mail.",
};

export default function Order_confirmation() {
  return (
    <div>
      <div className="order_confirmation">
        <Navbar />
        <Sub_Header data={sub_header_data} />
        <div className="space50"></div>
        <div className="container">
          <Fade bottom delay={100}>
            <div className="client_info">
              <div className="wrapper_left">
                <div className="wrapper">
                  <h3>Informations client</h3>

                  <div className="module">
                    <div>
                      <h4>Email</h4>
                      <p>email@nfboat.com</p>
                    </div>
                    <div>
                      <h4>Adresse de facturation</h4>
                      <p>Nom, prénom</p>
                      <p>Ville Code postal</p>
                      <p>Pays</p>
                    </div>
                  </div>
                </div>

                <div className="wrapper">
                  <h3>Informations de paiement</h3>

                  <div className="module">
                    <div>
                      <h4>Informations de paiement</h4>
                      <p>Mode de paiement **** 9283</p>
                      <p>Date du paiement</p>
                    </div>
                    <div>
                      <h4>Adresse de facturation</h4>
                      <p>Nom, prénom</p>
                      <p>Ville Code postal</p>
                      <p>Pays</p>
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <h3>Commande</h3>

                  <div className="module3">
                    <div className="left">
                      <Link to="/" target="_blank">
                        <img src={images.Wallet} alt="" />
                      </Link>

                      <p>NFCard et accès wallet</p>
                    </div>
                    <h4>199,00€</h4>
                  </div>
                </div>
              </div>

              <div className="wrapper_right">
                <h3>Résumé de la commande</h3>
                <div>
                  <p>Sous-total</p>
                  <h4>179,00€</h4>
                </div>
                <div>
                  <p>179,00€</p>
                </div>
                <div>
                  <p>Total</p>
                  <h4>199,00€</h4>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        <div className="space150"></div>

        <hr />

        <Footer />
      </div>
    </div>
  );
}
