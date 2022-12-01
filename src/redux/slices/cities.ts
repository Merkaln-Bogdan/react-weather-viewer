import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import type { RootState } from "../store";
const initialState = {
  cities: [],
  loading: false,
};

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
  },
});

export const getState = (rootState: RootState) => rootState.city;

export const citiesSelector = citiesAdapter.getSelectors(
  (state: RootState) => state.city
);

export const { setAllCities } = citiesSlice.actions;
