import { Outlet } from "react-router-dom";
import Header from "../LayoutAdmin/Header";
import Footer from "../LayoutAdmin/Footer";
import "../../assets/backend/css/styles.css";
import "../../assets/css/test.css";

function LayoutAdmin() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutAdmin;
