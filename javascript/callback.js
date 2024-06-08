function sum(one,two,funcToCall){
    let result =one+two
    funcToCall(result)
}
function displayresult(lala){
    console.log(`${lala} is the result`);
}
function displayresultpassive(lala){
    console.log(`the result is ${lala}`);
}

sum(3,4,displayresult)


//example 2
function arithmentic(one,two,func)
{
    let result=func(one,two)
    return result
}
function sum(a,b)
{
    return a+b
}
function sub(a,b)
{
    return a-b
}
console.log(arithmentic(3,2,sub));

//timeOut
function hello(){
    console.log("hello snehal");
}

setTimeout(hello,3*1000)//it will display hello after 3 secs
setInterval(hello,2*1000)//it will call the function every 2 secs