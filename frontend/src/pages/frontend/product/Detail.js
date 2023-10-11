import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import urlImage from "../../../config";

function Detail() {
  const { category } = useParams("category");
  const { slug } = useParams("slug");
  const [product, setProduct] = useState([]);
  const [products_other, setProducts_other] = useState([]);
  const [products_img, setProducts_img] = useState([]);
  const [category1, setCategory] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [brand, setBrand] = useState([]);

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result1 = await productservice.getProductBySlug(category, slug);
          setProduct(result1.data.data);
          setProducts_other(result1.data.other_data);
          setCategory(result1.data.data.category);
          setBrand(result1.data.data.brand);
          setProducts_img(result1.data.data.productimage);
        }
        fetchItems();
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    },
    [category, slug]
  );
  const handlerChangeImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <>
      <section className="py-3 bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">{category1.name}</Link>
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
                      <Link to="#">
                        <img
                          src={`${urlImage}productImg/${selectedImage}`}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>{" "}
                  {/* slider-product.// */}
                  <div className="thumbs-wrap">
                    {products_img.map((item, index) => {
                      return (
                        <Link
                          onMouseOver={() => handlerChangeImage(item.image)}
                          className="item-thumb"
                          key={index}
                        >
                          {" "}
                          <img
                            src={`${urlImage}productImg/${item.image}`}
                            alt=""
                          />
                        </Link>
                      );
                    })}
                  </div>{" "}
                  {/* slider-nav.// */}
                </article>{" "}
                {/* gallery-wrap .end// */}
              </div>{" "}
              {/* card.// */}
            </aside>
            <main className="col-md-6">
              <article className="product-info-aside">
                <h2 className="title mt-3">{product.name}</h2>
                <div className="rating-wrap my-3">
                  <small className="label-rating text-success">
                    {" "}
                    <i className="fa fa-clipboard-check" /> 154 orders{" "}
                  </small>
                </div>{" "}
                {/* rating-wrap.// */}
                <div className="mb-3">
                  <var className="price h4">USD {product.price}</var>
                  <span className="text-muted">
                    USD {product.price} incl. VAT
                  </span>
                </div>{" "}
                {/* price-detail-wrap .// */}
                <p>{product.description}</p>
                <dl className="row">
                  <dt className="col-sm-3">Brand</dt>
                  <dd className="col-sm-9">{brand.name}</dd>
                  <dt className="col-sm-3">Article number</dt>
                  <dd className="col-sm-9">596 065</dd>
                  <dt className="col-sm-3">Guarantee</dt>
                  <dd className="col-sm-9">2 year</dd>
                  <dt className="col-sm-3">Delivery time</dt>
                  <dd className="col-sm-9">3-4 days</dd>
                  <dt className="col-sm-3">Availabilty</dt>
                  <dd className="col-sm-9">test</dd>
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
              <p>{product.description}</p>
            </div>{" "}
            <div className="container">
              <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                  <h4 className="title-section text-uppercase">
                    Maybe you like these products
                  </h4>
                </header>
                <div className="row row-sm">
                  {products_other.map((item, index) => {
                    return (
                      <div
                        className="col-xl-2 col-lg-3 col-md-4 col-6"
                        key={index}
                      >
                        <div className="card card-sm card-product-grid">
                          <Link
                            to={`/san-pham/${category}/${item.slug}`}
                            className="img-wrap"
                          >
                            {" "}
                            <img
                              src={`${urlImage}product/${item.image}`}
                              alt=""
                            />{" "}
                          </Link>
                          <figcaption className="info-wrap">
                            <Link
                              to={`/san-pham/${category}/${item.slug}`}
                              className="title"
                            >
                              {item.name}
                            </Link>
                            <div className="price mt-1">${item.price}</div>{" "}
                            {/* price-wrap.// */}
                          </figcaption>
                        </div>
                      </div>
                    );
                  })}{" "}
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
}

export default Detail;
