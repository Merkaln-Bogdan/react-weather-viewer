import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { weatherDataService } from "services/services";
import { CityType } from "types";

export const getCities = createAsyncThunk(
  "cities/getCities",
  async (ids: object, thunkApi) => {
    try {
      const response = await weatherDataService.getAllCities(ids);
      return response.data.list;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface CitiesState {
  loading: boolean;
  error: string | null;
  cities: CityType[] | null;
}

const initialState = {
  loading: false,
  error: null,
  cities: [],
} as CitiesState;

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCities.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getCities.fulfilled,
        (state, action: PayloadAction<CityType[]>) => {
          state.loading = false;
          state.cities = action.payload;
        }
      )
      .addCase(getCities.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export default citiesSlice.reducer;
