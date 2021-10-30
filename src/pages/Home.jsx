import React from "react";
import Announcement from "../components/Home/Announcement";
import Categories from "../components/Home/Categories";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";
import Products from "../components/Home/Products";
import Slider from "../components/Home/Slider";

const Home = () => (
  <div>
    <Announcement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
  </div>
);

export default Home;
