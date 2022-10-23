import { IData } from "../Types/Data.type";
import { useAppSelector } from "./useStore";

const useDiscover = () => {
  const { dataSlice } = useAppSelector((state) => state);
  const baseCondition: boolean | undefined =
    dataSlice.data && dataSlice.data?.length > 5;

  const shuffled: Array<IData> | undefined | boolean =
    dataSlice.data &&
    baseCondition &&
    dataSlice.data.sort(() => 0.5 - Math.random());

  if (!shuffled || baseCondition) return dataSlice.data;
  return shuffled.slice(0, 5);
};

export default useDiscover;
