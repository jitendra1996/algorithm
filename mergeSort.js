function mergingArr(arr1,arr2){
    const result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let left = mergeSort(arr.slice(0 , Math.floor(arr.length / 2)));
    let right = mergeSort(arr.slice(Math.floor( arr.length / 2)));
    return mergingArr(left,right);
}

console.log(mergeSort([3,4,5,8,1,2,6,7]));