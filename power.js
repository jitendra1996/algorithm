//recursive calculate power

const power = (num , count) => {
    if(count === 0){
        return 1;
    }

    return num * power(num , --count);
}

console.log(power(2,5));