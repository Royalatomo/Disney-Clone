import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../slice/userSlice";
import dataSliceReducer from "../slice/dataSlice";

// Setting store with slices...
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    data: dataSliceReducer,
  },
});
