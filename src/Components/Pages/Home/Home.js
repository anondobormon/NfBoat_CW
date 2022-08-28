import React from "react";
import Boat from "../../Home/Boat";
import Comming_Soon_Slider from "../../Home/Comming_Soon_Slider/Comming_Soon_Slider";
import Hero from "../../Home/Hero";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import "./Home.scss";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Boat />

      <Comming_Soon_Slider />

      <hr />
      <Footer />
    </div>
  );
}
