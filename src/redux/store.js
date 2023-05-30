import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import filter from "./slices/filterSlice";
import project from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    project,
    filter,
    cart,
  },
});
