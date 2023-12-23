import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  token: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
};
export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/login/",
        userData,
        {
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isAuth", true);
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);
const loginSlice = createSlice({
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
      .addCase(userLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default loginSlice.reducer;
