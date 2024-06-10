/*examples of asynchronous functions-
setTimeout
fs.readFile
Fetch*/

const fs= require("fs");

fs.readFile("./javascript/a.txt", "utf-8", function(err, data) {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
});
console.log("hello")//first this prints then the readfile cause the readfile requires time to fetch and read the document and then print it

for(let a=0;a<=1000000000;a++){
    a++;
}

console.log("hello babyyyy")

//the output of this whole
/* hello
hello babyyyy
hello snehal this is me smayan how r u? */


