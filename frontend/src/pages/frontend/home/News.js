import React from "react";
import { Link } from "react-router-dom";
function News() {
  return (
    <div className="container">
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">News</h4>
        </header>
        <div className="row">
          <div className="col-md-3 col-sm-6 padding-bottom">
            <article className="card card-post">
              <Link to="#">
                <img
                  src={require("../../../assets/images/posts/1.jpg")}
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to="#">
                  <h6 className="title">Trade Assurance</h6>
                  <p className="small text-uppercase text-muted">
                    Order protection
                  </p>
                </Link>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          <div className="col-md-3 col-sm-6 padding-bottom">
            <article className="card card-post">
              <Link to="#">
                <img
                  src={require("../../../assets/images/posts/1.jpg")}
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to="#">
                  <h6 className="title">Trade Assurance</h6>
                  <p className="small text-uppercase text-muted">
                    Order protection
                  </p>
                </Link>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <Link to="#">
                <img
                  src={require("../../../assets/images/posts/2.jpg")}
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to="#">
                  <h6 className="title">Pay anytime</h6>
                  <p className="small text-uppercase text-muted">
                    Finance solution
                  </p>
                </Link>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <Link to="#">
                <img
                  src={require("../../../assets/images/posts/3.jpg")}
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to="#">
                  <h6 className="title">Inspection solution</h6>
                  <p className="small text-uppercase text-muted">
                    Easy Inspection
                  </p>
                </Link>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
          <div className="col-md-3 col-sm-6">
            <article className="card card-post">
              <Link to="#">
                <img
                  src={require("../../../assets/images/posts/4.jpg")}
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to="#">
                  <h6 className="title">Ocean and Air Shipping</h6>
                  <p className="small text-uppercase text-muted">
                    Logistic services
                  </p>
                </Link>
              </div>
            </article>{" "}
            {/* card.// */}
          </div>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </section>
    </div>
  );
}

export default News;
