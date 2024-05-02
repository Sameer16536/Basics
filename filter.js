const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = arr.filter((arr)=>{
    if(arr%2 == 0){
        return true;
        }else{
            return false;
        }
})
console.log(newArr); //[2,