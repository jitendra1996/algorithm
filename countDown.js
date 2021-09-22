//Recursive function
const countdown = num => {
    if(num <= 0 ){
        console.log('All down!');
        return ;
    }
    console.log(num);
    num--;
    countdown(num);
}

countdown(10);