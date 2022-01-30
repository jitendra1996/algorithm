function pivot(arr , start = 0 , end = arr.length -1){
    const swap = (arr,i,j) =>{
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }

    let pivotVal = arr[start];
    let swapIdx = start;

    for(let i = start +1 ; i < arr.length ; i++){
        if(pivotVal > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr,left=0,right = arr.length){
    if(left < right){
        let pivotIdx = pivot(arr,left,right);
        quickSort(arr,left,pivotIdx-1);
        quickSort(arr,pivotIdx+1,right);
    }
    return arr;

}

console.log(quickSort([8,23,45,1,4,2,56,7,5]));