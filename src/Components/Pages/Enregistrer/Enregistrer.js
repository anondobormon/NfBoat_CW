import React from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import Checkbox from "./Checkbox";
import "./Enregistrer.scss";

export default function Enregistrer() {
  return (
    <div className="enregistrer">
      <Navbar />
      <div className="container">
        <div className="header">
          <Fade bottom>
            <h2>Enregistrer un bateau</h2>
          </Fade>

          <Fade bottom delay={50}>
            <p>Veuillez remplir les informations</p>
          </Fade>
        </div>
        <div className="space100"></div>
        <div className="grid_col_2">
          <Fade bottom>
            <div className="wrapper wrapper_1">
              <div>
                <div className="icon_wrapper">
                  <img src={images.Group_597} alt="" />
                </div>
                <h4>NFPort, compagnon digital de navigation</h4>
                <p>
                  Gérez les documents administratifs de votre navire en
                  demandant NFCard.
                </p>
              </div>
              <div>
                <div className="icon_wrapper">
                  <img src={images.Group_598} alt="" />
                </div>
                <h4>Réservez des places de port en ligne</h4>
                <p>
                  Grâce a NFPort, réservez simplement votre point d'amarrage en
                  quelques minutes.
                </p>
              </div>
              <div>
                <div className="icon_wrapper">
                  <img src={images.Group_599} alt="" />
                </div>
                <h4>Louez votre bateau</h4>
                <p>
                  Gérez la location d'un ou plusieurs navires 100% assuré(s)
                  depuis votre application.
                </p>
              </div>
            </div>
          </Fade>
          <Fade delay={100}>
            <div className="wrapper">
              <form>
                <div className="input_field">
                  <label for="register" className="field-label-7">
                    Nom du bateau
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="listing-title-2"
                    placeholder="Pangea"
                    id="register"
                    required
                  />
                </div>
                <div className="input_field">
                  <label for="immat" className="field-label-7">
                    Immatriculation
                  </label>
                  <input
                    type="text"
                    className="input"
                    name="listing-title-2"
                    placeholder="04J8I4ER"
                    id="immat"
                    required
                  />
                </div>

                <div className="block">
                  <div className="input_field">
                    <label for="Price-2" className="field-label-8">
                      Prix par jour
                    </label>
                    <input
                      type="number"
                      className="input"
                      name="Price-2"
                      placeholder="ex: 400€"
                      id="Price-2"
                      required
                    />
                  </div>
                  <div className="input_field">
                    <label for="listing-title-3" className="field-label-9">
                      Type de bateau
                    </label>
                    <div className="input_field">
                      <select
                        id="Type-de-bateau-2"
                        name="Type-de-bateau-2"
                        required
                        className="input"
                      >
                        <option value="">Selectionner</option>
                        <option value="First">Voilier</option>
                        <option value="Second">Semi-rigide</option>
                        <option value="Third">Jet-ski</option>
                        <option value="Another option">Bateau a moteur</option>
                        <option value="Another option">Catamaran</option>
                        <option value="Another option">Yacht</option>
                        <option value="Another option">Goélette</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="block">
                  <div className="input_field">
                    <label for="listing-title-3" className="field-label-9">
                      Marque du moteur
                    </label>
                    <div className="input_field">
                      <select
                        id="Marque-moteur-2"
                        name="Marque-moteur-2"
                        required
                        className="input"
                      >
                        <option value="">Séléctionner</option>
                        <option value="Another option">Yamaha</option>
                        <option value="Another option">Mercury</option>
                        <option value="Another option">Selva</option>
                        <option value="Another option">Suzuki</option>
                        <option value="Another option">Honda Marine</option>
                        <option value="Another option">Yanmar</option>
                      </select>
                    </div>
                  </div>
                  <div className="input_field">
                    <label for="serienumber" className="field-label-9">
                      Numéro de série
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="listing-title-2"
                      placeholder=""
                      id="serienumber"
                      required
                    />
                  </div>
                </div>
                <div className="block">
                  <div className="input_field">
                    <label for="Longueur-2" className="field-label-10">
                      Longueur
                    </label>
                    <input
                      type="number"
                      className="input"
                      name="Longueur-2"
                      placeholder="Séléctionner"
                      id="Longueur-2"
                      required
                    />
                  </div>
                  <div className="input_field">
                    <label for="largeur" className="field-label-10">
                      Largeur
                    </label>
                    <input
                      type="number"
                      className="input"
                      name="listing-price-2"
                      placeholder="Séléctionner"
                      id="largeur"
                      required
                    />
                  </div>
                </div>

                <div className="block">
                  <div className="input_field">
                    <label for="listing-price-3" className="field-label-10">
                      Année de construction
                    </label>
                    <input
                      type="number"
                      className="input"
                      name="listing-price-2"
                      placeholder="Séléctionner"
                      id="listing-price-2"
                      required
                    />
                  </div>
                  <div className="input_field">
                    <label for="listing-title-3" className="field-label-9">
                      Puissance du moteur
                    </label>
                    <div className="input_field">
                      <select
                        id="Puissance-moteur-2"
                        name="Puissance-moteur-2"
                        required
                        className="input"
                      >
                        <option value="">Selectionner</option>
                        <option value="First">5cv</option>
                        <option value="Second">25cv</option>
                        <option value="Third">50cv</option>
                        <option value="Another option">75cv</option>
                        <option value="Another option">100cv</option>
                        <option value="Another option">150cv</option>
                        <option value="Another option">200cv</option>
                        <option value="Another option">250cv</option>
                        <option value="Another option">300cv</option>
                        <option value="Another option">600cv</option>
                        <option value="Another option">1200cv</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="block">
                  <div className="input_field">
                    <label for="affaires-maritimes" className="field-label-10">
                      Affaires maritimes (région)
                    </label>
                    <div className="">
                      <select
                        id="R-gion-aff-maritimes-2"
                        name="R-gion-aff-maritimes-2"
                        required
                        className="input"
                      >
                        <option value="Another option">Séléctionner</option>
                        <option value="Another option">
                          Provence Alpes Cote d&#x27;Azur
                        </option>
                        <option value="Another option">
                          Auvergne-Rhône-Alpes
                        </option>
                        <option value="Another option">
                          Bourgogne-Franche-Comté
                        </option>
                        <option value="Another option">Bretagne</option>
                        <option value="Another option">
                          Centre Val de Loire
                        </option>
                        <option value="Another option">Corse</option>
                        <option value="Another option">Grand Est</option>
                        <option value="Another option">Hauts-de-France</option>
                        <option value="Another option">Ile-de-France</option>
                        <option value="Another option">Normandie</option>
                        <option value="Another option">
                          Nouvelle-Aquitaine
                        </option>
                        <option value="Another option">Occitanie</option>
                        <option value="Another option">Pays de la Loire</option>
                      </select>
                    </div>
                  </div>
                  <div className="input_field">
                    <label for="listing-title-3" className="field-label-9">
                      N° d&#x27;affilié
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="listing-title-2"
                      placeholder=""
                      id="listing-title-2"
                      required
                    />
                  </div>
                </div>

                <div className="input_field">
                  <label
                    for="listing-short-description-3"
                    className="field-label-12"
                  >
                    Entrez une courte description du navire
                  </label>
                  <textarea
                    id="listing-short-description-2"
                    name="listing-short-description-2"
                    placeholder=""
                    required
                    className="input textarea"
                  ></textarea>
                </div>
                <Checkbox />

                <h4 className="photo_header">Photos du bateau</h4>
                <div className="input_field">
                  <label className="file_input">
                    <input type="file" name="" id="" />
                    <img src={images.Icons_cloud} alt="" />
                    <p>Télécharger des photos</p>
                  </label>
                </div>
                <div className="submit">
                  <input type="submit" value="Créer ma NFCard" class="button" />
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
      <div className="space100"></div>

      <hr />
      <Footer />
    </div>
  );
}
