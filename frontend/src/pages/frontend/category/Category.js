import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CategoryListView from "./CategoryListView";
import CategoryGridView from "./CategoryGridView";

const Category = () => (
  <section className="section-content padding-y">
    <div className="container">
      <nav className="row">
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#ffd7d7" }}>
              <img src={require("../../assets/images/items/1.jpg")} alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="/category/list">Summer shirts</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Unisex T shirts</Link>
                </li>
                <li>
                  <Link to="">Casual shirts</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#FFF68D" }}>
              <img src={require("../../assets/images/items/2.jpg")} alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Winter jackets</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Leather jackets</Link>
                </li>
                <li>
                  <Link to="">Men's jackets</Link>
                </li>
                <li>
                  <Link to="">Heating battery clothes</Link>
                </li>
                <li>
                  <Link to="">Jeans jackets</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#bcffb8" }}>
              <img src={require("../../assets/images/items/3.jpg")} alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Shorts</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Jeans shorts</Link>
                </li>
                <li>
                  <Link to="">Swimming shorts</Link>
                </li>
                <li>
                  <Link to="">Another some shorts</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#c9fff3" }}>
              <img src={require("../../assets/images/items/4.jpg")} alt="" />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Travel bags </Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Leather bags</Link>
                </li>
                <li>
                  <Link to="">Cook &amp; Hold ovens</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <Link to="#" className="img-wrap" style={{ background: "#ddffeb" }}>
              <img src={require("../../assets/images/items/5.jpg")} alt="" />
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Great items</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Combi steamers</Link>
                </li>
                <li>
                  <Link to="">Cook &amp; Hold ovens</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <Link to="#" className="img-wrap" style={{ background: "#dee4ff" }}>
              <img src={require("../../assets/images/items/6.jpg")} alt="" />
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Kitchen furniture</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Combi steamers</Link>
                </li>
                <li>
                  <Link to="">Cook &amp; Hold ovens</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <Link to="#" className="img-wrap" style={{ background: "#ddffeb" }}>
              <img src={require("../../assets/images/items/2.jpg")} alt="" />
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Great items</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Combi steamers</Link>
                </li>
                <li>
                  <Link to="">Cook &amp; Hold ovens</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <Link to="#" className="img-wrap" style={{ background: "#dee4ff" }}>
              <img src={require("../../assets/images/items/1.jpg")} alt="" />
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link to="#">Other clothes</Link>
              </h4>
              <ul className="list-menu">
                <li>
                  <Link to="">Jeans shorts</Link>
                </li>
                <li>
                  <Link to="">Cook &amp; Hold ovens</Link>
                </li>
                <li>
                  <Link to="">Scherf Ice cream</Link>
                </li>
                <li>
                  <Link to="">Another category</Link>
                </li>
                <li>
                  <Link to="">Great items name</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
      </nav>{" "}
      {/* row.// */}
    </div>{" "}
    {/* container .//  */}
  </section>
);

export default Category;
