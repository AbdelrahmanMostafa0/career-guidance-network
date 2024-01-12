import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getExp: {
    exps: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addExp: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  editExp: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteExp: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

// ---------------------------------------------------------------
export const getExp = createAsyncThunk("userExp/getExp", async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/experience/user/`,
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
});

// ---------------------------------------------------------------

export const addExp = createAsyncThunk("userExp/addExp", async (expData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/experience/add/`,
      expData,
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
});

// ---------------------------------------------------------------

export const editExp = createAsyncThunk(
  "userExp/editExp",
  async ({ expData, expId }) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/experience/edit/${expId}/`,
        expData,
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

// ---------------------------------------------------------------

export const deleteExp = createAsyncThunk(
  "userExp/deleteExp",
  async (expId) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/experience/delete/${expId}/`,
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

const experienceSlice = createSlice({
  name: "userExp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExp.pending, (state, action) => {
        state.getExp.status = "loading";
      })
      .addCase(getExp.fulfilled, (state, action) => {
        state.getExp.exps = action.payload;
        state.getExp.status = "succeeded";
      })
      .addCase(getExp.rejected, (state, action) => {
        state.getExp.error = action.payload;
        state.getExp.status = "faild";
      })
      .addCase(addExp.pending, (state, action) => {
        state.addExp.status = "loading";
      })
      .addCase(addExp.fulfilled, (state, action) => {
        state.addExp.status = "succeeded";
      })
      .addCase(addExp.rejected, (state, action) => {
        state.addExp.error = action.payload;
        state.addExp.status = "faild";
      })
      .addCase(editExp.pending, (state, action) => {
        state.editExp.status = "loading";
      })
      .addCase(editExp.fulfilled, (state, action) => {
        state.editExp.status = "succeeded";
      })
      .addCase(editExp.rejected, (state, action) => {
        state.editExp.error = action.payload;
        state.editExp.status = "faild";
      })
      .addCase(deleteExp.pending, (state, action) => {
        state.deleteExp.status = "loading";
      })
      .addCase(deleteExp.fulfilled, (state, action) => {
        state.deleteExp.status = "succeeded";
      })
      .addCase(deleteExp.rejected, (state, action) => {
        state.deleteExp.error = action.payload;
        state.deleteExp.status = "faild";
      });
  },
});

export default experienceSlice.reducer;
