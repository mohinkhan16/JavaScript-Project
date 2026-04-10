//join method
//this method retrun new string into convert to array 

const veges=["Poteto","Onine","Brokoly","Ginger"];

console.log(veges);

console.log(veges.join());


//array in flat

let name=[["MOhin"],"Ankit","prince",["kalpesh"]];

console.log(name);

console.log(name.flat());


//.secound method  

let number=[1,2,3,4,[1,1,1],14,25,78,[1,2,4,7]];

console.log(number);

console.log(number.flat(3));

//third method

let index=[[1,5,8,9],"mohin","Pathan",[1,2,3],41,[45,25,47]];

console.log(index);

console.log(index.flat(Infinity));

//sclice

let cars=["BMW","Scripo","Thar","Odi","Invo"];

console.log(cars);

console.log(cars.slice(2,4));

//some

//some method give us output as a true and false

let marks=[10,20,30,40,50,60,70];

const result =marks.some((marks)=> marks< 30);

console.log(result);

//reverse method 

let names=["Moksh","Aniket","Akshay","Karan"];

console.log(names.reverse());

//value

let bike=["Bmw","Honda","Suzuki","Ktm"];

let bikers=bike.values();

console.log(bike);

for(key of bikers){
    console.log(key);
}