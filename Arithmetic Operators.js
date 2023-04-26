let a = 3;
let xf = (100 + 50) * a;
//!==	not equal value or not equal type
//typeof	Returns the type of a variable
//instanceof	Returns true if an object is an instance of an object type
/*
~ not operator
^ xor
<< left shift
>> right shift

>>> unsigned right shift
 */

let x = 100;
x >>>= 5;

console.log(x)

//Nullish Coalescing Assignment Example
let o = BigInt("123456789012345678901234567890");
o ??= 5;
console.log(o)

const person = {firstName:"atik",age:30}
console.log(person.firstName)