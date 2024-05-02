//Given an array , return a new array in which every value is mult by 2

let arr = [1,2,3,4,5]

const doubleArr = (arr)=>{
   return  arr.map(num => num *2)
}

//Easy understandable way
function transform(num){
    return num *2
}
const ans =arr.map(transform)
console.log(ans);


const result = console.log(doubleArr(arr))


//OR normal approach
const newArr  = []
for(let i = 0 ; i<arr.length;i++){
    newArr.push(arr[i]*2)
}
console.log(newArr);