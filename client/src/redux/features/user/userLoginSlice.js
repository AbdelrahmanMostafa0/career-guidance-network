import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login/`,
        userData,
        {
          headers: {
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("isCompany", false);

      return response.data; // Return the response data on success
    } catch (error) {
      // Use rejectWithValue to set the error payload in the rejected action
      return rejectWithValue(
        error.response ? error.response.data : "Network error"
      );
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
        state.error = null; // Reset the error state when starting the request
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null; // Reset the error state on success
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error.non_field_errors[0]; // Set the error in the state
        console.log(action.payload);
      });
  },
});

export default loginSlice.reducer;
