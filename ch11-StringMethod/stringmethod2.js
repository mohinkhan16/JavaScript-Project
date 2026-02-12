// 1:-  metchmethod
  //Metchmethod is use for give us to full details and
  //   //  also give index if is it no working then he give us to Null output.

let play ="i am playing cricket";
console.log(play.match("am"));

// 2:-repeat
//make a new string and copy strings

const Name="Mohin";
console.log(Name.repeat(2));

// 3:-replace
// first match are replce
// searching a new string a pattern and retrun a new string

let word="this is book";
console.log(word.replace("b","B"));

// 4:-replaceall
// replaceall work for replace all same latter 
 word="this is book";
 console.log(word.replaceAll("o","O"));

 //5:-search
//  search a value and retrun a index position
// search has a inculd a regular  expression 
// index has a not a include a regular expression that the different between this two 

let book="War and Peace";
console.log(book.search("a"));

// 6:-slice 
//abstract a part of string and retrun a new string

let Animal="This is so many animal";
console.log(Animal.slice(2));
console.log(Animal.slice(6));
console.log(Animal.slice(-1));

// 7:-split 
//firstly they convert string into array

let mobile="This is my new mobile";
console.log(mobile.split(" "))   //with space
console.log(mobile.split(""))   //without space
console.log(mobile.split("i"))   //removing latter

// 8:-startwith
// give us to output in booleen value 
// if is latter in the string then output is true rather then output is false

let text="hello everyone";

console.log(text.startsWith("h"));

// 9:-substring
//substring does not chane orignal array
//

let number="abcdefg";
console.log(number.substring(2,5));
console.log(number.substring(5,2));
console.log(number.substring(-1));//give full text

// 10:-uppercash
//write touppercash()
//if text has a lowercash we can change into uppercash

let upper="good morning";
console.log(upper.toUpperCase());

// 11:-lowercash
//write tolowercash()
//if text has a uppercash wa can change into lowercash

let lower="GOOD AFTERNOON";
console.log(lower.toLowerCase());

// 12:-trim 
// use for remove white space

let remove="  hello  everyone   ";

console.log(remove.length);

console.log(remove.trim().length);

console.log(remove.trimStart().length);

console.log(remove.trimEnd().length);