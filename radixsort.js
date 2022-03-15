const getDigit = (num,place)=>{
    let digit = 0;
    let i = 1;
    while(num !== 0 && i <= place){
        digit = Math.abs(num) % 10 ;
        num = Math.floor( Math.abs(num) / 10);
        i++;
    }

    return digit;
}

const digitCount = (num) =>{
    let count = 0;
    while(num !== 0){
        count++;
       num = Math.floor(Math.abs(num) / 10);
    }

    return count;
}

const mostDigit = nums => {
    let largest = 0;
    for(let i = 0 ; i < nums.length ; i++){
        let numOfDigits = digitCount(nums[i]);
        if(numOfDigits > largest){
            largest = numOfDigits;
        }
    }

    return largest;
}

const radixSort = arr =>{
    let largestDigitCount = mostDigit(arr);
    for(let i = 1 ; i <= largestDigitCount ; i++){
        const bucket = [[],[],[],[],[],[],[],[],[],[]];
        for(let j = 0 ; j < arr.length ; j++){
            let digit = getDigit(arr[j],i);
            bucket[digit].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }

    return arr;
}

// console.log(getDigit(12345,3));
// console.log(digitCount(123459));
// console.log(mostDigit([1,1,11,111,11111]));
console.log(radixSort([23,345,5467,12,2345,9852]));
