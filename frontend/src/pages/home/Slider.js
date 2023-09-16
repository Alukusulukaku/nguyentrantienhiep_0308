import React from "react";
const Slider = () => (
  <section className="section-main padding-bottom">
    <div className="row">
      {/* col.// */}
      <div className="col-md-12">
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
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../assets/images/banners/banner_kanken.png")}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("../../assets/images/banners/banner_kanken1.png")}
                alt="Third slide"
              />
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
      </div>
      {/* col.// */}

      {/* col.// */}
    </div>
    {/* row.// */}

    {/* card.// */}
  </section>
);
export default Slider;
