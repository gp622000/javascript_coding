// string are the primitive datatype in js
// String are the object wrapped to the primitive datatype string.
// It has properties called 1. String Length.

String(true) == "true"     //returns true
String(false) == "true"    //returns false
String("true") == "true"   //returns true
String("false") == "true"  //returns false
String(False)
// Uncaught ReferenceError
String("False")
// "False"
String(undefined)
// "undefined"


w = String("Gyan")
w.length // 4 returns number of codes
w.length = 7 //
console.log(w.length) // 5.
// if i have to access the index we will write

w[0]; // 'G'
w[1]; // 'y'

// for empty string the length property will be 0.

s = ""
s.length;// 0 

// backslash character (\) at the end of each line is used  to indicate that the string will continue on the next line.

let longString = "this is a very long string which needs  \
to wra across multiple line because \
otherwise my code is unreadable"
console.log(longString);

// methods .
let char = "Gyan"
char.charAt(0) //'G'
char.charAt(1) //'y'
char.charAt(2) //'a'
char.charAt(3) //'n'
char.charAt() // 'G'
char.charAt(5) // ""
char.charAt(true) // 'y';
char.charAt(NaN) // 'G';
char.charAt(null) // 'G';
char.charAt(undefined) // 'G';
char.charAt(Number.POSITIVE_INFINITY) // "";
char.charAt(Number.parseInt(111,2)); // " 

//charCodeAt()
// if the index is Not a number then value is 0
// if the index in out of range return NaN.

char.charCodeAt(11)// NaN
char.charCodeAt(2) // 121
char.charCodeAt('adf') // 103 code of 1st number
char.charCodeAt(Number.POSITIVE_INFINITY); //NaN

// concat()

'hello'.concat(12.2) //'hello12.2'
'hello'.concat('gyan') // 'hellogyan'
'hello'.concat(true) //'hellotrue'
'hello'.concat(NaN)// 'helloNaN'
'hello'.concat('gyan',"what'sUp")// hellogyanwhat'sup

//The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
// optional parameter are length.
"hello gyan".endsWith('gyan') // True
"hello gyan".endsWith('gyan',5) // false
"hello gyan".endsWith('gyan',10) // True
"hello gyan".endsWith('gyan',100) // True


// String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
String.fromCharCode(66) // 'B'
String.fromCharCode(NaN) //" "
String.fromCharCode(null) // " "
String.fromCharCode('aldsfjkadf') // " "
String.fromCharCode(65, 66, 67); //  "ABC"


String.fromCodePoint(42);       // "*"
String.fromCodePoint(NaN) // RangeError
String.fromCodePoint(Infinity); // RangeError


// includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
'Blue Whale'.includes('blue')  //  false
'Blue Whale'.includes('Blue')  //  True.

// indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
// An empty string searchValue produces strange results. With no fromIndex value, or any fromIndex value lower than the string's length, the returned value is the same as the fromIndex value:
'hello world'.indexOf('') //  0
'hello world'.indexOf('', 0) //  0
'hello world'.indexOf('', 3) //  3
'hello world'.indexOf('', 8) // 8

// However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:
'hello'.indexOf() //-1
'hello'.indexOf(true) //-1
'hello world'.indexOf('', 11) // 11
'hello world'.indexOf('', 13) // 11
'hello world'.indexOf('', 22) // 11
'Blue Whale'.indexOf('Blute') //-1
'Blue Whale'.indexOf('Blue')// 0
'Blue blue Whale'.indexOf('blue') // 5
'Blue blue Whale'.indexOf('blue',7)//-1
'Blue blue Whale'.indexOf('blut','Whale') //-1

'canal'.lastIndexOf('a');// 3

//match() method retrieves the result of matching a string against a regular expression.

// If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].

// If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp).
"Nothing will come of nothing.".match() // [""]
'NaN'.match(NaN); // ["NaN"]
''.match(NaN); // null
'gyanGyan'.match(/[A-g]/i) // here i ignore the uppercase and lowercase.

// g -> returns all matches
// without g -> returns first match

// Note that the length of the normalized form under "NFD" is 2. That's because "NFD" gives you the decomposed version of the canonical form,

let string1 = '\u00F1';            // ñ
let string2 = '\u006E\u0303';      // ñ
strng1 == string2 //False
// because the code points are different, string comparison will not treat them as equal. 

// The normalize() method helps solve this problem by converting a string into a normalized form common for all sequences of code points that represent the same characters.

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true

// String.padEnd()

'alkdf'.padEnd(12,'.')// "alkdf......."
'alkdf'.padEnd(12,) // "alkdf       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
'alkdf'.padEnd(12,NaN) // "alkdfNaNNaNN"

// string.padStart()
'abc'.padStart()
//"abc"
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"

// String.raw(callSite, ...substitutions)

// callSite
// Well-formed template call site object, like { raw: ['foo', 'bar', 'baz'] }.

// A TypeError is thrown if the first argument is not a well-formed object.
String.raw({raw:'test55'},0,1,2,3); //"t0e1s2t355"

String.raw({raw:'test'},0,1,2,3); // "t0e1s2t"

String.raw({
    raw:['foo','bar','baz']
},2+3,'Java'+'Script'); //"foo5barJavaScriptbaz"

// repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// RangeError: repeat count must be non-negative.
// RangeError: repeat count must be less than infinity and not overflow maximum string size.

'abc'.repeat(0) // ""
'abc'.repeat(1) // "abc"
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(NaN)
//""
'abc'.repeat(null)
//""
'abc'.repeat(undefined)
//""
'abc'.repeat('adf')
//""
'abc'.repeat(Number.EPSILON)
//""
'abc'.repeat(Number.POSITIVE_INFINITY)
// Uncaught RangeError

// replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

'my name is gyan prakash '.replace('gyan','pandit');
//"my name is pandit prakash "

'my name is gyan prakash '.replace(/Name/i,'pandit');
// "my pandit is gyan prakash "

'Apples are round, and apples are juicy.'.replace(/apples/gi,'oranges')
// "oranges are round, and oranges are juicy."

'Apples are round, and apples are juicy.'.replace(/apples/gi,NaN)
// "NaN are round, and NaN are juicy."

'Apples are round, and apples are juicy.'.replace(/apples/gi,Number.POSITIVE_INFINITY)
// "Infinity are round, and Infinity are juicy.

'aabbcc'.replaceAll('b', '.');
// 'aa..cc'

'aabbcc'.replaceAll(/b/, '.');
// TypeError: replaceAll must be called with a global RegExp

'aabbcc'.replaceAll(/b/g, '.');
// "aa..cc"

// search() method executes a search for a match between a regular expression and this String object.

"hey JudE".search(/[A-Z]/)
// 4
"hey JudE".search(/[A-Z]/gi)
// 0
"hey JudE".search(NaN)
// -1


// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

str1 = 'The morning is upon us.', // the length of str1 is 23.
str2 = str1.slice(1, 8)
console.log(str2) // he morn

"this is gyan prakash".slice(1,-2)
// "his is gyan praka"

"this is gyan prakash".slice(NaN)
// "this is gyan prakash"

"this is gyan prakash".slice(true)
// "his is gyan prakash"

"this is gyan prakash".slice('adfd')
// "this is gyan prakash"

"this is gyan prakash".slice(-2,5)
// ""

"this is gyan prakash".slice(-3,-1)
// "as"

// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 

"".split()
// [""]

const myString = 'Hello World. How are you doing?'
const splits = myString.split(' ', 3)

console.log(splits)
// ["Hello", "World.", "How"]
"gyan Prakash kumar".split()
// ["gyan Prakash kumar"]
// ["gyan Prakash kumar"]
// ["gyan Prakash kumar"]

"gyan Prakash kumar".split(' ')
// (3) ["gyan", "Prakash", "kumar"]

"gyan Prakash kumar".split(' ',-1)
// (3) ["gyan", "Prakash", "kumar"]

"gyan Prakash kumar".split(' ',true)
// ["gyan"]

// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// e position in this string at which to begin searching for searchString. Defaults to 0.

let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true


// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

"gyan prakash".substring(1,5)
// "yan "

"gyan prakash".substring(5,0)
// "gyan "

"gyan prakash".substring()
// "gyan prakash"

'gyan prakash'.substring(-1)
// "gyan prakash"

'gyan prakash'.substring(undefined)
// "gyan prakash"

"gyan prakash".substring(true)
// "yan prakash"

"gyan prakash".substring('adf')
// "gyan prakash"

"gyan prakash".substring(1,2,4,5)
// "y"

// The toLowerCase() method returns the calling string value converted to lower case.
'ALPHABET'.toLowerCase(); // 'alphabet'

'GYAN'.toLowerCase()
// "gyan"

'gyan'.toLowerCase(1)
// "gyan"
'gyan'.toLowerCase(-1)
// "gyan"

'gyan'.toLowerCase(null)
// "gyan"

'this is gyan'.toUpperCase()
// "THIS IS GYAN"

// trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) 

'   foo       '.trim()
// "foo"

'   foo       '.trim('adafd')
// "foo"

var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);

// trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.

var str = '   foo  ';

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'

/* Boolean */

Boolean(1)
// true
Boolean(0)
// false
Boolean(null)
false
Boolean(-0)
false
Boolean(Number.MAX_SAFE_INTEGER)
true
Boolean(0,1,2,2,2)
false
Boolean()
false
Boolean("")
false
Boolean("false")
true
Boolean([])
true
true.toString()
"true"
Boolean("true")
true
Boolean("adfad")
true

/* BigInt */
// BigInt — to represent whole numbers larger than 2^53 - 1

BigInt(Number.MAX_SAFE_INTEGER)
// 9007199254740991n

0n == 0
true

// A bigint is created by appending n to the end of an integer or by calling the function BigInt that creates bigints from strings, numbers etc.

BigInt(NaN)
// Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

1n+1
//Cannot mix BigInt and other types
Number.parseInt(1n)
//1

if (0n) {
    console.log('Hello from the if!')
  } else {
    console.log('Hello from the else!')
  }
// Hello from the else  

Boolean(0n)
// false
Boolean(1n)
// true

BigInt.asIntN(bits, bigint);
// bits
// The amount of bits available for the integer size.

// bigint
// The BigInt value to clamp to fit into the supplied bits.

// The value of bigint modulo 2bits, as a signed integer.
// negative because of overflow
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// zero because of overflow

/******************Undefinde ********/
// undefined: It means that the object doesn't have any value, therefore undefined. This occurs when you create a variable and don't assign a value to it.




/*******         Null           ***** */
// The value null represents the intentional absence of any object value
// Type of null is object
// Type of undefined is undefined
// It means that the object is empty and isn't pointing to any memory address.

null  == undefined   // true
// because javascript == operator does type Coresion and don't check for the type
isNaN(1 + undefined) // true
isNaN(1 + null)      // false
typeof 1+undefined
//"numberundefined"
typeof 1+null
// "numbernull"
1+undefined
// NaN
Number.isNaN(1+NaN)
//true

/*******NaN********/
// NaN is the result of operations which do not produce a well defined numerical result.

NaN == NaN //False.
// JavaScript automatic type conversion convert NaN into number, so checking if a number is not a number will always b false. and NaN !== NaN will be true
// thats why if(NaN) will false

/* Symbol */
// Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned
// Symbol can be used to separate public and internal properties of objects.
Symbol('foo') === Symbol('foo')  // false

let sym = Symbol('foo')
typeof sym      // "symbol"