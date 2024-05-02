const express = require('express');
const app = express()

const port = process.env.PORT || 5000
//function
const sum = (n)=>{
    let ans = 0
    for(let i =0;i<=n;i++){
        ans = ans+i;

    }
    return ans;
}

app.get('/',(req,res)=>{
    const n  = req.query.n || 100;
    const finalsum = sum(n)
    res.send("Your ans is :"+finalsum)
    
})
app.listen(port , ()=> console.log(`Server started on ${port}`))