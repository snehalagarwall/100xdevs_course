function sum(one,two,callback){
    console.log(callback);
    let a=callback(one)
    let b=callback(two)
    return a+b
}

let c=sum(2,2,function(n){
    return n*n*n
})
console.log(c);