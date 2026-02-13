
//Object is a key value,
//object is a pass by reference.
//object is part of non-primitive 

//Example no:-1
const product={
    name :"book",
    rating:4,
    Author:"william",
    price:250,
};
console.log("This is information about product :-",product)

//Example no:-2

const StudentDetails={
    Name :"Ajay",
    follower :750,
    following :20,
    post : 5
};
console.log("This is student details about social media :-",StudentDetails);

//create object using object constructor
// if we don't added a key value so they give output to empty{}...

const person = new Object();

person.name="Adit";
person.hight="5'3";
person.weight=40;

console.log("using object constructor :-",person)
