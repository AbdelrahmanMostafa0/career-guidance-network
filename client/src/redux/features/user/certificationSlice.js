import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getCertification: {
    certifications: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addCertification: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  editCertification: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteCertification: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getCertification = createAsyncThunk(
  "certificationSlice/getCertification",
  async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/certification/user/",
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
export const addCertification = createAsyncThunk(
  "certificationSlice/addCertification",
  async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/certification/add/",
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
export const editCertification = createAsyncThunk(
  "certificationSlice/editCertification",
  async ({ certificationData, certificationId }) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/certification/edit/${certificationId}/`,
        certificationData,
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
export const deleteCertification = createAsyncThunk(
  "certificationSlice/deleteCertification",
  async (certificationId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/certification/delete/${certificationId}/`,
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

const certificationSlice = createSlice({
  name: "certificationSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCertification.pending, (state, action) => {
        state.getCertification.status = "loading";
      })
      .addCase(getCertification.fulfilled, (state, action) => {
        state.getCertification.certifications = action.payload;
        state.getCertification.status = "succeeded";
      })
      .addCase(getCertification.rejected, (state, action) => {
        state.getCertification.error = action.payload;
        state.getCertification.status = "faild";
      })
      .addCase(addCertification.pending, (state, action) => {
        state.addCertification.status = "loading";
      })
      .addCase(addCertification.fulfilled, (state, action) => {
        state.addCertification.status = "succeeded";
      })
      .addCase(addCertification.rejected, (state, action) => {
        state.addCertification.error = action.payload;
        state.addCertification.status = "faild";
      })
      .addCase(editCertification.pending, (state, action) => {
        state.editCertification.status = "loading";
      })
      .addCase(editCertification.fulfilled, (state, action) => {
        state.editCertification.status = "succeeded";
      })
      .addCase(editCertification.rejected, (state, action) => {
        state.editCertification.error = action.payload;
        state.editCertification.status = "faild";
      })
      .addCase(deleteCertification.pending, (state, action) => {
        state.deleteCertification.status = "loading";
      })
      .addCase(deleteCertification.fulfilled, (state, action) => {
        state.deleteCertification.status = "succeeded";
      })
      .addCase(deleteCertification.rejected, (state, action) => {
        state.deleteCertification.error = action.payload;
        state.deleteCertification.status = "faild";
      });
  },
});

export default certificationSlice.reducer;
