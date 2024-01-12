import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  universities: {
    uni: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  titles: {
    titlesList: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  cities: {
    citiesList: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getUniversityList = createAsyncThunk(
  "globalData/getUniversityLis",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/university/list-all/`
      );
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }
);
export const getTitlesList = createAsyncThunk(
  "globalData/getTitlesList",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/title/list-all/`
      );
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }
);
export const getCitiesList = createAsyncThunk(
  "globalData/getCitiesList",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/city/list-all/`
      );
      return response.data;
    } catch (error) {
      throw error.response;
    }
  }
);

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUniversityList.pending, (state, action) => {
        state.universities.status = "pending";
      })
      .addCase(getUniversityList.fulfilled, (state, action) => {
        state.universities.status = "succeeded";
        state.universities.uni = action.payload;
      })
      .addCase(getUniversityList.rejected, (state, action) => {
        state.universities.status = "faild";
        state.universities.error = action.payload;
      })
      .addCase(getTitlesList.pending, (state, action) => {
        state.titles.status = "pending";
      })
      .addCase(getTitlesList.fulfilled, (state, action) => {
        state.titles.status = "succeeded";
        state.titles.titlesList = action.payload;
      })
      .addCase(getTitlesList.rejected, (state, action) => {
        state.titles.status = "faild";
        state.titles.error = action.payload;
      })
      .addCase(getCitiesList.pending, (state, action) => {
        state.cities.status = "pending";
      })
      .addCase(getCitiesList.fulfilled, (state, action) => {
        state.cities.status = "succeeded";
        state.cities.citiesList = action.payload;
      })
      .addCase(getCitiesList.rejected, (state, action) => {
        state.cities.status = "faild";
        state.cities.error = action.payload;
      });
  },
});

export default globalDataSlice.reducer;
