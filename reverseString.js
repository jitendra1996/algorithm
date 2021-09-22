const reverseString = str => {
    let newStr = str.slice(-1);
    if(str.length-1 === 0) return newStr;
    return newStr.concat(reverseString(str.slice(0,str.length - 1)));
}

console.log(reverseString('awesome'));