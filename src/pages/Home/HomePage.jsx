import React from "react";
import data from "../../data/data";
import Navbar from "../../layouts/Navbar";
import Carousel from "../../components/Carousel";
import Introduction from "../../components/Introduction";
import About from "../../components/About";
import Footer from "../../layouts/Footer";
import ProgramFilter from "../../components/ProgramFilter";

export const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* We import our data in the Carousel component because we need them on the idCard and also in the ArtistsPage*/}

      <Carousel data={data} />

      <Introduction />
      <ProgramFilter />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
