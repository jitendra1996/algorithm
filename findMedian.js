const findMedian = (arr1,arr2) =>{
    const arr3 = arr1.concat(arr2).sort();
    let mid = Math.floor((arr3.length - 1) / 2);
    if(arr3.length % 2 === 0) return Math.floor((arr3[mid] + arr3[mid+1])/2);
    return Math.floor(arr3[mid]/2);
}


console.log(findMedian([1,5,9],[2,6,7]));