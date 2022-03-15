function result(arr,q,queriesCount){
    const infinityArr = arr.map(el=>parseInt(el));
    const r = [];
	let i = 0;
    while(i<parseInt(queriesCount)){
        const queriesArr = q[i].map(el=>parseInt(el));
        let j = queriesArr[0];
        let k = queriesArr[1];
        let a = 0;
        let sum = 0;
        while(j<=k){
             if(j<infinityArr.length){
                 a=j;
                 sum = sum + infinityArr[a];
                 j++;
                 a++;
                 if(a>= infinityArr.length){
                     a=0;
                 }
             }else if(j >= infinityArr.length){
                 a=j-infinityArr.length;
                 while(a >= infinityArr.length){
                     a-=infinityArr.length;
                 }
                 sum = sum + infinityArr[a];
                 j++;
                 a++;
                 if(a >= infinityArr.length){
                     a = 0;
                 }
             }
            }
        r.push(sum);
        }
    }
    return r.join(' ');
}
/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/




process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
    let testCases = parseInt(readLine());
    let sizeOfArr = parseInt(readLine());
    const arr = readLine().replace(/\s+$/g,'').split(' ');
	let numOfQueries = parseInt(readLine());
    const queriesArr = [];
    for(let i = 0 ; i < numOfQueries ; i++){
    	let queries = readLine().replace(/\s+$/g,'').split(' ');
        queriesArr.push(queries);
    }
    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
    let x = result(arr,queriesArr,numOfQueries);

   /*
   Log your output here 
   eg: console.log(x);
   */
    console.log(x);
}