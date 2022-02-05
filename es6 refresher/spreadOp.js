//spread and rest operator (...)


// using spread operator one can spread list into another list
let list = ["honda","ferrari","porche"];
let list2 =["bmw",...list];
console.log(list2);

//for data ->spread and rest operator
let person={
    name:"anurag",
    age:"20"
}
let personx={
    ...person,
    x: 10
}
console.log(personx.name);

//functions-> spread and rest operator
function hello(...arrays) {
    console.log('length of array:'+arrays.length)
    console.log(arrays)
    console.log(arrays[0])
}
hello(1,2,3,3,4,4)


//object destructuring - we can get the components of object using same name using object destructuring
let car={
    model:"ferrari",
    speed:"100kmph"
}
let {model,speed}=car
console.log(model)

//reference (array,object) and primitive type(string,number)
//we can copy using primitive type from one to another but not in refernce as it points all to same

let person1={
    name:"ferrari",
    speed:"100kmph"
}
let person2=person1
person2.name="honda"
//both names will be changed as both points to same object
console.log(person1)
console.log(person2)

// so spread operator is preferred to copy in reference datatypes
person3={...person1}
person3.name="porche"
console.log(person1)
console.log(person3)

//map and filter in js

//map-- every element of array to be modified
let arr1=[10,20,20,40]
let arr2=arr1.map(function(x){return  x*x})
let arr3=arr2.map(x=> x*x)
console.log(arr1, arr2, arr3)

//filter- if conditions based element are stored
let arr4=arr1.filter(function(x){if(x%4==0)return x})
let arr5=arr1.filter(x=>x%4==0)
console.log(arr4, arr5)

