class animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount
        this.speaks=speaks
    }
    speak(){
        console.log(`hi there ${this.speaks}`);
    }
    static print(){//static methods do not require any object to be called they can be called and executed the way they are like if this is called it prints animal
        console.log("animal");
    }
}

let dog=new animal("dog",4,"bow bow")
console.log(dog);
dog.speak();
let cat=new animal("cat",4,"meow")
animal.print()//static methods do not require any object to be called they can be called and executed the way they are like if this is called it prints animal

//date is a predefined class

let cal=new Date()
console.log(cal.getMonth()+1);//because the month number starts from zero but the day and year starts from 1 only
console.log(cal.getFullYear());
console.log(cal);
console.log("it shows the time which has passed from 1970: "+cal.getTime())

function sum(){
 let a=0;
 for(let i=0;i<10000000;i++){
     a=a+i;
 }
}

let beforetime=new Date()
let one=beforetime.getTime()

sum()

let aftertime=new Date()
let two=aftertime.getTime()

console.log(two-one)//the time difference between one and two is 12 milliseconds which means sum took 12 miliseconds to execute

function printimeeverysec(){
    console.log(new Date().toLocaleTimeString('en-IN'))//it prints the time acc to indian format
}
//setInterval(printimeeverysec,1000)

//string to object and vice versa 

let yo='{"name":"snehal","age":19}'//we have to add quotes everywhere in the string form of object
console.log(JSON.parse(yo));//{ name: 'snehal', age: 19 }

let yoyoyo={
    name:"snehal",
    age:19,
    college:"kiit"
}

console.log(JSON.stringify(yoyoyo));//{"name":"snehal","age":19,"college":"kiit"}
console.log(yoyoyo.hasOwnProperty("name"));

let obj=Object.assign({},yoyoyo,{hiii:"go away"})//to add the obj with additional properties in another object
console.log(obj);
