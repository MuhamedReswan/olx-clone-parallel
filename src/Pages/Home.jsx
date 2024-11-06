import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import TopBar from "../Components/Top Bar/TopBar";
import Card from "../Components/Card/Card";

function Home(props) {
  return (
    <div className="homeParentDiv ">
      <Header />
      <TopBar />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
