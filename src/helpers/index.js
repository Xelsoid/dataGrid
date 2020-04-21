export const sortDataString = (data, value, order) => {
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

export const sortDataNumber = (data, value, order) => {
  return data.sort((a, b) => {
    if(order){
      return parseInt(b[value], 10)-parseInt(a[value],10);
    }
    return parseInt(a[value], 10)-parseInt(b[value],10);
  })
};

export const sortDataDate = (data, value, order) => {
  return data.sort((a, b) => {
    if(order){
      return new Date(b[value]).getTime() - new Date(a[value]).getTime();
    }
    return new Date(a[value]).getTime() - new Date(b[value]).getTime();
  })
};

export const sortData = (data, value, order, dataType) => {
  switch (dataType) {
    case "string":
      return sortDataString(data, value, order);
    case "number":
      return sortDataNumber(data, value, order);
    case "date":
      return sortDataDate(data, value, order);
    default:
       return data;
  }
};

export const filterByName = (value, data) => {
  return {value: data}
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  let dd = newDate.getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm = newDate.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  let yy = newDate.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  return `${dd}.${mm}.${yy}`;
};
