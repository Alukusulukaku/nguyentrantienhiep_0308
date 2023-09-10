import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "../pages/product/Detail";
import Profile from "../pages/profile/Profile";
import Overview from "../pages/profile/Overview";
import Orders from "../pages/profile/Orders";
import Cart from "../pages/cart/Cart";
import Address from "../pages/profile/Address";
import Wishlist from "../pages/profile/Wishlist";
import Seller from "../pages/profile/Seller";
import Setting from "../pages/profile/Setting";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import Category from "../pages/category/Category";
import CategoryListView from "../pages/category/CategoryListView";
import CategoryGridView from "../pages/category/CategoryGridView";
import Content from "../pages/Content";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product-detail/:id" element={<Detail />} />
      <Route path="account" element={<Profile />}>
        <Route path="overview" element={<Overview />} />
        <Route path="orders" element={<Orders />} />
        <Route path="address" element={<Address />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="seller" element={<Seller />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="category" element={<Category />} />
      <Route path="category/list" element={<CategoryListView />} />
      <Route path="category/grid" element={<CategoryGridView />} />
      <Route path="content" element={<Content />} />
    </Routes>
  </main>
);
export default Main;
