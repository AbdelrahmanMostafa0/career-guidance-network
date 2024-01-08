import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  skillsData: {
    skills: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  addSkills: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteSkill: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};
export const getSkills = createAsyncThunk("skillsSlice/getSkills", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/skill/list-all/");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
export const addSkills = createAsyncThunk(
  "skillsSlice/addSkills",
  async (skills) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/add-bulk-skills/",
        skills,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "application/json", // Specify content type as JSON
          },
        }
      );
    } catch (error) {
      throw error.response;
    }
  }
);
export const deleteSkill = createAsyncThunk(
  "skillsSlice/deleteSkill",
  async (skillId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/user/delete-skill/${skillId}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data; // You might want to return some data if needed
    } catch (error) {
      throw error.response.data;
    }
  }
);

const SkillsSlice = createSlice({
  name: "skillsSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSkills.pending, (state, action) => {
        state.skillsData.status = "pending";
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.skillsData.status = "succeeded";
        state.skillsData.skills = action.payload;
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.skillsData.error = action.payload;
        state.skillsData.status = "failed";
      })
      .addCase(addSkills.pending, (state, action) => {
        state.addSkills.status = "pending";
      })
      .addCase(addSkills.fulfilled, (state, action) => {
        state.addSkills.status = "succeeded";
      })
      .addCase(addSkills.rejected, (state, action) => {
        state.addSkills.status = "failed";
      })
      .addCase(deleteSkill.pending, (state, action) => {
        state.deleteSkill.status = "pending";
      })
      .addCase(deleteSkill.fulfilled, (state, action) => {
        state.deleteSkill.status = "succeeded";
      })
      .addCase(deleteSkill.rejected, (state, action) => {
        state.deleteSkill.status = "failed";
      });
  },
});

export default SkillsSlice.reducer;
