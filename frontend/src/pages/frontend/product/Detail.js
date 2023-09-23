import React from "react";
import { Link } from "react-router-dom";

const Detail = () => (
  <>
    <section className="py-3 bg-light">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Category name</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">Sub category</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Items
          </li>
        </ol>
      </div>
    </section>
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content bg-white padding-y">
      <div className="container">
        {/* ============================ ITEM DETAIL ======================== */}
        <div className="row">
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    {" "}
                    <Link to="#">
                      <img
                        src={require("../../../assets/images/items/15.jpg")}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>{" "}
                {/* slider-product.// */}
                <div className="thumbs-wrap">
                  <Link to="#" className="item-thumb">
                    {" "}
                    <img
                      src={require("../../../assets/images/items/15.jpg")}
                      alt=""
                    />
                  </Link>
                  <Link to="#" className="item-thumb">
                    {" "}
                    <img
                      src={require("../../../assets/images/items/15-1.jpg")}
                      alt=""
                    />
                  </Link>
                  <Link to="#" className="item-thumb">
                    {" "}
                    <img
                      src={require("../../../assets/images/items/15-2.jpg")}
                      alt=""
                    />
                  </Link>
                  <Link to="#" className="item-thumb">
                    {" "}
                    <img
                      src={require("../../../assets/images/items/15-1.jpg")}
                      alt=""
                    />
                  </Link>
                </div>{" "}
                {/* slider-nav.// */}
              </article>{" "}
              {/* gallery-wrap .end// */}
            </div>{" "}
            {/* card.// */}
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3">Hot sale unisex New Design Shoe </h2>
              <div className="rating-wrap my-3">
                <ul className="rating-stars">
                  <li style={{ width: "80%" }} className="stars-active">
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success">
                  {" "}
                  <i className="fa fa-clipboard-check" /> 154 orders{" "}
                </small>
              </div>{" "}
              {/* rating-wrap.// */}
              <div className="mb-3">
                <var className="price h4">USD 465,00</var>
                <span className="text-muted">USD 562.65 incl. VAT</span>
              </div>{" "}
              {/* price-detail-wrap .// */}
              <p>
                Compact sport shoe for running, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat{" "}
              </p>
              <dl className="row">
                <dt className="col-sm-3">Manufacturer</dt>
                <dd className="col-sm-9">
                  <Link to="#">Great textile Ltd.</Link>
                </dd>
                <dt className="col-sm-3">Article number</dt>
                <dd className="col-sm-9">596 065</dd>
                <dt className="col-sm-3">Guarantee</dt>
                <dd className="col-sm-9">2 year</dd>
                <dt className="col-sm-3">Delivery time</dt>
                <dd className="col-sm-9">3-4 days</dd>
                <dt className="col-sm-3">Availabilty</dt>
                <dd className="col-sm-9">in Stock</dd>
              </dl>
              <div className="form-row  mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className="input-group mb-3 input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        {" "}
                        −{" "}
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="form-group col-md">
                  <Link to="#" className="btn  btn-primary">
                    <i className="fas fa-shopping-cart" />{" "}
                    <span className="text">Add to cart</span>
                  </Link>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>{" "}
            {/* product-info-aside .// */}
          </main>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
        {/* ================ ITEM DETAIL END .// ================= */}
      </div>{" "}
      {/* container .//  */}
    </section>
    {/* ========================= SECTION CONTENT END// ========================= */}
    {/* ========================= SECTION  ========================= */}
    <section className="section-name padding-y bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="title-description">Description</h5>
            <p>
              Lava stone grill, suitable for natural gas, with cast-iron cooking
              grid, piezo ignition, stainless steel burners, water tank, and
              thermocouple. Thermostatic adjustable per zone. Comes complete
              with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <ul className="list-check">
              <li>Material: Stainless steel</li>
              <li>Weight: 82kg</li>
              <li>built-in drip tray</li>
              <li>Open base for pots and pans</li>
              <li>On request available in propane execution</li>
            </ul>
          </div>{" "}
          <div className="container">
            <section className="padding-bottom-sm">
              <header className="section-heading heading-line">
                <h4 className="title-section text-uppercase">
                  Maybe you like these products
                </h4>
              </header>
              <div className="row row-sm">
                <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
                  <div className="card card-sm card-product-grid">
                    <Link to="/product-detail/6" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/1.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Just another product name
                      </Link>
                      <div className="price mt-1">$179.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="card card-sm card-product-grid">
                    <Link to="#" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/2.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Some item name here
                      </Link>
                      <div className="price mt-1">$280.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="card card-sm card-product-grid">
                    <Link to="#" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/3.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Great product name here
                      </Link>
                      <div className="price mt-1">$56.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="card card-sm card-product-grid">
                    <Link to="#" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/4.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Just another product name
                      </Link>
                      <div className="price mt-1">$179.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="card card-sm card-product-grid">
                    <Link to="#" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/5.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Just another product name
                      </Link>
                      <div className="price mt-1">$179.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                  <div className="card card-sm card-product-grid">
                    <Link to="#" className="img-wrap">
                      {" "}
                      <img
                        src={require("../../../assets/images/items/6.jpg")}
                        alt=""
                      />{" "}
                    </Link>
                    <figcaption className="info-wrap">
                      <Link to="#" className="title">
                        Some item name here
                      </Link>
                      <div className="price mt-1">$280.00</div>{" "}
                      {/* price-wrap.// */}
                    </figcaption>
                  </div>
                </div>{" "}
              </div>{" "}
              {/* row.// */}
            </section>
          </div>
          {/* col.// */} {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* container .//  */}
    </section>
  </>
);

export default Detail;
