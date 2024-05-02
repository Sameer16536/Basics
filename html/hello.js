function Newcall(){
    let p = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Hello SAmeer")
      },5000)
    })
    return p;
  }
  
  async function CallKaro(){
    let value =await Newcall()
    console.log(value)
  }
  CallKaro()