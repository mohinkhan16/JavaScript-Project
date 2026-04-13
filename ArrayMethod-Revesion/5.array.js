let numbers=[1,2,3,4,5,6,7,8,9];


//find
console.log(numbers.find((value)=>value>6));


//findeindex

console.log(numbers.findIndex((value)=>value>8));


//some

console.log(numbers.some((num)=>num>10));

console.log(numbers.some((num)=>num>7));

//every

console.log(numbers.every((x)=>x>=0));