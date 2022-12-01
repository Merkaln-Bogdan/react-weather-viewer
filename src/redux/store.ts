import { configureStore } from "@reduxjs/toolkit";

import { citiesSlice } from "./slices/cities";

const store = configureStore({
  reducer: {
    city: citiesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
