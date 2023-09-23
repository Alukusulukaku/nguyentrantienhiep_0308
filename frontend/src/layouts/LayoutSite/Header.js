import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className={`section-header`}>
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-1 col-lg-5 col-md-12 text-center padding-y-sm">
                <Link to="/" className="brand-wrap header--logo">
                  <img
                    className="logo"
                    src={require("../../assets/images/logo.png")}
                    alt=""
                  />
                </Link>
                {/* brand-wrap.// */}
              </div>

              {/* col.// */}
              <div className="col-xl-11 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header mr-3">
                    <Link to="/account/overview" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                        <span className="notify">3</span>
                      </div>
                      <small className="text"> My profile </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header">
                    <Link to="/cart" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <small className="text"> Cart </small>
                    </Link>
                  </div>
                </div>
                {/* widgets-wrap.// */}
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* container.// */}
        </section>
        {/* header-main .// */}
      </header>
      <nav
        className={`navbar navbar-main navbar-expand-lg border-bottom main-menu ${
          sticky ? "position-sticky" : ""
        }`}
      >
        {(() => {
          if (sticky) {
            return (
              <div className="col-xl-1 col-lg-2 col-md-12 text-center m-4 padding-y-sm header--logo">
                <Link to="/" className="brand-wrap">
                  <img
                    className="logo"
                    src={require("../../assets/images/logo.png")}
                    alt=""
                  />
                </Link>
                {/* brand-wrap.// */}
              </div>
            );
          }
        })()}
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="#"
                >
                  Men
                </Link>
                <div className={`dropdown-menu dropdown-large `}>
                  <nav className="row">
                    <div className="col-6">
                      <Link to="page-index-1.html">Home page 1</Link>
                      <Link to="page-index-2.html">Home page 2</Link>
                      <Link to="page-category.html">All category</Link>
                      <Link to="page-listing-large.html">Listing list</Link>
                      <Link to="page-listing-grid.html">Listing grid</Link>
                      <Link to="page-shopping-cart.html">Shopping cart</Link>
                      <Link to="page-detail-product.html">Product detail</Link>
                      <Link to="/content">Page content</Link>
                      <Link to="/login">Page login</Link>
                      <Link to="/register">Page register</Link>
                    </div>
                    <div className="col-6">
                      <Link to="page-profile-main.html">Profile main</Link>
                      <Link to="page-profile-orders.html">Profile orders</Link>
                      <Link to="page-profile-seller.html">Profile seller</Link>
                      <Link to="page-profile-wishlist.html">
                        Profile wishlist
                      </Link>
                      <Link to="page-profile-setting.html">
                        Profile setting
                      </Link>
                      <Link to="page-profile-address.html">
                        Profile address
                      </Link>
                      <Link to="rtl-page-index-1.html">RTL home page</Link>
                      <Link to="page-components.html" target="_blank">
                        More components
                      </Link>
                    </div>
                  </nav>
                  {/*  row end .// */}
                </div>
                {/*  dropdown-menu dropdown-large end.// */}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="#"
                >
                  Women
                </Link>
                <div className={`dropdown-menu dropdown-large `}>
                  <nav className="row">
                    <div className="col-6">
                      <Link to="page-index-1.html">Home page 1</Link>
                      <Link to="page-index-2.html">Home page 2</Link>
                      <Link to="page-category.html">All category</Link>
                      <Link to="page-listing-large.html">Listing list</Link>
                      <Link to="page-listing-grid.html">Listing grid</Link>
                      <Link to="page-shopping-cart.html">Shopping cart</Link>
                      <Link to="page-detail-product.html">Product detail</Link>
                      <Link to="/content">Page content</Link>
                      <Link to="/login">Page login</Link>
                      <Link to="/register">Page register</Link>
                    </div>
                    <div className="col-6">
                      <Link to="page-profile-main.html">Profile main</Link>
                      <Link to="page-profile-orders.html">Profile orders</Link>
                      <Link to="page-profile-seller.html">Profile seller</Link>
                      <Link to="page-profile-wishlist.html">
                        Profile wishlist
                      </Link>
                      <Link to="page-profile-setting.html">
                        Profile setting
                      </Link>
                      <Link to="page-profile-address.html">
                        Profile address
                      </Link>
                      <Link to="rtl-page-index-1.html">RTL home page</Link>
                      <Link to="page-components.html" target="_blank">
                        More components
                      </Link>
                    </div>
                  </nav>
                  {/*  row end .// */}
                </div>
                {/*  dropdown-menu dropdown-large end.// */}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="#"
                >
                  Bags & Gears
                </Link>
                <div className={`dropdown-menu dropdown-large `}>
                  <nav className="row">
                    <div className="col-6">
                      <Link to="page-index-1.html">Home page 1</Link>
                      <Link to="page-index-2.html">Home page 2</Link>
                      <Link to="page-category.html">All category</Link>
                      <Link to="page-listing-large.html">Listing list</Link>
                      <Link to="page-listing-grid.html">Listing grid</Link>
                      <Link to="page-shopping-cart.html">Shopping cart</Link>
                      <Link to="page-detail-product.html">Product detail</Link>
                      <Link to="/content">Page content</Link>
                      <Link to="/login">Page login</Link>
                      <Link to="/register">Page register</Link>
                    </div>
                    <div className="col-6">
                      <Link to="page-profile-main.html">Profile main</Link>
                      <Link to="page-profile-orders.html">Profile orders</Link>
                      <Link to="page-profile-seller.html">Profile seller</Link>
                      <Link to="page-profile-wishlist.html">
                        Profile wishlist
                      </Link>
                      <Link to="page-profile-setting.html">
                        Profile setting
                      </Link>
                      <Link to="page-profile-address.html">
                        Profile address
                      </Link>
                      <Link to="rtl-page-index-1.html">RTL home page</Link>
                      <Link to="page-components.html" target="_blank">
                        More components
                      </Link>
                    </div>
                  </nav>
                  {/*  row end .// */}
                </div>
                {/*  dropdown-menu dropdown-large end.// */}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  to="#"
                >
                  Kids
                </Link>
                <div className={`dropdown-menu dropdown-large `}>
                  <nav className="row">
                    <div className="col-6">
                      <Link to="page-index-1.html">Home page 1</Link>
                      <Link to="page-index-2.html">Home page 2</Link>
                      <Link to="page-category.html">All category</Link>
                      <Link to="page-listing-large.html">Listing list</Link>
                      <Link to="page-listing-grid.html">Listing grid</Link>
                      <Link to="page-shopping-cart.html">Shopping cart</Link>
                      <Link to="page-detail-product.html">Product detail</Link>
                      <Link to="/content">Page content</Link>
                      <Link to="/login">Page login</Link>
                      <Link to="/register">Page register</Link>
                    </div>
                    <div className="col-6">
                      <Link to="page-profile-main.html">Profile main</Link>
                      <Link to="page-profile-orders.html">Profile orders</Link>
                      <Link to="page-profile-seller.html">Profile seller</Link>
                      <Link to="page-profile-wishlist.html">
                        Profile wishlist
                      </Link>
                      <Link to="page-profile-setting.html">
                        Profile setting
                      </Link>
                      <Link to="page-profile-address.html">
                        Profile address
                      </Link>
                      <Link to="rtl-page-index-1.html">RTL home page</Link>
                      <Link to="page-components.html" target="_blank">
                        More components
                      </Link>
                    </div>
                  </nav>
                  {/*  row end .// */}
                </div>
                {/*  dropdown-menu dropdown-large end.// */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-md-auto">
              <li className="nav-item dropdown">
                <div className="col-md-12">
                  <form action="#" className="search-header">
                    <div className="input-group w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="fa fa-search" /> Search
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* search-wrap .end// */}
                </div>
              </li>
            </ul>
            {(() => {
              if (sticky) {
                return (
                  <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item dropdown mt-2">
                      <div className="">
                        <div className="widgets-wrap float-md-right">
                          <div className="widget-header">
                            <Link
                              to="/account/overview"
                              className="widget-view"
                            >
                              <div className="icon-area">
                                <i className="fa fa-user" />
                                <span className="notify">3</span>
                              </div>
                              <small className="text"> My profile </small>
                            </Link>
                          </div>{" "}
                          <div className="widget-header">
                            <Link to="/cart" className="widget-view">
                              <div className="icon-area">
                                <i className="fa fa-shopping-cart" />
                              </div>
                              <small className="text"> Cart </small>
                            </Link>
                          </div>
                        </div>
                        {/* widgets-wrap.// */}
                      </div>
                    </li>
                  </ul>
                );
              }
            })()}
          </div>
          {/* collapse .// */}
        </div>
        {/* container .// */}
      </nav>
    </>
  );
}

export default Header;
