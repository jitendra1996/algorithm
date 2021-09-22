const recursiveRange = num => {
    if(num === 0){
        return 0 ;
    }
    return num + recursiveRange(--num);
}

console.log(recursiveRange(5));