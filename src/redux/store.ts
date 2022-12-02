import { configureStore } from "@reduxjs/toolkit";

import citiesSlice from "./slices/cities";
import citySlice from "./slices/city";

const store = configureStore({
  reducer: { citiesSlice, citySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
