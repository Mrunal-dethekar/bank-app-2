import { configureStore } from "@reduxjs/toolkit";

import accountingReducer from "./slices/accountingSlice";

export const store = configureStore({
  reducer: {
    accounting: accountingReducer,
  },
});
