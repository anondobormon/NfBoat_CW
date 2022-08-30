import React from "react";
import Fade from "react-reveal/Fade";
import Boat from "../../Home/Boat";
import Comming_Soon_Slider from "../../Home/Comming_Soon_Slider/Comming_Soon_Slider";
import Hero from "../../Home/Hero";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import SenaryCard from "../../Shared/SenaryCard/SenaryCard";
import MetaData from "../../Utils/MetaData";
import "./Home.scss";

export default function Home() {
  return (
    <div className="">
      <MetaData
        title={"Gestion de documents de navigation | NFCard | NFboat"}
      />
      <Navbar />
      <Hero />
      <Boat />
      <SenaryCard />
      <Fade>
        <Comming_Soon_Slider />
      </Fade>

      <hr />

      <Footer />
    </div>
  );
}
