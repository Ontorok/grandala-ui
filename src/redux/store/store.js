/**
 * Title: Application State
 * Description: Global Application State
 * Author: Nasir Ahmed
 * Date: 24-November-2021
 * Modified: 26-November-2021
 **/

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "redux/slices/userSlice";
import cartSlice from "../slices/cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice
  }
});

/** Change Log
 * 26-Nov-2021 : add userSlice
 **/
