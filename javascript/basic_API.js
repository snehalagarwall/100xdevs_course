console.log(("helloooo").substring(2,5));
console.log(("helloooo").slice(2,5));

console.log(("hello world").replace("world","javascript"));

console.log(("hello snehal").split("s"));//[ 'hello ', 'nehal' ]

console.log(("    yooooooo       ").trim())//remove space

//numbersssssssssss

console.log(parseInt("42"));//42
console.log(parseInt("42px"));//42
console.log(parseInt("2.23"));//2
console.log(parseInt("ndwd23non"));//NaN

console.log(parseFloat("23df3f4f"));//23
console.log(parseFloat("3.33434"));//3.33434
console.log(parseFloat("23"))//23


//arraysss
let ab=[1,2,3,4,4]
ab.push(4)
console.log(ab);

ab.pop()
console.log(ab);

ab.shift()
console.log(ab)//removes an element from the front

ab.unshift(3)
console.log(ab);//adds an element to the front of the array

const ome=[1,2,3,4]
const tmo=[5,6,7,8]
console.log(ome.concat(tmo));/*[
    1, 2, 3, 4,
    5, 6, 7, 8
  ]*/

//something new
ome.forEach(function(str){
    console.log(str);
})//it calls the function inside for each element of the array





