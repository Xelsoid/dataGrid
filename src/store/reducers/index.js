import data from "../../data"

const initialState = data;

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SITE_DATA":
      return state;

    default:
      return state;
  }
};

export default reducers;
