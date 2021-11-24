/**
 * Title: Application State
 * Description: Global Application State
 * Author: Nasir Ahmed
 * Date: 24-November-2021
 * Modified: 24-November-2021
 **/

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartReducer
  }
});
