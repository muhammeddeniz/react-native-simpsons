import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface gameState {
  theme: "dark" | "light";
}

const initialState: gameState = {
  theme: "dark",
};

export const appSlice = createSlice({
  name: "userSlica",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { changeTheme } = appSlice.actions;

export const userState = (state: RootState) => state.appSlice;

export default appSlice.reducer;
