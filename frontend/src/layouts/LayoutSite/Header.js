import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuservice from "../../services/MenuService";
import Submenu from "../../components/frontend/Submenu";
function Header() {
  const [sticky, setSticky] = useState(false);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await menuservice.getMenus();
        setMenus(result.data.data);
      }
      fetchItems();
    }, 100);
    return () => clearTimeout(delayDebounceFn);
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
              {menus.map((item, index) => {
                if (item.parent_id === 0 && item.children.length !== 0) {
                  return (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                      <div className={`dropdown-menu dropdown-large `}>
                        <div className="row bg-white rounded-0 m-0 shadow-sm">
                          <div className="col-lg-7 col-xl-8">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-12 d-flex flex-wrap mb-4">
                                  <ul className="list-unstyled">
                                    <Submenu children={item.children} />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*  row end .// */}
                      </div>
                      {/*  dropdown-menu dropdown-large end.// */}
                    </li>
                  );
                } else if (item.parent_id === 0 && item.children.length === 0) {
                  return (
                    <li className="nav-item">
                      <Link
                        to={item.path}
                        className="nav-link text-small pb-0 "
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                } else {
                  return "";
                }
              })}
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
