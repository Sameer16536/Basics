const express = require('express')
const app = express()
const port = 5000
app.use(express.json()) // for parsing application/json
//Array of Objects
var users =[{
    name:'Sameer',
    age:20,
    kidneys:[{
        healthy:false},
        {healthy:true,}
    ]
    
}]
const unhealthy = users[0].kidneys.filter(kidney => !kidney.healthy)
console.log(unhealthy);
console.log(users[0])
app.get('/',(req,res)=>{
    const patientKidneys = users[0].kidneys
    const numberofKidneys = patientKidneys.length ;
    
    const numberofUnhealhtyKidneys = unhealthy.length;
    res.json({
        patientKidneys,
        numberofKidneys,
        numberofUnhealhtyKidneys
    })
})
app.post('/',(req,res)=>{
    const ishealthy = req.body.ishealthy
    console.log(ishealthy)
    users[0].kidneys.push({healthy : ishealthy});
    res.json({msg:"Done"})

})
app.put('/',(req,res)=>{
    for(let i =0; i<users[0].kidneys.length;i++){
        //Update all the kidneys to healthy
        users[0].kidneys.healthy=true;

    }
    res.json({})
})
app.delete('/',(req,res)=>{
    const newKidneys = [];
    for(let i = 0;i <users[0].kidneys.length;i++ )
{
    if(user[0].kidneys.healthy){
        newKidneys.push({
            healthy:true
        })
    }
}
    users[0].kidneys =newKidneys
    res.json({msg:"done"})
})

app.listen(port,()=>{
    console.log("Server is running")
})