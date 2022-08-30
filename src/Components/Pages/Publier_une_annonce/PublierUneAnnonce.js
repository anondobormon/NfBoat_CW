import React, { useState } from "react";
import { Fade } from "react-reveal";
import { images } from "../../../Assets/Assets";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import DigitalNavigation from "../../Shared/DigitalNavigation/DigitalNavigation";
import MetaData from "../../Utils/MetaData";
import "../Enregistrer/Checkbox.scss";
import "./Publier_une_annonce.scss";

export default function PublierUneAnnonce() {
  const [toggle, setToggle] = useState("Louer mon bateau");
  return (
    <div className="publier_une_annonce">
      <MetaData title={"Publier une annonce | NFBoat"} />

      <Navbar />
      <div className="container">
        <div className="header">
          <Fade>
            <h2>Publier une annonce</h2>
          </Fade>
          <Fade bottom delay={100}>
            <p>Renseignez les informations de votre bateau avec votre NFCard</p>
          </Fade>
        </div>
        <div className="space25"></div>

        <div className="toggle_wrapper">
          <div className="toggle_two_btn">
            <Fade>
              <button
                onClick={() => setToggle("Louer mon bateau")}
                className={`button ${
                  toggle === "Louer mon bateau" && "active"
                }`}
              >
                Louer mon bateau
              </button>
            </Fade>
            <Fade>
              <button
                onClick={() => setToggle("Vendre mon bateau")}
                className={`button ${
                  toggle === "Vendre mon bateau" && "active"
                }`}
              >
                Vendre mon bateau
              </button>
            </Fade>
          </div>
        </div>
        <div className="space50"></div>

        {toggle === "Louer mon bateau" && (
          <div className="grid_col_2">
            <DigitalNavigation />
            <div className="wrapper wrapper2">
              <AddForm />
            </div>
          </div>
        )}
        {toggle === "Vendre mon bateau" && (
          <div className="grid_col_2">
            <DigitalNavigation />
            <div className="wrapper wrapper2">
              <AddForm2 />
            </div>
          </div>
        )}
      </div>

      <hr />

      <Footer />
    </div>
  );
}

function AddForm() {
  return (
    <Fade bottom delay={100}>
      <form>
        <div className="block">
          <div class="input_field">
            <label htmlFor="Price-2-2" class="field-label-8">
              Prix par jour
            </label>
            <input
              type="number"
              class="input"
              name="Price-2"
              placeholder="ex: 400€"
              id="Price-2-2"
              required=""
            />
          </div>
          <div class="input_field">
            <label htmlFor="Price-3" class="field-label-8">
              Assurance
            </label>
            <div class="select-wrapper">
              <select
                id="R-gion-aff-maritimes-2"
                name="R-gion-aff-maritimes-2"
                required=""
                class="input"
              >
                <option value="Another option">Séléctionner</option>
              </select>
            </div>
          </div>
        </div>
        <div
          id="w-node-ddb22939-9143-5dde-0abd-cdf309fb324c-4789822a"
          class="input_field"
        >
          <label htmlFor="rent" class="field-label-12">
            Entrez une courte description du navire
          </label>
          <textarea
            id="rent"
            name="listing-short-description-2"
            placeholder=""
            required=""
            class="textarea input"
          ></textarea>
        </div>
        <div className="checkbox_area">
          <h4>Caractéristiques</h4>

          <div className="checkbox_wrapper">
            <label className="">
              <input type="checkbox" name="Garden-2" id="Garden-2" />
              <div className="checkbox checked"></div>
              <span className="asdf" for="Garden-2">
                Skipper
              </span>{" "}
            </label>

            <label>
              <input type="checkbox" name="Laundry-2" id="Laundry-2" />
              <div className="checkbox checked"></div>
              <span for="Laundry-2">Eau courante</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Internet-2" id="Internet-2" />
              <div className="checkbox checked"></div>
              <span for="Internet-2">Draps</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Pool-2" id="Pool-2" />
              <div className="checkbox checked"></div>
              <span for="Pool-2">VHF</span>{" "}
            </label>
            <label>
              <input
                type="checkbox"
                name="Video-Surveillance-2"
                id="Video-Surveillance-2"
              />
              <div className="checkbox checked"></div>
              <span for="Video-Surveillance-2">GPS</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Jacuzzi-2" id="Jacuzzi-2" />
              <div className="checkbox checked"></div>
              <span for="Jacuzzi-2">Douche</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Elevator-2" id="Elevator-2" />
              <div className="checkbox checked"></div>
              <span for="Elevator-2">WC</span>{" "}
            </label>

            <label>
              <input type="checkbox" name="Electric-2" id="Electric-2" />
              <div className="checkbox checked"></div>
              <span for="Electric-2">Electricité</span>
            </label>
          </div>
        </div>

        <div className="input_field">
          <label className="file_input">
            <input type="file" name="" id="" />
            <img src={images.Icons_cloud} alt="" />
            <p>Télécharger des photos</p>
          </label>
          <label className="file_input Group_553">
            <input type="file" name="" id="" />
            <img width="58px" src={images.Group_553} alt="" />
            <p>Télécharger des photos</p>
          </label>
        </div>
        <div className="submit">
          <input type="submit" value="Créer ma NFCard" class="button" />
        </div>
      </form>
    </Fade>
  );
}

function AddForm2() {
  return (
    <Fade bottom delay={100}>
      <form>
        <div className="block">
          <div class="input_field">
            <label htmlFor="Price-2-2" class="field-label-8">
              Prix par jour
            </label>
            <input
              type="number"
              class="input"
              name="Price-2"
              placeholder="ex: 400€"
              id="Price-2-2"
              required=""
            />
          </div>
        </div>
        <div
          id="w-node-ddb22939-9143-5dde-0abd-cdf309fb324c-4789822a"
          class="input_field"
        >
          <label htmlFor="rent" class="field-label-12">
            Entrez une courte description du navire
          </label>
          <textarea
            id="rent"
            name="listing-short-description-2"
            placeholder=""
            required=""
            class="textarea input"
          ></textarea>
        </div>
        <div className="checkbox_area">
          <h4>Caractéristiques</h4>

          <div className="checkbox_wrapper">
            <label className="">
              <input type="checkbox" name="Garden-2" id="Garden-2" />
              <div className="checkbox checked"></div>
              <span className="asdf" for="Garden-2">
                Skipper
              </span>{" "}
            </label>

            <label>
              <input type="checkbox" name="Laundry-2" id="Laundry-2" />
              <div className="checkbox checked"></div>
              <span for="Laundry-2">Eau courante</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Internet-2" id="Internet-2" />
              <div className="checkbox checked"></div>
              <span for="Internet-2">Draps</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Pool-2" id="Pool-2" />
              <div className="checkbox checked"></div>
              <span for="Pool-2">VHF</span>{" "}
            </label>
            <label>
              <input
                type="checkbox"
                name="Video-Surveillance-2"
                id="Video-Surveillance-2"
              />
              <div className="checkbox checked"></div>
              <span for="Video-Surveillance-2">GPS</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Jacuzzi-2" id="Jacuzzi-2" />
              <div className="checkbox checked"></div>
              <span for="Jacuzzi-2">Douche</span>{" "}
            </label>
            <label>
              <input type="checkbox" name="Elevator-2" id="Elevator-2" />
              <div className="checkbox checked"></div>
              <span for="Elevator-2">WC</span>{" "}
            </label>

            <label>
              <input type="checkbox" name="Electric-2" id="Electric-2" />
              <div className="checkbox checked"></div>
              <span for="Electric-2">Electricité</span>
            </label>
          </div>
        </div>

        <div className="input_field">
          <label className="file_input">
            <input type="file" name="" id="" />
            <img src={images.Icons_cloud} alt="" />
            <p>Télécharger des photos</p>
          </label>
          <label className="file_input Group_553">
            <input type="file" name="" id="" />
            <img width="58px" src={images.Group_553} alt="" />
            <p>Télécharger des photos</p>
          </label>
        </div>
        <div className="submit">
          <input type="submit" value="Créer ma NFCard" class="button" />
        </div>
      </form>
    </Fade>
  );
}
