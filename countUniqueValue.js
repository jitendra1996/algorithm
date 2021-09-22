const countUniqueValues = arr => {
    let count = 0;
    let i = 0;
    let val = arr[0];
    while(i < arr.length){
        if(val !== arr[i+1]){
            count++;
            val = arr[i+1];
        }
        i++;
    }
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
