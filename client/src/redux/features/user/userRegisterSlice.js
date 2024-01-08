import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  token: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
};
export const userRegister = createAsyncThunk(
  "register/userRegister",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/register/",
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

const registerSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userRegister.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default registerSlice.reducer;
