const { log } = require("console");
const { access } = require("fs/promises");

//it is usually a wrapper around an already existing JS async function
 function hello(){
    console.log("function inside hello");
    return new Promise(function(cb){
        console.log("function inside promise");
        const fs=require("fs")
        fs.readFile("./javascript/a.txt","utf-8",function(err,data){
            console.log("function before resolve");
            cb(data)
        })
    })

   
 }

 function done(data){
    console.log(data);
 }

 hello().then(done)//there will be no callbacks in thid program

function hellojii(){
 let a=new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo"),1000
    })
 })}

 function donneee(data){
    console.log(data);
 }

//  console.log(a)
//  a.then(donneee)


 async function lala(){
    const value=await hellojii()
    console.log(value)
    console.log("hi there")

 }
 lala()