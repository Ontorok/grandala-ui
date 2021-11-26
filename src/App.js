/**
 * Title: Root file
 * Description: Root file
 * Author: Nasir Ahmed
 * Date: 27-November-2021
 * Modified: 27-November-2021
 **/

import Cart from "pages/Cart/Cart";
import Failure from "pages/Failure/Failure";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import ProductDetails from "pages/ProductDetail/ProductDetails";
import ProductList from "pages/ProductList/ProductList";
import Register from "pages/Register/Register";
import Success from "pages/Success/Success";
import Layout from "parts/Layout/Layout";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const { currentUser } = useSelector(({ user }) => user);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/shopping-cart-ui" />} />
        <Route path="/shopping-cart-ui" element={<Home />} />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </Layout>
  );
}

/** Change Log
 * 27-Nov-2021 : User logged in
 **/
