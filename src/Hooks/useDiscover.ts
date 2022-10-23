import React from "react";
import { IData } from "../Types/Data.type";
import { useAppSelector } from "./useStore";

const useDiscover = () => {
  const { dataSlice } = useAppSelector((state) => state);

  const shuffled: Array<IData> | undefined =
    dataSlice.data && dataSlice.data.sort(() => 0.5 - Math.random());

  if (!shuffled) return dataSlice.data;
  return shuffled.slice(0, 5);
};

export default useDiscover;
