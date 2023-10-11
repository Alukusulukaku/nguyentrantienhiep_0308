import Slider from "../../pages/frontend/home/Slider";
import Deal from "../../pages/frontend/home/Deal";
import React, { useEffect, useState } from "react";
import SuggestedCategories from "../../pages/frontend/home/SuggestedCategories";
import { LatestProducts } from "../../pages/frontend/home/Category";
import News from "../../pages/frontend/home/News";
import Subscribe from "../../pages/frontend/home/Subscribe";

import Category from "../../pages/frontend/home/Category";
import categoryservice from "../../services/CategoryService";

function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await categoryservice.All();
        setCategories(result.data.data);
      }
      fetchItems();
    }, 200);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  return (
    <>
      <div>
        <Slider />
        <Deal />
        <LatestProducts />
        <SuggestedCategories />
        {categories.map((item, index) => {
          if (item.product.length !== 0) {
            return <Category category={item} key={index} />;
          } else {
            return "";
          }
        })}
        <News />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
