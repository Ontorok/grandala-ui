/**
 * Title: cart redux
 * Description: cart redux
 * Author: Nasir Ahmed
 * Date: 24-November-2021
 * Modified: 24-November-2021
 **/

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;

      state.quantity += 1;
      state.products = state.products.concat({ ...payload });
      state.total += payload.price * payload.quantity;
    }
  }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
