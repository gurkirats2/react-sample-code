import { configureStore } from "@reduxjs/toolkit";
import { GenericApi } from "../http-handler/generic-api";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./slices/auth-slice";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [GenericApi.reducerPath]: GenericApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GenericApi.middleware),
  devTools: true,
});

export type StoreModel = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

export default store;
