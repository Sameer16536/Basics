//1. Create a counter in Javascript (counts down from 30 to 0)
//  2. Calculate the time it takes between a setTimeout call and the inner function actually running
//  3. Create a terminal clock (HH:MM:SS)


// let count = 30;
// const countDown =()=>{
//     console.log(count);
//     count--;
//     if(count<0){
//         clearInterval(timer);
//     }
    
// }

// let timer = setInterval(countDown,1000)


// const startTime = new Date()
// setTimeout(() => {
//     const endtime = new Date()

//     const timeDifference = endtime - startTime

//     console.log(`Time between setTimeout call and inner function execution: ${timeDifference} milliseconds`)
    
// }, 1000);


function updateClock (){
    const now = new Date()

    const hours = String(now.getHours())
    const minutes = String(now.getMinutes())
    const seconds = String(now.getSeconds())

    // console.log(`${hours}:${minutes}:${seconds}`)
    process.stdout.write(`\r${hours}:${minutes}:${seconds}`)
}
setInterval(updateClock, 1000)