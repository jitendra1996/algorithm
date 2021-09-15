let word = "hellllooooo it!@##$s Google!@#%$^&*()_+ GOOOOOOGLEEEEEE 4564651546";

const charCount = str => {
    const obj = {};
    let letters = /^[A-Za-z]+$/;
    for(let i = 0 ; i < str.length ; i++){
            if(obj[str[i]] > 0){
                obj[str[i]]++;
            }else{
                if(letters.test(str[i])){
                    obj[str[i]] = 1;
                }
            }
        }
        return obj ;
    }


console.log(charCount(word));