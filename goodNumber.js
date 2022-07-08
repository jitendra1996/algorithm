const isGoodNumber = num => {
    if(hasSeven(num)) return false;
    if(isDivisibleBySeven(num)) return true;
    return false;
}

const hasSeven = num => {
    while(num !== 0){
        let digit = num%10;
        if(digit === 7) return true;
        num = Math.floor(num/10);
    }
    return false;
}


const isDivisibleBySeven = num => {
    return num%7===0;   
}

console.log(isGoodNumber(7));
console.log(isGoodNumber(21));
console.log(isGoodNumber(140));
console.log(isGoodNumber(150));
console.log(isGoodNumber(700));
