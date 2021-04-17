// Template Literals
console.log("Template Literals");

const str = `Helllo Bro`;
const multi = `Hellow sir this 
            me devaraj`;
const temp = "Satyam";
const tempName = `may name is ${temp}`;
console.log(tempName);

//String interpolation is replacing placeholders with values in a string literal.
const stringInterpolation = `dev ${str}`;
console.log(stringInterpolation);
console.log( str );
console.log( 'multi line' + multi);

// Expression interpolation

var a = 5;
var b = 6;

const total = `total of ${a} and ${b} is ${a + b}`;
console.log(total);

// Nested Template 

let name = 'Devaraj';
let isFriend = false;
isenemy = true;

const talk = `Hello ${ isFriend ? name : 
    `why are you here ${isenemy ? 'dog' : name} ` }`

console.log(talk);

// Tagged templates
let person = 'satyam';
let age = 28;

function myTag(strings, person, age) {
  let str0 = strings[0]; 
  let str1 = strings[1]; 
  let str2 = strings[2]; 

  let ageStr;
  if (age > 99){
    ageStr = 'kab tak jiyo ge chacha';
  } else {
    ageStr = 'londe ho tum abhi to';
  }

  return `${str0}${person}${str1}${ageStr}${str2}`;
}

let output = myTag`tum nam ${ person } to ${ age }.`;

console.log(output);



