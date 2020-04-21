import {sortData} from "@root/src/helpers";
import data from "../../data"

const initialState = data;

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SORT_DATA_BY_TYPE":
      return {...state, data: [...sortData(state.data, action.payload.value, action.payload.order, action.payload.dataType)]};

    default:
      return state;
  }
};

export default reducers;
