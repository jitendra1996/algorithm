const bubbleSort = (arr) => {
    let noSwap;
  for (let i = 0; i < arr.length; i++) {
        noSwap = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
};

console.log(bubbleSort([45,2,8,12,37]));
