
//push Add element at a last
let name =["mohin","Anikt","Prince","Amit"];

name.push("Dharmik");

console.log(name);

//unshift add element at the first

let veges=["Poteto","ginger","garlic"];

veges.unshift("tamoto");

console.log(veges);

//pop use to remove to end

let fruites=["banana","mango","orange"];

fruites.pop();

console.log(fruites);

//shift is use to remove element at the strating

let color=["red","blue","green","orange"];

color.shift();

console.log(color);

//splice use for add,remove,replace

let bike=["honda","acttiva","suzuki"];

//add

bike.splice(1,0,"KTM");

console.log(bike);

//remove


let fru=["mango","orange","guva"]
fru.splice(1,2);
console.log(fru)

//replace


let veg=["ginger","tameto","brokoly"]
bike.splice(1,1,"ginger");
console.log(veg);