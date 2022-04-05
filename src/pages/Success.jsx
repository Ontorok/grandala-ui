import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { resetCart } from "../redux/cartRedux";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const orderPayload = location.state.orderPayload;

  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", orderPayload);
        setOrderId(res.data._id);
        dispatch(resetCart());
      } catch {}
    };
    orderPayload && !orderId && createOrder();
  }, [orderPayload, orderId, dispatch]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button
        style={{ padding: 10, marginTop: 20 }}
        onClick={() => history.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
