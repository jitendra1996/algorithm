const shiftLetter = (str , arr) => {
    const strCodeArr = str.split('').map(el => el.charCodeAt(0));
    for(let i = 0 ; i < arr.length ; i++){
        for( let j = 0 ; j < i+1 ; j++){
            let newCodeVal = strCodeArr[j] + arr[i];
            while(newCodeVal > 122){
                let num = newCodeVal - 122 ;
                newCodeVal = 96 + num ;
            }
            strCodeArr[j] = newCodeVal ;   
        }
    }
    return strCodeArr.map(el => String.fromCharCode(el)).join('');
}

const arg = process.argv;

const result = shiftLetter(arg[2],arg[3]);
console.log(result);