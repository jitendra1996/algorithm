class Solution{
    static sort(arr , startIndex){
        if(startIndex >= arr.length){
            return arr;
        }
        let greatest = arr[startIndex];
        for(let i = startIndex + 1 ; i < arr.length ; i++){
            if(greatest > arr[i]){
                let temp = greatest;
                arr[startIndex] = arr[i];
                arr[i]=temp;
            }
        }
        return this.sort(arr , startIndex+1);
    }
}

console.log(Solution.sort([7,6,5,4,3,2,1],0));