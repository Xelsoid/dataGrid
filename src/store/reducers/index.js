import {sortByName} from "@root/src/helpers";
import data from "../../data"

const initialState = data;

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case "SORT_SITE_DATA_BY_NAME":
      return {...state, data: sortByName(state.data, action.payload.value, action.payload.order)};

    default:
      return state;
  }
};

export default reducers;
