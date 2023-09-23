import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="section-footer bg-primary">
      <div className="container">
        <section className="footer-top padding-y-lg text-white">
          <div className="row">
            <aside className="col-md col-6">
              <h6 className="title">Brands</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Adidas</Link>
                </li>
                <li>
                  <Link to="#">Puma</Link>
                </li>
                <li>
                  <Link to="#">Reebok</Link>
                </li>
                <li>
                  <Link to="#">Nike</Link>
                </li>
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Rules and terms</Link>
                </li>
              </ul>
            </aside>

            <aside className="col-md col-6">
              <h6 className="title">Account</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#"> User Login </Link>
                </li>
                <li>
                  <Link to="#"> User register </Link>
                </li>
                <li>
                  <Link to="#"> Account Setting </Link>
                </li>
                <li>
                  <Link to="#"> My Orders </Link>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Social</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram" /> Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" /> Youtube
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          {/* row.// */}
        </section>
        {/* footer-top.// */}
        <section className="footer-bottom text-center">
          <p className="text-white">
            Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
          </p>
          <p className="text-muted">
            © 2023 Nguyen Tran Tien Hiep, All rights reserved
          </p>
          <br />
        </section>
      </div>
      {/* //container */}
    </footer>
  );
}

export default Footer;
