import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../Assets/Assets";
import "./Navbar.scss";

export default function Navbar() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <Link to="/" className="logo">
            <img src={images.logo} alt="" />
          </Link>

          <div className="menu">
            <ul className="menu_items">
              <li className="menu_item account">
                <Link to="/">Mon compte</Link>
              </li>
              <li className="menu_item account">
                <Link to="/">Wallet</Link>
              </li>
              <li className="menu_item account">
                <Link to="/">Messages</Link>
              </li>
              <li className="menu_item account">
                <Link to="/">Réservations</Link>
              </li>
              <li className="menu_item account">
                <Link to="/">Favoris</Link>
              </li>
              <li className="menu_item">
                <Link to="/">Louer un bateau</Link>
              </li>
              <li className="menu_item">
                <Link to="/">NFPort</Link>
              </li>
              <li className="menu_item">
                <Link to="/">À propos</Link>
              </li>
              <li className="menu_item dropdown">
                <Link to="/">
                  Informations
                  <span>
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </Link>

                <div className="dropdown_list show_dropdown">
                  <ul className="list_items">
                    <h4 className="menu_header">Aide</h4>

                    <li className="menu_item">
                      <Link to="/">Créer un compte</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/">Nous contacter</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/">Devenir loueur</Link>
                    </li>
                  </ul>
                  <ul className="list_items">
                    <h4 className="menu_header">Légal</h4>

                    <li className="menu_item">
                      <Link to="/">Termes et conditions</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/">Politique de confidentialité</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="search_area">
            <div className="search">
              <div
                className="search_icon"
                onClick={() => setSearchBar(!searchBar)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
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
            <div className="search_button">
              <button className="button">Connexion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
