import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryListView from "./CategoryListView";
import CategoryGridView from "./CategoryGridView";

const Category = () => (
  <section className="section-content padding-y">
    <div className="container">
      <nav className="row">
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#ffd7d7" }}>
              <img src={require("../../assets/images/items/1.jpg")} />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="/category/list">Summer shirts</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Unisex T shirts</a>
                </li>
                <li>
                  <a href="">Casual shirts</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#FFF68D" }}>
              <img src={require("../../assets/images/items/2.jpg")} />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Winter jackets</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Leather jackets</a>
                </li>
                <li>
                  <a href="">Men's jackets</a>
                </li>
                <li>
                  <a href="">Heating battery clothes</a>
                </li>
                <li>
                  <a href="">Jeans jackets</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#bcffb8" }}>
              <img src={require("../../assets/images/items/3.jpg")} />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Shorts</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Jeans shorts</a>
                </li>
                <li>
                  <a href="">Swimming shorts</a>
                </li>
                <li>
                  <a href="">Another some shorts</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <div className="img-wrap" style={{ background: "#c9fff3" }}>
              <img src={require("../../assets/images/items/4.jpg")} />
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Travel bags </a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Leather bags</a>
                </li>
                <li>
                  <a href="">Cook &amp; Hold ovens</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <a href="#" className="img-wrap" style={{ background: "#ddffeb" }}>
              <img src={require("../../assets/images/items/5.jpg")} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Great items</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Combi steamers</a>
                </li>
                <li>
                  <a href="">Cook &amp; Hold ovens</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <a href="#" className="img-wrap" style={{ background: "#dee4ff" }}>
              <img src={require("../../assets/images/items/6.jpg")} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Kitchen furniture</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Combi steamers</a>
                </li>
                <li>
                  <a href="">Cook &amp; Hold ovens</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <a href="#" className="img-wrap" style={{ background: "#ddffeb" }}>
              <img src={require("../../assets/images/items/2.jpg")} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Great items</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Combi steamers</a>
                </li>
                <li>
                  <a href="">Cook &amp; Hold ovens</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-3">
          <div className="card card-category">
            <a href="#" className="img-wrap" style={{ background: "#dee4ff" }}>
              <img src={require("../../assets/images/items/1.jpg")} />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Other clothes</a>
              </h4>
              <ul className="list-menu">
                <li>
                  <a href="">Jeans shorts</a>
                </li>
                <li>
                  <a href="">Cook &amp; Hold ovens</a>
                </li>
                <li>
                  <a href="">Scherf Ice cream</a>
                </li>
                <li>
                  <a href="">Another category</a>
                </li>
                <li>
                  <a href="">Great items name</a>
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
