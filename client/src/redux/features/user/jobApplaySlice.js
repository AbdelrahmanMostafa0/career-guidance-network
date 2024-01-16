import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  status: "idel",
  error: "",
};

export const applayForJob = createAsyncThunk(
  "jobApplaySlice/applayForJob",
  async ({ appData, jobId }) => {
    console.log(appData);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/application/apply/${jobId}/`,
        appData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
const jobApplaSlice = createSlice({
  name: "jobApplaySlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(applayForJob.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(applayForJob.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(applayForJob.rejected, (state, action) => {
        state.status = "faild";
      });
  },
});

export default jobApplaSlice.reducer;
