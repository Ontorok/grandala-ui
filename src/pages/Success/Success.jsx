/**
 * Title: Success
 * Description: Reach this page when payment successfull
 * Author: Nasir Ahmed
 * Date: 26-November-2021
 * Modified: 26-November-2021
 **/

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userRequest } from "services/config";

const Success = () => {
  const { productData, stripeData } = useLocation().state;

  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const data = {
      userId: "User 101",
      products: productData.products.map((product) => ({
        productId: product._id,
        quantity: product.quantity
      })),

      amount: productData.total,
      address: stripeData.billing_details
    };
    console.log(JSON.stringify(data, null, 2));
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/order", data);
        setOrderId(res.data.data._id);
      } catch (err) {}
    };
    productData && createOrder();
  }, [productData, stripeData.billing_details]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
    </div>
  );
};

export default Success;

/** Change Log
 * 26-Nov-2021 : Order placed
 **/
