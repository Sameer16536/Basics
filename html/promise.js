const fs = require('fs')
const { resolve } = require('path')

const NayaPromise = ()=>{
    return new Promise((resolve)=>{
        fs.readFile('a.txt','utf-8',(err,data)=>{
            // if(err) console.log(err)
            resolve(data)
        })
    })
}


function onDone(data){
    console.log(data)
}

NayaPromise().then(onDone).catch((e)=>console.error(e))


//Another Promise

var d = new Promise(function(resolve){
    resolve("I'm done!");
})

const callback=(data)=>{
    console.log(data)
}

d.then(callback)