//write a func that receives an array as arg and return their sum
let result= function arg(arr){
    let sum=0;
    for(let i=0;i<=arr.length;i++)
    { 
        sum=sum+arr[i];
    }
    console.log(sum)
}
let arr=[2,3,45]
let a=result(arr)
console.log(a)