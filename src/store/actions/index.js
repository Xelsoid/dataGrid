export const addSiteData = (todos, inputValue) => ({
  type: "ADD_SITE_DATA",
  payload: {todos, inputValue}
});

export const sortSiteDataByName = (value, order) => ({
  type: "SORT_SITE_DATA_BY_NAME",
  payload: {value, order}
});
