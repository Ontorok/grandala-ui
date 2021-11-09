import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/shopping-cart-ui" />} />
        <Route path="/shopping-cart-ui/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetails />} />

        {/* <Route path="/shopping-cart-ui/" element={<Home />}>
          <Route path="register" element={<Register />} />
        </Route> */}
      </Routes>
    </div>
  );
}
