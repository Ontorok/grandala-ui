import Categories from "parts/Category/Categories/Categories";
import Footer from "parts/Footer/Footer";
import Newsletter from "parts/Newsletter/Newsletter";
import Products from "parts/Product/Products/Products";
import Slider from "parts/Slider/Slider";
import React from "react";

const Home = () => (
  <div>
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
  </div>
);

export default Home;