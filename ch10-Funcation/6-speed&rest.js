
// 1. spread operator
const num =[1,2,3,4,5]

console.log("num1",...num)

num2=["num2",...num,6,7,8,9,10];

console.log(num2)


// 2. rest operator

function play(sports){
    console.log("i have playing this sports :",...sports);

    console.log("i like most",sports[1])
}

const sports = ["cricket", "football", "hockey", "tennis", "badminton"];

play(sports);