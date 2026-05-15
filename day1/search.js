function finding(arr, searchelement){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===searchelement){
            return i;
        }
    }
    return " not found"
}
console.log(finding([10,20,30,40],30))
