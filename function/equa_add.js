// If at least one operand is an object, it is converted to a primitive value (string, number or boolean)

// String + String = concatenate
// String + Number = concatenate
// convert Number to String by String() then perform concatenation
// String + Boolean = concatenate
// convert Boolean to string

"5" + "5" // "55"
"1" + 5 // "15"
"1" + true // "1" + String(true) // "1true"
"1"+NaN // "1NaN".
"1"+null // "1null"
// one operand is string so covert null to string then perform concatenation
"2"+undefined // "2undefined"

// Number + Number = addition
// Number + boolean = addition 
// convert boolean to Number by writing Number(boolean) then perform additon.
// Boolean + Boolean = addition

1 + 1 // 2
1 + true//2 // convert true to Number(true) // 1+1 --> 2
1 + false // 1 // convert false to Number(false) // 1+0 --> 1
true + false // 1
1 + null //0  // none of the operand is string so covert null to number then perform addition.
12 + undefined // NaN convert Number(undefined) NaN//
12 + NaN // NaN


// Object + Number
// convert object to the primitive datatype.
// by using valueOf() or toString()

// {} or [] primitive type is string

[1,3,5] + 1
String([1,3,5])// "1,3,5"+"1" // "1,3,51"

[1,3,5] + [2,3,4] 
String([1,3,5]) // "1,3,5"
String([2,3,4]) // "2,3,4".
// "1,3,52,3,4"

15 + {}; // {} primitive type is string.
String({}) // ["object object"].

15 + "[object object]" // "15[object object]";


5 - "false"
//NaN

5 - true // 5

"gyan" - "prakash"
//NaN

// Identity Operator.(===) or strictily equal
// Equality Operator . (==).

// Identity Operator
1 === "1" // false
0 === 0 // True
undefined === undefined // True.
null === null // True.
undefined === null // false.
NaN === NaN // false.
var first= {}
second = first
first === second // true
([] === []) // false.

// Equlity Operator

1 == true // true
// transform true or false to number then start compareing.

'' == 0 // true
// convert string to number then compare. Number('') = 0

null == 0 // false
// null has primitive type is null so null === 0 means false

null == undefined // true.

"4.0" == 4
true

NaN == NaN // false.

[''] == '' // true.
// primitive type of [''] is string so it;s true

({} == true) // false.
// primitive type of {} is string "[object Object]" 
// true is boolean so convert boolean to 1
// 1 operand is number and other is string so convert string to number.
// Number("[object Object]") which is NaN.
// NaN === 1(false)

-null == false // true