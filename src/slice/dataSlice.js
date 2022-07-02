import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  section: {}
};

// Store all movies and all section info
export const data = createSlice({
  name: "movies-data",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movies = action.payload.movies;
    },
    clearMovie: (state, action) => {
      state.movies = [];
    },
    setSection: (state, action) => {
      state.section = action.payload.section;
    },
    clearSection: (state, action) => {
      state.section = [];
    },
  },
});

export const { setMovie, clearMovie, setSection, clearSection } = data.actions;
export default data.reducer;
