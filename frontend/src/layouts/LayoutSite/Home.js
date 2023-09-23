import Slider from "../../pages/frontend/home/Slider";
import Deal from "../../pages/frontend/home/Deal";
import React from "react";
import SuggestedCategories from "../../pages/frontend/home/SuggestedCategories";
import Items from "../../pages/frontend/home/Items";
import News from "../../pages/frontend/home/News";
import Subscribe from "../../pages/frontend/home/Subscribe";

function Home() {
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
