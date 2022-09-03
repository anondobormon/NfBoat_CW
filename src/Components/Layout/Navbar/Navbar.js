import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import "./Navbar.scss";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  const style = {
    opacity: "1",
    transform: "translateY(100vh)",
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <Link to="/" className="logo">
            <img src={images.logo} alt="" />
          </Link>

          <div className="menu">
            <ul className="menu_items">
              <li className="menu_item">
                <Link to="/location-bateaux">Louer un bateau</Link>
              </li>
              <li className="menu_item">
                <Link to="/port-booking">NFPort</Link>
              </li>
              <li className="menu_item">
                <Link to="/a-propos">À propos</Link>
              </li>

              <li className="menu_item dropdown">
                <Link to="/">
                  Informations
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </Link>

                <div className="dropdown_list show_dropdown">
                  <ul className="list_items">
                    <h4 className="menu_header">Aide</h4>

                    <li className="menu_item">
                      <Link to="/join-us">Créer un compte</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/contact">Nous contacter</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/join-us">Devenir loueur</Link>
                    </li>
                  </ul>
                  <ul className="list_items">
                    <h4 className="menu_header">Légal</h4>

                    <li className="menu_item">
                      <Link to="/termes-conditions">Termes et conditions</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/politique-de-confidentialite">
                        Politique de confidentialité
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {showMenu && (
              <Fade top>
                <ul className="menu_items mobile">
                  <li className="menu_item">
                    <Link to="/mon-compte">Mon compte</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/wallet">Wallet</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/message">Messages</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/loc-et-reservations">Réservations</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/favoris">Favoris</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/location-bateaux">Louer un bateau</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/port-booking">NFPort</Link>
                  </li>
                  <li className="menu_item">
                    <Link to="/a-propos">À propos</Link>
                  </li>

                  <li className="menu_item ">
                    <div
                      className="menu_item_mobile"
                      onClick={() => setShowMenu2(!showMenu2)}
                    >
                      Informations
                      <span>
                        <i className="fa-solid fa-chevron-down"></i>
                      </span>
                    </div>
                  </li>

                  {showMenu2 && (
                    <Fade>
                      <div className="dropdown_list2 show_dropdown2">
                        <ul className="list_items">
                          <h4 className="menu_header">Aide</h4>

                          <li className="menu_item">
                            <Link to="/join-us">Créer un compte</Link>
                          </li>
                          <li className="menu_item">
                            <Link to="/contact">Nous contacter</Link>
                          </li>
                          <li className="menu_item">
                            <Link to="/join-us">Devenir loueur</Link>
                          </li>
                        </ul>
                        <ul className="list_items">
                          <h4 className="menu_header">Légal</h4>

                          <li className="menu_item">
                            <Link to="/termes-conditions">
                              Termes et conditions
                            </Link>
                          </li>
                          <li className="menu_item">
                            <Link to="/politique-de-confidentialite">
                              Politique de confidentialité
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Fade>
                  )}

                  <li className="menu_item">
                    <button className="button Connexion">Connexion</button>
                  </li>
                </ul>
              </Fade>
            )}
          </div>

          <div className="search_area">
            <div className="search">
              <div
                className="search_icon"
                onClick={() => setSearchBar(!searchBar)}
              >
                <img src={images.Filter_icon} alt="" />
              </div>

              <div className={`search_bar ${searchBar && "show_search_bar"}`}>
                <form action="">
                  <input
                    type="text"
                    className="input"
                    placeholder="Bateau ou port"
                  />
                  <input className="button" type="submit" value="Rechercher" />
                </form>
              </div>
            </div>

            <div
              onClick={() => setShowMenu(!showMenu)}
              className="menu_icon_wrapper active"
            >
              <div
                id="menu_button_5"
                class={`menu-btn-5 ${showMenu && "clicked"}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="search_button">
              <button className="button">Connexion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
