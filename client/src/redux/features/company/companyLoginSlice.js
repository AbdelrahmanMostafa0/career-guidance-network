import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
};
export const CompanyLogin = createAsyncThunk(
  "companyLogin/companyLogin",
  async (companyData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/company/login/",
        companyData,
        {
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("isCompany", true);
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);
const companyLoginSlice = createSlice({
  name: "companyLogin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CompanyLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(CompanyLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(CompanyLogin.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default companyLoginSlice.reducer;
