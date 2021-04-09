// javascript is supports dynamic typing means whatever the value assign to the varible that will of their data typeof....
var a = 42; // a will be of number type.
var a = 'bar' // a will be of string.
var a = true // a will be of type boolean.

// primitives datatypes means which contains single value.
// six type of primitive datatype.
// 1. undefined
// 2. Boolean
// 3. Number. integers and floating-point
// 4. String
// 5. BigInt // number larger that 2**53 -1
// 6. Symbol
// 7. null
// A primitive can be replaced, but it can't be directly altered
// one non-primitive datatype 
// 1.Object
// it contains multiple value 

// if we use typeof to check the datatype of variables then that will gives the String.

// primitive value are immutable and non-primitive value are mutable.
// primitive are stored by value while non-primitive(objects) are stored by reference.

// pritimive value is reassigned a new value but cannot changed.

// value would be reassigned
let string = "hello";
string = "hello gyan";
console.log(string) // "hello gyan"

// value wouldn't be change.
let string = 'this is a string';
string[0] = 'T';
console.log(string)// 'this is a string'

// if we don't write the vat keyword then variable is created golabally.
word = 'Gyan'
console.log(word) // Gyan

console.log(typeof(typeof(5))) // String.

// All primitive value except null and undefined wrapped by a Object
// 1. String for string primitive
// 2. Number for number primitive
// 3. BigInt for the bigint primitive
// 4. Boolean for the boolean primitive.
// 5. Symbol for the symbol primitive


// All the primitive datatype except null and undefined has wrapper on it
// Number for the number primitive
// String for the string primitive
// BigInt for the Bigint primitive
// Boolean for the boolean primitive
// Symbol for the symbol primitive

// Number object can take value of 1.8*10^308 beyond that it shows Infinity.
// Number(value) converts the string and other value to number type if value wouldn't convert then it return NaN.
// Type of NaN is always Number

var n = Number('12') // 12
Number('gyan') // NaN.
Number('NaN') // NaN.
Number(true) // 1
Number(1+true) // 2.
Number(3-'3')// 0
Number(3-false)// 3
//Number.EPSILON property is used to check whether floating-point numbers are equal or not.
// Number.EPSILON property to check that their difference should be smaller than the value of the Number.EPSILON.

Number.EPSILON // (1-2^-52).
Number.EPSILON + 1 // 1.000000000002
Number.EPSILON + 2 //2
Number.EPSILON + 'false' // "2.220446049250313e-16false"
var min = Number.EPSILON = 12 // min = 12.
// The Number.EPSILON property represents the difference between 1 and the smallest floating point number greater than 1.
var x = 0.3;
var y = 0.6;
var z = 0.9;

console.log(x+y == z); // false
// smallest floating point number in javascript is 5e-324.
Number.MAX_SAFE_INTEGER // 2^53 -1.
// used to represent number saifly between (-2^53-1) to (2^53-1);
const x = Number.MAX_SAFE_INTEGER + 1// 2^53 -1.
const y = Number.MAX_SAFE_INTEGER + 2 // 2^53 -1.
x === y //true
// because Math.pow(2,53)+1 is round to Math.pow(2,53) 
// safe integer consits of all interger having -(pow(2,53)-1) to (pow(2,53)-1)

Number.MAX_VALUE =  pow(2,1024) // beyound that number would consider as Infinity.

Number.MIN_SAFE_INTEGER = -(pow(2,53)-1)

Number.MIN_VALUE =  5e-324

0*Number.NEGATIVE_INFINITY // NaN

Number.isFinite(0) //True
Number.isFinite(2e64) //True
Number.isFinite(Infinity); // False
Number.isFinite(null) // False
Number.isFinite(true) //False
Number.isFinite(undefined) //false
// check the number is finite if true return true else return false.

isNaN(Number('klajdf')) // prints true.


Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger(5.0000000000000001); // true

Number.isSafeInteger((Math.pow(2,53))-1)
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(3.4) // false because this is not integer.
Number.parseFloat('3.14') // 3.14
Number.parseFloat(Infinity) // Infinity
Number.parseFloat(true) // NaN
Number.parseFloat(Number.parseFloat)// NaN
Number.parseInt(Infinity) // NaN
// If the first character cannot be converted to a number, parseInt returns NaN.
// parseInt can't return infinity because infinity is not within JavaScript's integer range. whereas it is a valid within the floating point range.
Number.parseInt(true)//NaN
Number.parseInt('12',1) // NaN
Number.parseInt('12',37)// NaN
Number.parseInt(Number.EPSILON) //2


// toExponential will only take float input
11.11.toExponential() // "1.111e+1"
// if we give integer then it will give error
11.124.toExponential(2) // "1.11e+1" return number of digits after decimal

undefined.toLocaleString() // Error

(1.23e+20).toFixed(2)  // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2)  // Returns '0.00'
2.34.toFixed(1)        // Returns '2.3'
2.35.toFixed(1)        // Returns '2.4'. Note it rounds up
2.55.toFixed(1)        // Returns '2.5'. Note it rounds down - see warning above
-2.34.toFixed(1)       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
(-2.34).toFixed(1)     // Returns '-2.3

true.toString() // 'true'
undefined.toString()// Error
null.toString()//error
Infinity.toString()// 'Infinity'

12345.6789.toFixed() // string "12345"
12345.6789.toFixed(1) // rounding // "12345.7"
12345.6789.toFixed(7) // added 0 at last.
2.55.toFixed(1) // "2.5"
// Floating point numbers cannot represent all decimals precisely in binary.
-2.34.toFixed(1) // -2.3 because the operator precedence.
(-2.34).toFixed(1) // "-2.3"

0.000123.toPrecision(2) // 0.00012 it won't count the 0.

// String // String object wrapped to the primitive datatype string
/*
we will define string by using "",'',``;

*/