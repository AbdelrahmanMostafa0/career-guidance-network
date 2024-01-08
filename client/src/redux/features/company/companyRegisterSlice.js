import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
};
export const companyRegister = createAsyncThunk(
  "companyRegister/companyRegister",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/company/register/",
        userData,
        {
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
    } catch (error) {
      throw error.response.data;
    }
  }
);

const companyRegisterSlice = createSlice({
  name: "companyRegister",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(companyRegister.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(companyRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(companyRegister.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default companyRegisterSlice.reducer;
