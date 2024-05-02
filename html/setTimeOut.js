setTimeout(()=>{
    console.log("setTimeout1");
},20*1000)


let a= 0;
for(let i = 0; i<10;i++){
    a = a + i;
}
console.log(a)

setTimeout(()=>{
    console.log("setTimeout2");
},10*1000)