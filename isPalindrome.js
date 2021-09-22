const isPalindrome = str =>{
    
    const helper = str =>{
        let newStr = str.slice(-1);
        if(str.length-1 === 0) return newStr;
        return newStr.concat(helper(str.slice(0,str.length - 1)));
    }

    let resultStr = helper(str);
    if(resultStr === str){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('tacocat'));