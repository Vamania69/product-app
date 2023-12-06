"use client";
import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const ISSERVER = typeof window === "undefined";

const initialState = {
  isUserLoggedIn: false,
};


if (!ISSERVER) {
  // check Access token in localStorage
  initialState.isUserLoggedIn = !!window.localStorage.getItem("Token");
  //   console.log("Token", isLoggedIn);
}



export const userLoginSlice = createSlice({
  name: "userLoggedIn",
  initialState: initialState,
  reducers: {
    // login handler
    userLoggedIn: (state, action) => {
      window.localStorage.setItem("Token", action.payload);
      state.isUserLoggedIn = true;
      console.log(state);
    },
    // logout handler
    userLoggedOut: (state) => {
      window.localStorage.removeItem("Token");
      state.isUserLoggedIn = false;
      console.log(state);
    },
  },
});
export const { userLoggedIn, userLoggedOut } = userLoginSlice.actions;
export default userLoginSlice.reducer;
