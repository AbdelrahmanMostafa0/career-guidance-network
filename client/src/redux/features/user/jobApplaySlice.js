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
    const formData = new FormData();
    formData.append("cvFile", appData);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/application/apply/${jobId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json", // Specify content type as JSON
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
