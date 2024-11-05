import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import categoryReducer from "./categorySlice";

const appStore = configureStore({
  reducer: {
    config: configReducer,
    category: categoryReducer,
  },
});

export default appStore;
