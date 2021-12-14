const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end + start) / 2);
  while (start < end && arr[mid] !== val) {
    if (val > arr[mid]) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor((end + start) / 2);
  }
  return arr[mid] === val ? mid : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 12, 13, 14], 120));
// console.log(binarySearch([10,9,8,7,6,5,4,3,2,1] , 4));
