import React from "react";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import Newsletter from "../components/Common/Newsletter";
import Categories from "../components/Home/Categories";
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
