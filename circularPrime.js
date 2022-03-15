const isPrime = num => {
    let count = 0;
    for(let i = 1 ; i <= num ; i++){
        if(num % i === 0) count++;
    }

    if(count > 2) return `${num} is not prime`;
    else return `${num} is prime`;
}


const countDigit = num =>{
    let count = 0;
    while(num !== 0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}


const circulate = num =>{
    let newNum = String(num).split('');
    let i = newNum.length - 1;
    let swap = newNum[newNum.length - 1];
    while(i >= 0){
        if(i === 0){
            newNum[i] = swap;
        }else{
            newNum[i] = newNum[i-1];
        }
        i--;
    }
    return newNum.join('');
}

const circularPrime = num =>{
    const arr = [];
    let digitCount = countDigit(num);
    arr.push(num);
    let i = 0;
    while(i < digitCount-1){
        let revNum = circulate(arr[i]);
        arr.push(parseInt(revNum));
        i++;
    }
    return arr.map(el=>isPrime(el));
}

// console.log(circulate(1236127));
console.log(circularPrime(971));