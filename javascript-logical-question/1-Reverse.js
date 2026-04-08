let name="mohin";

let full=name.split("");
console.log("Convert string into array",full);

let array=full.reverse();;
console.log("Array starting last index",array);

let convert=array.join();
console.log("revers ",convert);

//loop

const surname="Pathan"

let reverse=" "

for(let i=surname.length-1;i>=0;i--){
    reverse+=surname[i];
}

console.log(reverse);