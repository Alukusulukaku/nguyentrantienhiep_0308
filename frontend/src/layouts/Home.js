import Slider from "../pages/home/Slider";
import Deal from "../pages/home/Deal";
import React from "react";
import Apparel from "../pages/home/Apparel";
import Electronics from "../pages/home/Electronics";
import Items from "../pages/home/Items";
import News from "../pages/home/News";
import Subscribe from "../pages/home/Subscribe";

function Home(props) {
  return (
    <>
      <div className="container">
        <Slider />
        <Deal />
        <Apparel />
        <Electronics />
        <Items />
        <News />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
