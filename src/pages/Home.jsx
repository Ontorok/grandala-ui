import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import Newsletter from "../components/Common/Newsletter";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import Slider from "../components/Home/Slider";
import Cart from "./Cart";
import Login from "./Login";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import Register from "./Register";

const Home = () => (
  <div>
    <Announcement />
    <Navbar />
    <Outlet />

    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
          </Fragment>
        }
      />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product-list" element={<ProductList />} />
      <Route path="product-detail" element={<ProductDetails />} />
    </Routes>
  </div>
);

export default Home;
