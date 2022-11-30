import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const citiesAdapter = createEntityAdapter({
  selectId: (city: any) => city.id,
});

export const citiesSlice = createSlice({
  name: "cities",
  initialState: citiesAdapter.getInitialState(),
  reducers: {
    setAllCities(state, action) {
      citiesAdapter.setAll(state, action.payload);
    },
    setCity(state, action) {
      citiesAdapter.setOne(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.city;

export const citiesSelector = citiesAdapter.getSelectors(
  (state: RootState) => state.city
);

export const { setAllCities, setCity } = citiesSlice.actions;
