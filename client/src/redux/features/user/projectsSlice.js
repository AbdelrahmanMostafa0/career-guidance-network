import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userProjects: {
    projects: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addProject: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  editProject: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteProject: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};
// ---------------------------------------------------------------
export const getProjects = createAsyncThunk(
  "userProjects/getProjects",
  async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/project/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json", // Specify content type as JSON
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// ---------------------------------------------------------------

export const addProject = createAsyncThunk(
  "userProjects/addProject",
  async (projectData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/project/add/",
        projectData,
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

export const editProject = createAsyncThunk(
  "userProjects/editProject",
  async ({ projectData, projectId }, thunkAPI) => {
    console.log("project id", projectId);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/project/edit/${projectId}/`,
        projectData,
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

export const deleteProject = createAsyncThunk(
  "userProjects/deleteProject",
  async (projectId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/project/delete/${projectId}/`,
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

const projectsSlice = createSlice({
  name: "userProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.userProjects.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.userProjects.projects = action.payload;
        state.userProjects.status = "succeeded";
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.userProjects.error = action.payload;
        state.userProjects.status = "faild";
      })
      .addCase(addProject.pending, (state, action) => {
        state.addProject.status = "loading";
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.addProject.status = "succeeded";
      })
      .addCase(addProject.rejected, (state, action) => {
        state.addProject.error = action.payload;
        state.addProject.status = "faild";
      })
      .addCase(editProject.pending, (state, action) => {
        state.editProject.status = "loading";
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.editProject.status = "succeeded";
      })
      .addCase(editProject.rejected, (state, action) => {
        state.editProject.error = action.payload;
        state.editProject.status = "faild";
      })
      .addCase(deleteProject.pending, (state, action) => {
        state.deleteProject.status = "loading";
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.deleteProject.status = "succeeded";
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.deleteProject.error = action.payload;
        state.deleteProject.status = "faild";
      });
  },
});

export default projectsSlice.reducer;
