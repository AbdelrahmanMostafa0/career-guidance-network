import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getJobs: {
    jobs: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addJob: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  editJob: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteJob: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  toggleCanApplay: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getJobs = createAsyncThunk(
  "companyJobsSlice/getJobs",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/company/jobs/`,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
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
export const addJob = createAsyncThunk(
  "companyJobsSlice/addJob",
  async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/job/add/`,
        data,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
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
export const editJob = createAsyncThunk(
  "companyJobsSlice/editJob",
  async ({ jobData, jobId }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/job/edit/${jobId}/`,
        jobData,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
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
export const deleteJob = createAsyncThunk(
  "companyJobsSlice/deleteJob",
  async (jobId) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/job/delete/${jobId}/`,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
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
export const toggleCanApplay = createAsyncThunk(
  "companyJobsSlice/toggleCanApplay",
  async (jobId) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/job/change_can_apply/${jobId}/`,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
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

const companyJobsSlice = createSlice({
  name: "companyJobsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJobs.pending, (state, action) => {
        state.getJobs.status = "loading";
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.getJobs.jobs = action.payload;
        state.getJobs.status = "succeeded";
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.getJobs.error = action.payload;
        state.getJobs.status = "faild";
      })
      .addCase(addJob.pending, (state, action) => {
        state.addJob.status = "loading";
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.addJob.status = "succeeded";
      })
      .addCase(addJob.rejected, (state, action) => {
        state.addJob.error = action.payload;
        state.addJob.status = "faild";
      })
      .addCase(editJob.pending, (state, action) => {
        state.editJob.status = "loading";
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.editJob.status = "succeeded";
      })
      .addCase(editJob.rejected, (state, action) => {
        state.editJob.error = action.payload;
        state.editJob.status = "faild";
      })
      .addCase(deleteJob.pending, (state, action) => {
        state.deleteJob.status = "loading";
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.deleteJob.status = "succeeded";
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.deleteJob.error = action.payload;
        state.deleteJob.status = "faild";
      });
  },
});

export default companyJobsSlice.reducer;
