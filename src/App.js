import { Navigate, Route, Routes } from "react-router-dom";
import Announcement from "./components/Common/Announcement";
import Navbar from "./components/Common/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-detail/:productName" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
