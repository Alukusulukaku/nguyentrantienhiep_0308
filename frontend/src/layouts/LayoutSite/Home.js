import Slider from "../../pages/frontend/home/Slider";
import Deal from "../../pages/frontend/home/Deal";
import React, { useEffect, useState } from "react";
import SuggestedCategories from "../../pages/frontend/home/SuggestedCategories";
import Items from "../../pages/frontend/home/Items";
import News from "../../pages/frontend/home/News";
import Subscribe from "../../pages/frontend/home/Subscribe";
import productservice from "../../services/ProductService";

function Home() {
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(5);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await productservice.getByCategory(limit);
          setCategories(result.data.data);
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    [limit]
  );
  return (
    <>
      <div>
        <Slider />
        <Deal />
        <SuggestedCategories />
        {categories.map((item, index) => {
          return (
            <Items
              category={item}
              setLimit={setLimit}
              limit={limit}
              key={index}
            />
          );
        })}
        <News />
      </div>
      <Subscribe />
    </>
  );
}

export default Home;
