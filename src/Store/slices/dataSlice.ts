import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../Types/Data.type";
import itemMove from "../../Utils/itemMove";
import { RootState } from "../index";

interface gameState {
  data: Array<IData> | undefined;
}

const initialState: gameState = {
  data: undefined,
};

export const dataSlice = createSlice({
  name: "userSlica",
  initialState,
  reducers: {
    setData: (state, action: { payload: IData[] }) => {
      state.data = action.payload;
    },
    addData: (state, action: { payload: IData }) => {
      state.data = state.data
        ? [...state.data, { ...action.payload }]
        : [{ ...action.payload }];
    },
    deleteData: (state, action: { payload: string }) => {
      state.data =
        state.data && state.data.filter((item) => item.id !== action.payload);
    },
    moveUp: (state, action: { payload: any }) => {
      state.data = state.data && itemMove(state.data, action);
    },
    moveDown: (state, action: { payload: any }) => {
      state.data = state.data && itemMove(state.data, action, true);
    },
  },
});

export const { setData, addData, deleteData, moveUp, moveDown } =
  dataSlice.actions;

export const userState = (state: RootState) => state.dataSlice;

export default dataSlice.reducer;
