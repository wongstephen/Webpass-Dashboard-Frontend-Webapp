const getCountPerState = (data) => {
  let propertyPerState = {};
  data.forEach((property) => {
    const state = property.city_state.split(", ")[1];
    if (propertyPerState[state]) {
      propertyPerState[state]++;
    } else {
      propertyPerState[state] = 1;
    }
  });
  return propertyPerState;
};

export default getCountPerState;
