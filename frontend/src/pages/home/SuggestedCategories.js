import React from "react";
const SuggestedCategories = () => (
  <div className="container">
    <section className="padding-bottom">
      <div className="row no-gutters">
        {/* col.// */}{" "}
        <div class="col-md-12 category">
          <div
            class="home-category-banner bg-light-orange text-white"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/sm_banner_kanken.jpg"
              })`,
              backgroundSize: "cover",
            }}
          >
            <h5 class="title">Best trending clothes only for summer</h5>
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <a href="../../assets/images/" class="btn btn-primary rounded-pill">
              Source now
            </a>
          </div>
        </div>
        {/* col.// */}
        {/* row.// */}
      </div>{" "}
      {/* card.// */}
    </section>
  </div>
);
export default SuggestedCategories;
