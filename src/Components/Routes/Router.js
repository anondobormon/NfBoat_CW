import React from "react";
import { Route, Routes } from "react-router-dom";
import APropos from "../Pages/APropos/APropos";
import Checkout from "../Pages/Checkout/Checkout";
import Contact from "../Pages/Contact/Contact";
import DetailsProduct from "../Pages/DetailsProduct/DetailsProduct";
import Enregistrer from "../Pages/Enregistrer/Enregistrer";
import Error401 from "../Pages/Error/Error401";
import NotFound from "../Pages/Error/NotFound";
import Favoris from "../Pages/Favoris/Favoris";
import Home from "../Pages/Home/Home";
import HomeV2 from "../Pages/Home_v2/HomeV2";
import JoinUs from "../Pages/JoinUs/JoinUs";
import LocationBateaux from "../Pages/LocationBateaux/LocationBateaux";
import LocEtReservations from "../Pages/LocEtReservations/LocEtReservations";
import Messages from "../Pages/Messages/Messages";
import MonCompte from "../Pages/MonCompte/MonCompte";
import OrderConfirmation from "../Pages/Order_confirmation/OrderConfirmation";
import PaypalCheckout from "../Pages/Paypal_Checkout/PaypalCheckout";
import PolitiqueDeConfidentialite from "../Pages/Politique-de-confidentialite/PolitiqueDeConfidentialite";
import Ports from "../Pages/Ports/Ports";
import PortBooking from "../Pages/Port_booking/PortBooking";
import PublierUneAnnonce from "../Pages/Publier_une_annonce/PublierUneAnnonce";
import Recherche from "../Pages/Recherche/Recherche";
import RechercheDePorts from "../Pages/Recherche_de_ports/RechercheDePorts";
import Search from "../Pages/Search/Search";
import TermesConditions from "../Pages/Termes_conditions/TermesConditions";
import Wallet from "../Pages/Wallet/Wallet";
import WalletNfcard from "./WalletNfcard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/401" element={<Error401 />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product-details" element={<DetailsProduct />} />
      <Route path="/enregistrer-un-bateau" element={<Enregistrer />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/home-v2" element={<HomeV2 />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/loc-et-reservations" element={<LocEtReservations />} />
      <Route path="/location-bateaux" element={<LocationBateaux />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/mon-compte" element={<MonCompte />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/paypal-checkout" element={<PaypalCheckout />} />
      <Route
        path="/politique-de-confidentialite"
        element={<PolitiqueDeConfidentialite />}
      />
      <Route path="/port-booking" element={<PortBooking />} />
      <Route path="/ports" element={<Ports />} />
      <Route path="/publier-une-annonce" element={<PublierUneAnnonce />} />
      <Route path="/recherche-de-ports" element={<RechercheDePorts />} />
      <Route path="/recherche" element={<Recherche />} />
      <Route path="/search" element={<Search />} />
      <Route path="/termes-conditions" element={<TermesConditions />} />
      <Route path="/wallet-nfcard" element={<WalletNfcard />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
