const selectionSort = arr => {
    for(let i = 0 ; i < arr.length ; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        if(arr[min] < arr[i]){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}


console.log(selectionSort([37,45,12,8,3,1]));