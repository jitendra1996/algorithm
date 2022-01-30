const bs = (arr,val)=>{
    let start = 0;
    let end = arr.length -1;
    let mid = Math.floor((start + end)/2);
    function helper(start,end,mid){
        if(start>end) return -1;
        else if(arr[mid]===val) return mid;
        else if(arr[mid] > val) return helper(start,mid-1,Math.floor((start+end)/2));
        else if(arr[mid]<val) return helper(mid+1,end,Math.floor((start+end)/2));        
    }
    return helper(start,end,mid); 
}


console.log(bs([2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63],14));