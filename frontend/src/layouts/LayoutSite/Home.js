import Slider from "../../pages/home/Slider";
import Deal from "../../pages/home/Deal";
import React from "react";
import SuggestedCategories from "../../pages/home/SuggestedCategories";
import Items from "../../pages/home/Items";
import News from "../../pages/home/News";
import Subscribe from "../../pages/home/Subscribe";

function Home(props) {
  return (
    <>
      <div>
        <Slider />
        <Deal />
        <SuggestedCategories />
        <Items />
        <News />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
