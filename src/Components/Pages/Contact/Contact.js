import React, { useState } from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import MetaData from "../../Utils/MetaData";
import Accordion from "./Accordion";
import "./Contact.scss";

const paragraph =
  " Proin sed libero enim sed faucibus turpis in elit ut tortor pretium viverra suspendisse potenti cras semper auctor neque vitae tempus quam pellentesque ulla pellentesque dignissim enim sit ltricies mi eget mauris  pharetra et ultrices neque ortor aliquam nulla facilisi  cras fermentum odioeu orttitor.";

const data = [
  {
    title: " Qu'est ce que la NFCard ?",
    paragraph,
    index: "1",
  },
  {
    title: "Comment enregistrer son bateau ?",
    paragraph,
    index: "2",
  },
  {
    title: " Quel est le prix annuel d'un abonnement a la    NFCard ?",
    paragraph,
    index: "3",
  },
  {
    title: "  Une assurance est t'elle comprise si je loue mon  bateau ?",
    paragraph,
    index: "4",
  },
  {
    title: "Quels sont les frais de location prélevés au loueur ?",
    paragraph,
    index: "5",
  },
];
const data2 = [
  {
    title: " Qu'est ce que la NFCard ?",
    paragraph,
    index: "1",
  },
  {
    title: " Comment réserver une place de port ?",
    paragraph,
    index: "2",
  },
  {
    title: " Est'il possible d'annuler une    réservation ?",
    paragraph,
    index: "3",
  },
  {
    title: "Comment contacter le port dans lequel j'ai reservé ?",
    paragraph,
    index: "4",
  },
  {
    title: "J'ai une place de port, puis-je la mettre en    location ?",
    paragraph,
    index: "5",
  },
];

export default function Contact() {
  const [faqstate, setFaqstate] = useState("card");

  return (
    <div>
      <div className="contact">
        <MetaData title={"Contactez-nous | NFBoat"} />

        <Navbar />

        <div className="sub_header">
          <div className="container">
            <div className="sub_header_wrapper">
              <Fade bottom>
                <h2 className="header_title">Contactez-nous</h2>
              </Fade>
              <Fade delay={100} bottom>
                <p>Nous serions heureux de répondre à vos questions</p>
              </Fade>
              <div className="contact_card">
                <Fade delay={100} bottom>
                  <div className="card">
                    <div className="icon_wrapper">
                      <img src={images.Contact_message} alt="" />
                    </div>
                    <h3>Envoyez nous un email</h3>
                    <p>
                      Du Lundi au Vendredi
                      <br />
                      08:00 - 18h00
                    </p>

                    <div className="divider"></div>

                    <p className="email">contact@nfboat.com</p>
                  </div>
                </Fade>
                <Fade delay={300} bottom>
                  <div className="card">
                    <div className="icon_wrapper">
                      <img src={images.Contact_phone} alt="" />
                    </div>
                    <h3>Téléphonez nous</h3>
                    <p>
                      Du Lundi au Vendredi
                      <br />
                      08:00 - 18h00
                    </p>

                    <div className="divider"></div>

                    <p className="email">contact@nfboat.com</p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="message">
            <Fade>
              <div className="left">
                <h2>
                  Vous préférez nous <br /> laisser un message ?
                </h2>
                <p>Nous vous répondrons via nos réseaux sociaux</p>
                <div className="social_icons">
                  <ul>
                    <li>
                      <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
            <Fade delay={100}>
              <div className="right">
                <div className="block">
                  <div className="input_field">
                    <label htmlFor="">Nom complet</label>
                    <input
                      className="input"
                      type="text"
                      placeholder="Jean Dupont"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="input_field">
                    <label htmlFor="">Adresse email</label>
                    <input
                      className="input"
                      type="email"
                      placeholder="exemple@email.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="block">
                  <div className="input_field">
                    <label htmlFor="">Téléphone</label>
                    <input
                      className="input"
                      type="tel"
                      placeholder="0612345678"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="input_field">
                    <label htmlFor="">Sujet</label>
                    <input
                      className="input"
                      type="text"
                      name=""
                      id=""
                      placeholder="ex. Partenariat"
                    />
                  </div>
                </div>

                <div className="input_field">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    id=""
                    className="input textarea "
                    placeholder="Merci d&#x27;écrire votre message"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Envoyer le message"
                  className="button"
                />
                <div className="success">
                  <img src={images.IconSuccess} class="image_success" />
                  <div class="success-message-text">
                    Your message has been submitted. <br />
                    We will get back to you within 24-48 hours.
                  </div>
                </div>
                <div className="error-message">Oops! Something went wrong.</div>
              </div>
            </Fade>
          </section>

          <div className="space200"></div>

          <div className="faq_section">
            <Fade>
              <div class="faq-header">
                <h2>Foire aux questions</h2>
                <p>Trouvez les réponses à vos questions dans notre FAQ</p>
              </div>
            </Fade>
            <Fade delay={100}>
              <div className="faq_wrapper">
                <div className="toggle_two_btn">
                  <button
                    onClick={() => setFaqstate("card")}
                    className={`button ${faqstate === "card" && "active"}`}
                  >
                    NFCard
                  </button>
                  <button
                    onClick={() => setFaqstate("port")}
                    className={`button ${faqstate === "port" && "active"}`}
                  >
                    NFPort
                  </button>
                </div>
                {faqstate === "port" && (
                  <Fade delay={100}>
                    <Accordion data={data} />
                  </Fade>
                )}
                {faqstate === "card" && (
                  <Fade delay={100}>
                    <Accordion data={data2} />
                  </Fade>
                )}
              </div>
            </Fade>
          </div>
        </div>
        <div className="space175"></div>

        <hr />

        <Footer />
      </div>
    </div>
  );
}
