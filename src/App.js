import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/shopping-cart-ui" />} />
        <Route path="/shopping-cart-ui/*" element={<Home />} />
      </Routes>

    </div>
  );
}
