const fib = num => {
    let n = num - 2;
    const fibArr = [1,1];
    function helper(num,previousNum,secondPrevious){
        if(num === 0) return;
        let newNum = previousNum + secondPrevious;
        fibArr.push(newNum);
        helper(num-1,fibArr[fibArr.length-2],fibArr[fibArr.length -1]);
    }
    helper(n,fibArr[0],fibArr[1]);
    return fibArr[fibArr.length-1];
}

const fib1 = n => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(100));
console.log(fib1(100));