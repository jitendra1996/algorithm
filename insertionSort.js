const insertionSort = arr => {
    for(let i = 0 ; i < arr.length ; i++){
        let sortedEl = arr[i];
        for(let j = i + 1 ; j >= 0 ; j--){
            if(sortedEl > arr[j]){
                let temp = arr[j];
                arr[j] = sortedEl;
                arr[i] = temp ;
            }
        }
    }
    return arr ;
}