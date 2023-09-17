import React from "react";
import { Link } from "react-router-dom";
const Slider = () => (
  <section className="section-main padding-bottom">
    {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
    <div
      id="carousel1_indicator"
      className="slider-home-banner carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carousel1_indicator"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carousel1_indicator" data-slide-to={1} />
        <li data-target="#carousel1_indicator" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../../assets/images/banners/new_arrivals_women.png")}
            alt="First slide"
            className="slider-image"
          />
          <div className="carousel-caption text-white text-left padding-bottom">
            <h1
              className="slider-text display-4"
              style={{ fontWeight: "bold" }}
            >
              First slide label
            </h1>
            <p className="slider-description">
              Some representative placeholder content for the third slide.
            </p>
            <Link to={""} class="btn btn-warning w-25 padding-y-sm">
              {" "}
              Shop now{" "}
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("../../assets/images/banners/banner_kanken.png")}
            alt="Second slide"
            className="slider-image"
          />
          <div className="carousel-caption text-white text-left padding-bottom">
            <h1
              className="slider-text display-4"
              style={{ fontWeight: "bold" }}
            >
              Second slide label
            </h1>
            <p className="slider-description">
              Some representative placeholder content for the third slide.
            </p>
            <Link to={""} class="btn btn-warning w-25 padding-y-sm">
              {" "}
              Shop now{" "}
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={require("../../assets/images/banners/banner_kanken1.png")}
            alt="Third slide"
            className="slider-image"
          />
          <div className="carousel-caption text-white text-left padding-bottom">
            <h1
              className="slider-text display-4"
              style={{ fontWeight: "bold" }}
            >
              Third slide label
            </h1>
            <p className="slider-description">
              Some representative placeholder content for the third slide.
            </p>
            <Link to={""} class="btn btn-warning w-25 padding-y-sm">
              {" "}
              Shop now{" "}
            </Link>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel1_indicator"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel1_indicator"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}

    {/* row.// */}

    {/* card.// */}
  </section>
);
export default Slider;
