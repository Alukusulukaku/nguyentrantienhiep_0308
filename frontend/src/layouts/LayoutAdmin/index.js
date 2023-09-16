import { Outlet } from "react-router-dom";
import Header from "../LayoutSite/Header";
import Footer from "../LayoutSite/Footer";

function LayoutAdmin() {
  return (
    <>
      <Header />
      <section className="maincontent">
        <div className="container-fluid" style={{ paddingBottom: 10 }}>
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LayoutAdmin;
