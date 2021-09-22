const flatten = arr => {
    return arr.join().split(',').map(el => +el);
}

console.log(flatten([1,2,3,4,5,6]));