import React from "react";
import Footer from "../components/Common/Footer";
import Newsletter from "../components/Common/Newsletter";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import Slider from "../components/Home/Slider";

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
