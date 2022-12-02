import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { weatherDataService } from "services/services";

import { CityType } from "types";

export const getCity = createAsyncThunk(
  "city/getCity",
  async (id: string, thunkApi) => {
    try {
      const response = await weatherDataService.getCity(id);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

interface CityState {
  loading: boolean;
  error: string | null;
  city: CityType;
}

const initialState = {
  loading: true,
  error: null,
  city: {},
} as CityState;

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCity.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCity.fulfilled, (state, action: PayloadAction<CityType>) => {
        state.loading = false;
        state.city = action.payload;
      })
      .addCase(getCity.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export default citySlice.reducer;
