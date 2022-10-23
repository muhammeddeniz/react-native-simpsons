import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

import dataSlice from "./slices/dataSlice";
import appSlice from "./slices/appSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const slices = combineReducers({
  dataSlice,
  appSlice,
});

const persistedReducer = persistReducer(persistConfig, slices);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
