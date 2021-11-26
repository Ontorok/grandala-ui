/**
 * Title: Action Creators for user
 * Description: Action Creators for user
 * Author: Nasir Ahmed
 * Date: 26-November-2021
 * Modified: 26-November-2021
 **/

import { loginFailure, loginStart, loginSuccess } from "redux/slices/userSlice";
import { publicRequest } from "services/config";

export const login = async (reqBody, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", reqBody);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
