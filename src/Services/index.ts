import axios, { AxiosResponse } from "axios";
import Config from "../Config";
import { IData } from "../Types/Data.type";

export const getSimpsons = (): Promise<AxiosResponse<Array<IData>>> => {
  return axios.get(`${Config.API_BASE}/simpsons`);
};
