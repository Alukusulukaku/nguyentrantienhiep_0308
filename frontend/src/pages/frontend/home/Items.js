import React from "react";
import ProductItem from "../../../components/frontend/ProductItem";

function Items(props) {
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
            {props.category.product_available.map((item, index) => {
              return <ProductItem product={item} key={index} />;
            })}
          </div>{" "}
          <div className="col-md-12 d-flex justify-content-center">
            <button
              onClick={() => props.setLimit(props.limit + 5)}
              className="btn btn-block btn-warning w-50"
            >
              {" "}
              <i className="fa fa-plus"></i> More...{" "}
            </button>
          </div>
          {/* row.// */}
        </section>
      </div>
    </>
  );
}

export default Items;
