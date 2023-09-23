import React from "react";
import { Link } from "react-router-dom";

function Items() {
  return (
    <div className="container">
      <section className="padding-bottom-sm">
        <header className="section-heading heading-line">
          <h4 className="title-section text-center text-uppercase">
            Recommended items
          </h4>
        </header>
        <div className="row row-sm">
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="/products/6" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/2.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/2.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Some item name here
                </Link>
                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/9.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Great product name here
                </Link>
                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/4.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/5.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/5.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/7.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/6.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Some item name here
                </Link>
                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/7.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/9.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Great product name here
                </Link>
                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/9.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/4.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/6.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/5.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/7.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/6.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Some item name here
                </Link>
                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 product-wrap">
            <div className="card card-sm card-product-grid">
              <Link to="#" className="img-wrap img-show">
                {" "}
                <img
                  src={require("../../../assets/images/items/7.jpg")}
                  alt=""
                />{" "}
                <img
                  src={require("../../../assets/images/items/2.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Great product name here
                </Link>
                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>{" "}
          {/* col.// */}
        </div>{" "}
        <div className="col-md-12 d-flex justify-content-center">
          <button type="submit" className="btn btn-block btn-warning w-50">
            {" "}
            <i className="fa fa-plus"></i> More...{" "}
          </button>
        </div>
        {/* row.// */}
      </section>
    </div>
  );
}

export default Items;
