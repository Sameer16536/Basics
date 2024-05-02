function sum(a,b,callbackFUnc){
    result =  a + b;
    // return result;
    callbackFUnc(result);
    // displayResult(result)
}
function displayResult(data){
    console.log("Result of sum is:", data);
}

var  result =sum(1,2,displayResult)
// displayResult(result);