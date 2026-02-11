//string method is the most imp method in js
//string is sequence of characters

let name="Mohin";

//charAt() method:-is give a output of the character at the specified index

console.log("char at",name.charAt(0)); 

//concat() method :-IS COMBINE TWO OR MORE STRINGS 

let name1="Mohin";
let surname="pathan";

console.log("concat",name1.concat(" ",surname));

//endWith() method:- IS CHECK THE STRING END WITH THE SPECIFIED WORD OR NOT

let name2="Mohin Pathan";
console.log("end with",name2.endsWith("m"));

//includes() method:-IS SPECIFIY THE WORD IS PRESENT IN THE STRING OR NOT

let name3="Mohin Pathan";
console.log("includes",name3.includes("Pathan"));

//indexOf() method:- IS SPECIFIY WORD INDEX

let name4="mohin pathan";
console.log("index of",name4.indexOf("p"));

//lastIndexOf() method:-IS SPECIFIY THE WORD INDEX FROM LAST TO FIRST

let name5="mohin pathan";
console.log("last index of",name5.lastIndexOf("a"));

//length() method:-TOTAL LENGTH CHECKING

let name6="mohin pathan";
console.log("length",name6.length);