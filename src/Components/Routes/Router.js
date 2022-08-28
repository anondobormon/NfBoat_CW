import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import DetailsProduct from "../Pages/DetailsProduct/DetailsProduct";
import Enregistrer from "../Pages/Enregistrer/Enregistrer";
import Error401 from "../Pages/Error/Error401";
import NotFound from "../Pages/Error/NotFound";
import Favoris from "../Pages/Favoris/Favoris";
import Home from "../Pages/Home/Home";
import Home_v2 from "../Pages/Home_v2/Home_v2";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Location_bateaux from "../Pages/LocationBateaux/Location_bateaux";
import LocEtReservations from "../Pages/LocEtReservations/LocEtReservations";
import Messages from "../Pages/Messages/Messages";
import Mon_compte from "../Pages/MonCompte/Mon_compte";
import Order_confirmation from "../Pages/Order_confirmation/Order_confirmation";
import Paypal_Checkout from "../Pages/Paypal_Checkout/Paypal_Checkout";
import Politique_de_confidentialite from "../Pages/Politique-de-confidentialite/Politique_de_confidentialite";
import Ports from "../Pages/Ports/Ports";
import Port_booking from "../Pages/Port_booking/Port_booking";
import Publier_une_annonce from "../Pages/Publier_une_annonce/Publier_une_annonce";
import Recherche from "../Pages/Recherche/Recherche";
import Recherche_de_ports from "../Pages/Recherche_de_ports/Recherche_de_ports";
import Search from "../Pages/Search/Search";
import Termes_conditions from "../Pages/Termes_conditions/Termes_conditions";
import Wallet from "../Pages/Wallet/Wallet";
import Wallet_nfcard from "./Wallet_nfcard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/401" element={<Error401 />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-details" element={<DetailsProduct />} />
      <Route path="/enregistrer-un-bateau" element={<Enregistrer />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/home-v2" element={<Home_v2 />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/loc-et-reservations" element={<LocEtReservations />} />
      <Route path="/location-bateaux" element={<Location_bateaux />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/mon-compte" element={<Mon_compte />} />
      <Route path="/order-confirmation" element={<Order_confirmation />} />
      <Route path="/paypal-checkout" element={<Paypal_Checkout />} />
      <Route
        path="/politique-de-confidentialite"
        element={<Politique_de_confidentialite />}
      />
      <Route path="/port-booking" element={<Port_booking />} />
      <Route path="/ports" element={<Ports />} />
      <Route path="/publier-une-annonce" element={<Publier_une_annonce />} />
      <Route path="/recherche-de-ports" element={<Recherche_de_ports />} />
      <Route path="/recherche" element={<Recherche />} />
      <Route path="/search" element={<Search />} />
      <Route path="/termes-conditions" element={<Termes_conditions />} />
      <Route path="/wallet-nfcard" element={<Wallet_nfcard />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
