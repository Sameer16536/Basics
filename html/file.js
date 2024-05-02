const fs = require('fs')
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})

console.log("Sameer Bhaai")
let a = 0
for(let i = 0 ; i<100000000;i++){
    a++
}
console.log("Madara vaii")