export const sortByName = (data, value, order) => {
  return data.sort((a, b) => {
    const firstCondition =  order ?
      a[value].toLowerCase() < b[value].toLowerCase():
      a[value].toLowerCase() > b[value].toLowerCase();
    const secondCondition =  !order ?
      a[value].toLowerCase() < b[value].toLowerCase():
      a[value].toLowerCase() > b[value].toLowerCase();

    if(firstCondition) {
      return 1;
    } if (secondCondition) {
      return -1;
    }
    return 0;
  })
};

export const filterByName = (value, data) => {
  return {value: data}
};
