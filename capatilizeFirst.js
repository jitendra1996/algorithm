const capatilizeFirst = (arr) => {
  let newArr = [];
  if (arr.length === 0) return newArr;
  let str = arr
    .slice(0, 1)
    .join()
    .slice(0, 1)
    .toUpperCase()
    .concat(arr.splice(0, 1).join().slice(1));
  newArr.push(str);
  return newArr.concat(capatilizeFirst(arr));
};

console.log(capatilizeFirst(["car", "taco", "banana"]));
