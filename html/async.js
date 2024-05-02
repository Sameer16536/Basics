//Settimeout(callbackFUnc,time)

function Sum(n){
    let sum= 0;
    for(let i = 0 ; i<n;i++){
       sum = sum +i;
    }
    return sum
}
function findSUMtilln(){
    console.log(Sum(10))
}

setTimeout(findSUMtilln,4*1000)
console.log("Check Out the sum")


//Creating a counter :
let count = 0;
function countDown(){
    console.log(count)
    count++;
    if(count>5){
        clearInterval(timer)
    }
}

let timer = setInterval(countDown,1000)