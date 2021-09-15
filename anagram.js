const validAnagram = (first,second) => {
    if(first.length !== second.length){
        return false;
    }
    const firstObj = charCount(first);
    const secondObj = charCount(second);

    for (const key in firstObj){
        if(!secondObj.hasOwnProperty(key)){
            return false ;
        }
        if(firstObj[key] !== secondObj[key]){
            return false;
        }
    }
    return true;
}


const charCount = str => {
    let strLower = str.toLowerCase();
    let obj = {};
    let specialChar = /^[a-z]+$/;
    for(let i = 0 ; i < strLower.length ; i++){
        if(obj[strLower[i]]>0){
            obj[strLower[i]]++;
        }else{
            if(specialChar.test(strLower[i])){
                obj[strLower[i]] = 1 ;
            }
        }
    }
    return obj ;
}


//console.log(charCount('asjdjaaasdjkjdej'));

console.log(validAnagram('aaz','zza'));
console.log(validAnagram('anagram','nagaram'));
