const linearSearch = (arr, searchingVal) => {
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]=== searchingVal){
      return i ;
    }
  }
  return -1;
};


console.log(linearSearch([10,20,25,30,15] , 15));