//1:-match method
//match method give us to full details like index,input and groups
//if is not match then they give us to null output

let text="This is text";
console.log("Match Method:-",text.match("is"));

//2:- Repeat 
// make new string and copy..

let Animal="This is monkey";
console.log("Repeat:-",Animal.repeat(3));

// 3:-replace
// first match replace
//and also giving a new string..

let test="everyone giving a test";
console.log("replace:-",test.replace("e","E"));

//4:-Replace All
//every match are replace 

let book="this is so many book";
console.log("Replace All:-",book.replaceAll("s","S"));

//5:-slice 
//extract a part of string and make a new string

let student="there are so many student";
console.log("Slice:-",student.slice(2,9));
console.log("Slice:-",student.slice(3,11));
console.log("Slice:-",student.slice(-1))

//6:-search
//value search and give us to index
//first value's give index

let answer=" what is your answer?";
console.log("Search:-",answer.search("a"));

// 7:-split 
//split firstly they convert string into array

let word="practice";
console.log("Split:-",word.split(" "));
console.log("Split:-",word.split(""));
console.log("Split:-",word.split("c"));

// 8:-StartWith
// give us to output in boolean value 
// if is latter in the string then output is true rather then output is false

let idea="your idea";

console.log("Start With:-",idea.startsWith("u"));

//9:-substring
//substring does not change original array

let name="full name";
console.log("Substring:-",name.substring(2,5));
console.log("Substring:-",name.substring(5,2));
console.log("Substring:-",name.substring(-1));//give full text


// 10:-uppercase
//write touppercase()
//if text has a lowercase we can change into uppercase

let upper="hello";
console.log("Uppercase:-",upper.toUpperCase());

// 11:-lowercase
//write tolowercase()
//if text has a uppercase wa can change into lowercase

let lower="HARD WORK";
console.log("Lowercase:-",lower.toLowerCase());

// 12:-trim 
// use for remove white space

let remove="   PARAMITER  ";

console.log("Trim:-",remove.length);

console.log("Trim:-",remove.trim().length);

console.log("Trim:-",remove.trimStart().length);

console.log("Trim:-",remove.trimEnd().length);
