import React, { useEffect, useState } from "react";
import ProductItem from "../../../components/frontend/ProductItem";
import productservice from "../../../services/ProductService";

function Category(props) {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result1 = await productservice.getByCategory(
            props.category.id,
            limit
          );
          setProducts(result1.data.data);
        }
        fetchItems();
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    },
    [limit, props.category.id]
  );
  return (
    <>
      {}
      <div className="container">
        <section className="padding-bottom-sm">
          <header className="section-heading heading-line">
            <h4 className="title-section text-center text-uppercase">
              {props.category.name}
            </h4>
          </header>
          <div className="row row-sm">
            {products.map((item, index) => {
              return <ProductItem product={item} location={index} />;
            })}
          </div>{" "}
          <div className="col-md-12 d-flex justify-content-center">
            {limit < 12 && products.length >= 6 ? (
              <button
                onClick={() => setLimit(limit + 5)}
                className="btn btn-block btn-warning w-50"
              >
                {" "}
                <i className="fa fa-plus"></i> More...{" "}
              </button>
            ) : (
              ""
            )}
          </div>
          {/* row.// */}
        </section>
      </div>
    </>
  );
}

export function LatestProducts() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result1 = await productservice.getLatestProducts(12);
        setProducts(result1.data.data);
      }
      fetchItems();
    }, 250);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  return (
    <>
      <div className="container">
        <section className="padding-bottom-sm">
          <header className="section-heading heading-line">
            <h4 className="title-section text-center text-uppercase">
              New arrivals
            </h4>
          </header>
          <div className="row row-sm">
            {products.map((item, index) => {
              return <ProductItem product={item} location={index} />;
            })}
          </div>{" "}
          {/* row.// */}
        </section>
      </div>
    </>
  );
}
export default Category;
