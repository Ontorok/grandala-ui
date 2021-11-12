import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductDetails from "./pages/ProductDetail/ProductDetails";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Layout from "./parts/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/shopping-cart-ui" />} />
        <Route path="/shopping-cart-ui" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/product-detail/:productName"
          element={<ProductDetails />}
        />
      </Routes>
    </Layout>
  );
}
