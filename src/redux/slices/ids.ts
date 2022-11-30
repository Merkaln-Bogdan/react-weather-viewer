import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";
const initialState = {
  ids: ["702550", "703448", "2643743"],
};

export const indeficatorSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setIndeficators(state, action) {
      state.ids = action.payload;
    },
  },
});

export const getState = (rootState: RootState) => rootState.ids;

export const { setIndeficators } = indeficatorSlice.actions;
