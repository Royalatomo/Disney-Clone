import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  fullName: "",
  email: "",
  photo: "",
  active: false
};

// Store user logged-in user info
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.active = true;
    },
    logoutUser: (state, action) => {
      state.firstName = "";
      state.fullName = "";
      state.email = "";
      state.photo = "";
      state.active = false;
    }
  },
});

export const { setUserDetails, logoutUser } = userSlice.actions;
export default userSlice.reducer;
