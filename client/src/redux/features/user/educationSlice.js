import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getEducation: {
    education: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addEducation: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  editEducation: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteEducation: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getEducation = createAsyncThunk(
  "educationSlice/getEducation",
  async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/education/user/",
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
export const addEducation = createAsyncThunk(
  "educationSlice/addEducation",
  async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/education/add/",
        data,
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
export const editEducation = createAsyncThunk(
  "educationSlice/editEducation",
  async ({ educationData, educationId }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/education/edit/${educationId}/`,
        educationData,
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
export const deleteEducation = createAsyncThunk(
  "educationSlice/deleteEducation",
  async (educationId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/education/delete/${educationId}/`,
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

const educationSlice = createSlice({
  name: "educationSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getEducation.pending, (state, action) => {
        state.getEducation.status = "loading";
      })
      .addCase(getEducation.fulfilled, (state, action) => {
        state.getEducation.education = action.payload;
        state.getEducation.status = "succeeded";
      })
      .addCase(getEducation.rejected, (state, action) => {
        state.getEducation.error = action.payload;
        state.getEducation.status = "faild";
      })
      .addCase(addEducation.pending, (state, action) => {
        state.addEducation.status = "loading";
      })
      .addCase(addEducation.fulfilled, (state, action) => {
        state.addEducation.status = "succeeded";
      })
      .addCase(addEducation.rejected, (state, action) => {
        state.addEducation.error = action.payload;
        state.addEducation.status = "faild";
      })
      .addCase(editEducation.pending, (state, action) => {
        state.editEducation.status = "loading";
      })
      .addCase(editEducation.fulfilled, (state, action) => {
        state.editEducation.status = "succeeded";
      })
      .addCase(editEducation.rejected, (state, action) => {
        state.editEducation.error = action.payload;
        state.editEducation.status = "faild";
      })
      .addCase(deleteEducation.pending, (state, action) => {
        state.deleteEducation.status = "loading";
      })
      .addCase(deleteEducation.fulfilled, (state, action) => {
        state.deleteEducation.status = "succeeded";
      })
      .addCase(deleteEducation.rejected, (state, action) => {
        state.deleteEducation.error = action.payload;
        state.deleteEducation.status = "faild";
      });
  },
});

export default educationSlice.reducer;
