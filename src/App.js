import Cart from "pages/Cart/Cart";
import Failure from "pages/Failure/Failure";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import ProductDetails from "pages/ProductDetail/ProductDetails";
import ProductList from "pages/ProductList/ProductList";
import Register from "pages/Register/Register";
import Success from "pages/Success/Success";
import Layout from "parts/Layout/Layout";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/shopping-cart-ui" />} />
        <Route path="/shopping-cart-ui" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product-detail/:id" element={<ProductDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </Layout>
  );
}
