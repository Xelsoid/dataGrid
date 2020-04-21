export const addSiteData = (todos, inputValue) => ({
  type: "ADD_SITE_DATA",
  payload: {todos, inputValue}
});

export const sortDataByType = (value, order, dataType) => ({
  type: "SORT_DATA_BY_TYPE",
  payload: {value, order, dataType}
});
