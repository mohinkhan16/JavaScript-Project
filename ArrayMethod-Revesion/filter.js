//filter() selects elements based on a condition and returns a new array.

const number=[1,2,3,4,5,6,7,8,9];

console.log(number);

const oddnumber=number.filter((number)=>number%2!==0 );

console.log(oddnumber);

//secound method

const Person = [
    { name: "Riya", age: 22, city: "Surat", profession: "Nurse" },
    { name: "Aman", age: 29, city: "Delhi", profession: "Software Engineer" },
    { name: "Neha", age: 26, city: "Jaipur", profession: "Fashion Designer" },
    { name: "Karan", age: 30, city: "Bangalore", profession: "Data Analyst" },
    { name: "Meera", age: 24, city: "Chennai", profession: "Photographer" },
];

const people=Person.filter((x)=>x.age>25);

console.log(people);

//both method use filter and map

const name= Person.filter((x)=>x.age>29).map((x)=>x.name);

console.log(name);