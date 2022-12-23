const getTopNewProp = (data) => {
  let sortedArr = data.data.data.sort((a, b) => {
    return b.id - a.id;
  });
  const topTen = [];
  for (let i = 0; i <= 10; i++) {
    topTen.push(sortedArr[i]);
  }
  return topTen;
};

export default getTopNewProp;
