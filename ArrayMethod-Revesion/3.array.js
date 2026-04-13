//iteration array

let fruites=["mango","banana","guvava","orange"];

for(let i=0;i<fruites.length;i++){
    console.log(fruites[i]);
}

//using for off

for(let i of fruites){
    console.log(i);
}

//foreach 

let car=["BMW","ODI","PORCHAY","ALTO","NENO"];

car.forEach((car,index)=>{
    console.log(car);
});

//Concat

let items=["Meggie","Dal","Rice","Masalas","cornFlower"];

let Grosary=items.concat(items);

console.log(Grosary);