const express = require('express')
const app = express()
const  bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.json())
app.post('/',(req,res)=>{
    console.log(req.body)
    res.status(200).send({msg:'success'})
})

app.get('/',(req,res)=>{
    res.send("Hello World")
   
})
app.get('/new',(req,res)=>{
    res.json({
        name:'Sameer',
        age:21,
        gender:'male'
    })
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})