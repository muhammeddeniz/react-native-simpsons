import { IData } from "../Types/Data.type";

export default (
  data: Array<IData>,
  action: { payload: IData },
  down?: boolean
) => {
  var index = 0;

  var newArray: Array<IData> = data.filter((item: IData, i: number) => {
    if (item.id === action.payload.id) index = i;
    return item.id !== action.payload.id;
  });

  const newIndex = down ? index + 1 : index > 0 ? index - 1 : 0;
  newArray.splice(newIndex, 0, action.payload);

  return newArray;
};
