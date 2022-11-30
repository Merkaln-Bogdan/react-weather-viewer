import { configureStore } from "@reduxjs/toolkit";

import { citiesSlice } from "./slices/cities";
import { indeficatorSlice } from "./slices/ids";

const store = configureStore({
  reducer: {
    city: citiesSlice.reducer,
    ids: indeficatorSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
