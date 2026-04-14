// map() processes each element and returns a new array.
//first method
let num=[1,2,3,4,5,6,7,8,9];

console.log(num);

let numbers= num.map((num)=>num+5);

console.log(numbers);

//secound method

const Name=["Aniket","Afridi","dhyey","dhrumik","yakshit"];

let nameArray= Name.map((Name)=>{
    return Name
});

console.log(nameArray);

///third method

const Person = [
    { name: "Smarth", age: 21, city: "Vadodara", profession: "Doctor" },
    { name: "Priya", age: 23, city: "Ahmedabad", profession: "Teacher" },
    { name: "Yash", age: 27, city: "Baroda", profession: "Hair Stylist" },
    { name: "Dhyey", age: 31, city: "Mumbai", profession: "Graphic Designer" },
    { name: "Jay", age: 34, city: "Pune", profession: "Businessman" },
];


//checking name
const personname=Person.map((person)=>{
    return person.name;
});

console.log(personname);

//checking age

const personage=Person.map((person)=>{
    return person.age;
});

console.log(personage);

//checking city

const personcity=Person.map((person)=>{
    return person.city;

});

console.log(personcity);