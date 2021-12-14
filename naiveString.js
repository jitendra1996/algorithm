const findSubStings = (mainString , subString) =>{
    let count = 0;
    for(let i = 0 ; i < mainString.length; i++){
        for(let j = 0 ; j < subString.length ; j++){
            if(mainString[i+j] !== subString[j]){
                break;
            }
            if(j === (subString.length - 1)){
                count++;
            }
        }
    }
    return count;
}


const result = findSubStings('wowomgwowomg','omg');
console.log(result);