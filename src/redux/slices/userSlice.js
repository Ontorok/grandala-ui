/**
 * Title: cart redux
 * Description: cart redux
 * Author: Nasir Ahmed
 * Date: 26-November-2021
 * Modified: 26-November-2021
 **/

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFatching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFatching = true;
    },
    loginSuccess: (state, action) => {
      state.isFatching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFatching = false;
      state.error = true;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
