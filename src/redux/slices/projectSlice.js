import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProject = createAsyncThunk(
  "project/fetchProjectStatus",
  async () => {
    const { data } = await axios.get(
      `https://63fb029b7a045e192b6151ab.mockapi.io/projects`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProject.pending]: state => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProject.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchProject.rejected]: state => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = projectSlice.actions;

export default projectSlice.reducer;
