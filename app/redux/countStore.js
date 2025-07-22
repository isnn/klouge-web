import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./hay/counterSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export default store;
