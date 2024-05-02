const arr =[1,2,4,5,6,7,8]

const custommap = (arr,transform)=>{
    const transformedArr = []
    for(let i =0;i<arr.length;i++){
        transformedArr.push(transform(arr[i]))
    }
    return transformedArr
}

const transform =(n)=> n*2;

console.log(custommap(arr,transform)) // [2, 4, 8, 10, 12, 14, 16]