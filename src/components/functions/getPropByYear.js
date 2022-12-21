const getPropPerYear = (data) => {
  const years = data.map((property) => {
    const year = new Date(property.created_at).getFullYear();
    return year;
  });
  const uniqueYears = [...new Set(years)];
  const countYears = {};
  for (let year of uniqueYears) {
    const countYear = years.filter((el) => {
      return el === year;
    }).length;
    countYears[year] = countYear;
  }
  return countYears;
};

export default getPropPerYear;
