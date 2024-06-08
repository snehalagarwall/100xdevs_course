//compiled                                                    //interpredted
//1.first need to compile then need to run                    //1.usually is compiled line by line as it is executing
//2.usualy dont dont compile if there is an error             //2.runs partially if the error comes later ex.js,python
//in the code ex-c,java


//It is a dynamic language(it is loosely typed/dynamically typed)
//it is single threaded(it works only on a single core of the machine,it does not occupy all the cores)
console.log("hello world")

let firstname = "snehal"
let ismarried = false
if (ismarried) {
    console.log(`${firstname} is married`);
} else {
    console.log(`${firstname} is not married`);
}
let c = 0;
for (let i = 1; i <= 100; i++) {
    c = c + i
}
console.log(c)

let ages = [21, 22, 34, 45]
console.log(ages.length)

//array of bjects

let array1 = [{ firstname: "snehal", gender: "female" }, { firstname: "smayan", gender: "male" },
{ firstname: "swati", gender: "female" }, { firstname: "shyam", gender: "male" }, {
    firstname: "srinika", gender: "female"
}]

for(let i=0;i<array1.length;i++){
    if(array1[i]["gender"]=="female"){
        console.log(array1[i]["firstname"]);
    }
}