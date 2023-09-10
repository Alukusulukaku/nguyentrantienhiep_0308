import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import Orders from "./Orders";
import Address from "./Address";
import Wishlist from "./Wishlist";
import Seller from "./Seller";
import Setting from "./Setting";

const Profile = () => (
  <>
    <section className="section-pagetop bg-gray">
      <div className="container">
        <h2 className="title-page">My account</h2>
      </div>{" "}
      {/* container //  */}
    </section>
    <profile>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="orders" element={<Orders />} />
        <Route path="address" element={<Address />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="seller" element={<Seller />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </profile>
  </>
);

export default Profile;
