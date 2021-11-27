/**
 * Title: Application State
 * Description: Global Application State
 * Author: Nasir Ahmed
 * Date: 24-November-2021
 * Modified: 27-November-2021
 **/

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "redux/slices/cartSlice";
import userSlice from "redux/slices/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const rootReducer = combineReducers({ user: userSlice, cart: cartSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

/** Change Log
 * 26-Nov-2021 : add userSlice
 * 27-Nov-2021 : persist current info and cart
 **/
