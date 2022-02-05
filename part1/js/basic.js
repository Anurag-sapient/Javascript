// TOPIC-1 (variables)--------------------------------------------------------------------------------------------->
// var and let are same but use let in modern languages
// const cannot be changed remains same 
// var digit=5;
// let digit=5;
// let x='hello';
// let x=["anurag","solanki","hello"];

// const x=10;
// x=5;
// console.log(x);
// alert(digit);

//TOPIC-2 (tempelate literal)  --------------------------------------------------------------------------------------------->
// let x='anurag';
// alert(`hello ${x}`);//to print inside with string some variable we use this `` sign and ${variable}


//TOPIC-3 (EQUAL OPERATORS) == vs ===  --------------------------------------------------------------------------------------------->
//== compares only value 5=='5 true
//=== compares value and datatype also 5=='5' false
// console.log(5!=='5');
// console.log(5!='5');

// TOPIC-4 (function)  --------------------------------------------------------------------------------------------->

//arguements datatype need not be defined

function multiplicationTable(i){
    document.write(`<h2>table of ${i} </h2>`);
    for(j=1;j<=10;j++){
        document.write(`${j} x ${i} = ${i*j}`);
        document.write("<br>");
    }
    document.write('<br><br>');
}
// multiplicationTable(2);
// let x=prompt("HELLO WRITE NUMBER YOU WANT TABLE FOR");
// multiplicationTable(x);

//we could also dont write arguments and could use the arguments using arguments only
function add(){
    console.log(arguments);
    if(arguments.length==0){
        console.log("no arguments passed");
    }
    else{
        let sum=0;
        for(i=0;i<arguments.length;i++){
            sum+=arguments[i];
        }
        console.log(sum);
        }
}
// add(10,14,15);
// let addition=add;----> giving function to let could be also done like this
// addition(10,13,14,12);

//Return in function
// we dont need to tell the return type of function and could return number ,string or array

//anonymous function ->not giving the name and as this functtion would be used by user only one time
// setTimeout(function() {console.log('after 5 sec hello master from anonymous function')},5000);
// function testFunction(){
//     console.log("hello from testFunction ");
// }
// setTimeout(testFunction,3000);




//TOPIC-5 (OBJECT IN JS)  --------------------------------------------------------------------------------------------->

//combination of variable and functions
//using braces we could define object
let person={
    firstName: 'Anurag',
    secondName: 'Solanki',
};
console.log(person)
console.log("firstName: " + person.firstName);
console.log("secondName: " + person["secondName"]);
person.age=10;
console.log(person)
delete person.secondName
console.log(person)
for(key in person){
    console.log(key+" "+person[key])//as . notation would not work as we are taking key which gives keys object[keys]=value

}

//objects with objects......................

person.sayHello=function(){ console.log("hello")};
person.sayHello()

// we can use objects in one another but using this.parameter is necessary to access the objects own parameters->

let anurag={
    name: "John",
    age: 21,
    describeMe:function(){console.log(`hello I'm ${this.name} of ${this.age} having a car ${car.model} of price ${car.price} `)}
}
let car={
    model: 'audi',
    price:1000

}
anurag.describeMe()

//declaration in js

hello();

function hello() {console.log('hello world')}
