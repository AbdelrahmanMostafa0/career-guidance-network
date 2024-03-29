import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getUserData = createAsyncThunk(
  "userData/getUserData",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profile/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);
export const getCompanyData = createAsyncThunk(
  "userData/getCompanyData",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/company/profile/`,
        {
          headers: {
            auth: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userData = null;
      localStorage.removeItem("token");

      localStorage.removeItem("isCompany");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action);
        state.userData = action.payload;
        state.userData.isCompany = false;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getCompanyData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCompanyData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // console.log(action);
        state.userData = action.payload;
        state.userData.isCompany = true;
      })
      .addCase(getCompanyData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default userDataSlice.reducer;
export const { logoutUser } = userDataSlice.actions;
