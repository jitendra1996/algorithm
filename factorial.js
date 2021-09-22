//recursive function to calculate factorial of a number

const factorial = num => {
    if(num === 1){
        return 1;
    } 
    return num * factorial(--num);
}

let result = factorial(4);
console.log(result);