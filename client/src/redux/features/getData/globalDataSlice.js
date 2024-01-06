import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  universities: {
    uni: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getUniversityList = createAsyncThunk(
  "globalData/getUniversityLis",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/university/list-all/"
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
      });
  },
});

export default globalDataSlice.reducer;
