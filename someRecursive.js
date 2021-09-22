const isOdd = (val) => +val % 2 !== 0;

const someRecursive = (arr, cb) => {
  if (arr.length === 0) {
    return false;
  }
  let isTrue = cb(arr.slice(0, 1).join());
  if (isTrue) {
    return true;
  } else {
    arr.splice(0, 1);
    return someRecursive(arr, cb);
  }
};

let result = someRecursive([1,2,3,4,5], isOdd);
console.log(result);
