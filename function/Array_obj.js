// Array class is a global object which is used in the construction of arrays.

// Array Element will access by using index and index can not be string

// Array has a property called length which will return the length of the array.

fruits = ['Apple','Banana'];

console.log(fruits[fruits.length]);//undefined

-(fruits[1]) // NaN

// for(const item of items) cycle iterates over array items.

// The element in the array matching the given index. Returns undefined if the given index can not be found.


const colors = ['blue','green','white'];

for(const color of colors){
    console.log(color)
}
//'blue'
//'green'
//'white'

for( let index = 0; index < colors.length ; i++){
    console.log(colors[index]);
}
//'blue'
//'green'
//'white'

// array.forEach(callback) method iterates over array items by invoking callback function on every array item.

// On each iteration callback(item [, index [, array]]) is called with arguments: iterated item, index and the array itself.

colors.forEach(function(item,index,array){
    console.log(item,index);
})

// blue 0
// green 1
// white 2

// You cannot break array.forEach() iterating.

// array.map(callback) method creates to a new array by using callback invocation result on each array item.

// On each iteration callback(item[, index[, array]]) is invoked with arguments: current item, index and the array itself. It should return the new item
// array.map() creates a new mapped array, without mutating the original one.

const number = [0,2,4];

const newNumbers = number.map(function(item){
    return item+1;
})

newNumbers = [1,3,5]

obj = {'0' : 10,'1' : 15 , length : 2};
//{0: 10, 1: 15, length: 2}

obj.map(function(item){
    return item * 2;})
// VM833:1 Uncaught TypeError: obj.map is not a function
//     at <anonymous>:1:5


// Array.from(arrayLike[, callback]) method creates to a new array by using callback invocation result on each array item.

// On each iteration callback(item[, index[, array]]) is invoked with arguments: current item, index and the array itself. It should return the new item.


// we can't use map in the array-like object
const numbers = [0,3,5]

const newNumbers = Array.from(numbers,function(item){
  return item +1;
})

console.log(newNumbers) // newNumbers; // => [1, 3, 5]

Array.from(obj,function(item){
    return item * 2 })
(2) [20, 30]


// array.reduce(callback[, initialValue]) reduces the array to a value by invoking callback function as a reducer.

// On each iteration callback(accumulator, item[, index[, array]]) is invoked with arguments: accumulator, current item, index and the array itself. It should return the accumulator.


function summarize(accumulator ,number){
    return accumulator + number;
  }
  
  const sum = numbers.reduce(summarize,0)
  
  console.log(sum) //8

//   array.concat(array1[, array2, ...]) concatenates to the original array one or more arrays


const heroes = ['Batman', 'Robin'];
const villains = ['Joker', 'Bane'];

const everyone = heroes.concat(villains);
  

//Spread operator
// We can use the spread operator with an array literal to concatenate arrays: [...array1, ...array2].

const heros = ['aluarjun','thala']

const villains = ['vijay','sonu']

const names = [...heroes , ...villains]

console.log(names) //names (4) ["aluarjun", "thala", "vijay", "sonu"]

// array.slice([fromIndex[, toIndex]]) returns a slice of the array starting fromIndex and ending toIndex (excluding toIndex itself). fromIndex optional argument defaults to 0, toIndex optional argument defaults to array.length.

names.slice(2)
(2) ["vijay", "sonu"]
names.slice(0,2)
(2) ["aluarjun", "thala"]
names.slice()
(4) ["aluarjun", "thala", "vijay", "sonu"]
names.slice("asdfsd")
(4) ["aluarjun", "thala", "vijay", "sonu"]

// An easy way to clone an array is to use the spread operator: const clone = [...array];

const colors = ['white', 'black', 'gray'];

const clone = [...colors];

clone; // => ['white', 'black', 'gray']
colors === clone; // => false

// [...array] creates a shallow copy.
// Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. 

// [].concat(array) is yet another approach on how to clone array.

const colors = ['white', 'black', 'gray'];

const clone = [].concat(colors);

clone; // => ['white', 'black', 'gray']
colors === clone; // => false

// array.slice() method
// array.slice() is another approach on how to clone array.

const colors = ['white', 'black', 'gray'];

const clone = colors.slice();

clone; // => ['white', 'black', 'gray']
colors === clone; // => false

// array.includes() method
// array.includes(itemToSearch[, fromIndex]) returns a boolean whether array contains itemToSearch. The optional argument fromIndex, defaulting to 0, indicates the index to start searching.

// Let’s determine if 2 and 99 exist in an array of numbers:

const numbers = [1, 2, 3, 4, 5];

numbers.includes(2);  // => true
numbers.includes(99); // => false

// array.find() method
// array.find(predicate) method returns the first array item that satisfies the predicate function.

// On each iteration predicate(item[, index[, array]]) function is invoked with the arguments: iterated item, index and the array itself.

const numbers = [1, 2, 3, 4, 5];

function isEven(number) {
  return number % 2 === 0;
}

const evenNumber = numbers.find(isEven);

evenNumber; // => 2

// array.find() returns undefined if no item has satisfied the predicate.

// array.indexOf() method
// array.indexOf(itemToSearch[, fromIndex]) returns the index of the first appearance itemToSearch in array. The optional argument fromIndex, defaulting to 0, is the index to start searching.


const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const index = names.indexOf('Joker');

index; // => 2
// The index of 'Joker' inside names is 2.
// array.indexOf(itemToSearch) returns -1 if the item hasn’t been found
// array.findIndex(predicate) is an alternative to find the index using a predicate function.

// array.every() method
// array.every(predicate) method returns true if every item passes predicate check.

// On each iteration predicate(item[, index[, array]]) predicate function is invoked with the arguments: iterated item, index and the array itself.


const evens = [0, 2, 4, 6];
const numbers = [0, 1, 4, 6];

function isEven(number) {
  return number % 2 === 0;
}

evens.every(isEven); // => true
numbers.every(isEven); // => false


// array.some(predicate) method returns true if at least one item passes predicate check.
// On each iteration predicate(item[, index[, array]]) function is invoked with the arguments: iterated item, index and the array itself.

// Let’s determine whether the arrays contain at least one even number:

const numbers = [1, 5, 7, 10];
const odds = [1, 3, 3, 3];

function isEven(number) {
  return number % 2 === 0;
}

numbers.some(isEven); // => true
odds.some(isEven);   // => false

// array.filter(predicate) method returns a new array with items that have passed predicate check.

// On each iteration predicate(item[, index[, array]]) function is invoked with the arguments: iterated item, index and the array itself.

const numbers = [1, 5, 7, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evens = numbers.filter(isEven);

evens; // => [10]

// array.push() method
// array.push(item1[..., itemN]) method appends one or more items to the end of an array, returning the new length.



const names = ['Batman'];

names.push('Joker');

names; // ['Batman', 'Joker']

// array.unshift(item1[..., itemN]) method appends one or more items to the beginning of an array, returning the new length of the array.

const names = ['Batman'];

names.unshift('Catwoman');

names; // ['Catwoman', 'Batman']

// array.pop() method
// array.pop() method removes the last item from an array, then returns that item.


const colors = ['blue', 'green', 'black'];

const lastColor = colors.pop();

lastColor; // => 'black'
colors; // => ['blue', 'green']

// array.shift() method removes the first item from an array, then returns that item

const colors = ['blue', 'green', 'black'];

const firstColor = colors.shift();

firstColor; // => 'blue'
colors; // => ['green', 'black']


// array.splice(fromIndex[, removeCount[, item1[, item2[, ...]]]]) removes items from an array and inserts new items instead.

const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2);

names; // => ['Batman', 'Bane']

const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

names.splice(1, 2, 'Alfred');

names; // => ['Batman', 'Alfred' ,'Bane']

// array.length is a property that holds the array length. More than that, array.length is writable.
// If you write a smaller than current length array.length = newLength, the extra elements are removed from the array.

// Let’s use array.length = 0 to remove all the items of an array:

const colors = ['blue', 'green', 'black'];

colors.length = 0;

colors; // []
// colors.length = 0 removes all items from colors array.

const colors = ['blue', 'green', 'black'];

colors.splice(0);

colors; // []
// colors.splice(0) removes all elements of colors array.

// array.fill(value[, fromIndex[, toIndex]]) fills the array with value starting fromIndex until toIndex (excluding toIndex itself). fromIndex optional argument defaults to 0, toIndex optional argument defaults to array.length.

const numbers = [1, 2, 3, 4];

numbers.fill(0);

numbers; // => [0, 0, 0, 0]

const length = 3;
const zeros = Array(length).fill(0);

zeros; // [0, 0, 0]
// Array(length).fill(0) creates an array of 3 zeros.

// Array.from() can be useful to initialize an array of certain length with objects:

const length = 4;
const emptyObjects = Array.from(Array(length), function() {
  return {};
});

emptyObjects; // [{}, {}, {}, {}]
// emptyObjects is an array initialized with different instances of empty objects.

// array.flat([depth]) method creates a new array by recursively flatting the items that are arrays, until certain depth. depth optional argument defaults to 1.

// Let’s flatten an array of arrays:

const arrays = [0, [1, 3, 5], [2, 4, 6]];

const flatArray = arrays.flat();

flatArray; // [0, 1, 3, 5, 2, 4, 6]
// arrays contains a mix of numbers and arrays of numbers. arrays.flat() flats the array so that it contains only numbers.


// array.sort() method
// array.sort([compare]) method sorts the items of the array. When the compare function is omitted, the method converts the items to strings, then orders them ascending by UTF-16 code units values.

const letters = ['B', 'C', 'A'];

letters.sort();

letters; // => ['A', 'B', 'C']


numbers.sort()
(5) [1, 100, 2, 3, 5]

numbers.sort(function(a,b){
    return a-b })
(5) [1, 2, 3, 5, 100]

// if it doesn't contain Infinity and NaN):

let items = new Array(5).fill(0)
// undefined
console.log(items)
// (5) [0, 0, 0, 0, 0]


const testArray = [4,7,10];

const arry1 = [1,5,2]
undefined
arry1.toLocaleString('de-De',{style:'currency',currency:'EUR'})
// "1,00 €,5,00 €,2,00 €"

object1 = {}
// {}
Object.isExtensible(object1)
// true
Object.preventExtensions(object1);
console.log(Object.isExtensible(object1));
// expected output: false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false


const object1 = {
  property1 : 42
}

Object.seal(object1)
object1.property1 = 33;
console.log(object1.property1) // 33

Object.seal(object1)
// once we seal the object we can't add new property but we can change the existing property.
// we can't delete the property.

const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true

[1,2,3,5,5].copyWithin(4)
// (5) [1, 2, 3, 5, 1]
[1,2,3,5,5,8,9,2].copyWithin(3)
// (8) [1, 2, 3, 1, 2, 3, 5, 5]
[1,2,3,5,5,8,9,2].copyWithin(2)
// (8) [1, 2, 1, 2, 3, 5, 5, 8]

a1 = new Array(5)
// (5) [empty × 5]
arr.fill(0)
// (3) [0, 0, 0]

arr.findIndex(function(item){
  return item === 3 })
// 3
arr.findIndex(function(item){
  return item === 3 })
// 3
arr.findIndex(function(item){
  return item === 4 })
// 0

arr.findIndex(function(item){
  return item === -1 })
// -1

arr.flatMap(function(item){
  return [item , item * 2]
});
// (8) [4, 8, 4, 8, 4, 8, 3, 6]

i1.flat()
// (6) ["1", "gyan", "2", "prakash", "3", "kumar"]

Array.from([1,2,3,4],function(item){
  return item + item
})
// (4) [2, 4, 6, 8]

arr.includes(3)
// true
arr.includes(3,-1)
// true

Array.isArray(arr)
// true
arr = [4,4,4,3]
arr.join()
// "4,4,4,3"
arr.join('-')
// "4-4-4-3"
arr.lastIndexOf(4)
// 2
arr.lastIndexOf(5)
// -1

Array(1,'gyan',5)
// (3) [1, "gyan", 5]

Array(NaN)
// VM34292:1 Uncaught RangeError: Invalid array length

Array.of(NaN)
// [NaN]

arr.reduce(function(sum,item){
  return sum + item
},0)
// 15
arr.reduceRight(function(sum,item){
  return sum + item
})
// 15

i1.splice(10)
// []

i1 = i1.flat()
// (6) ["1", "gyan", "2", "prakash", "3", "kumar"]
i1.slice(4)
// (2) ["3", "kumar"]
i1.slice(19)
// []
i1.toString()
// "1,gyan,2,prakash,3,kumar"
i1.push.apply(i1,[1,2,3]);
// 9
i1
// (9) ["1", "gyan", "2", "prakash", "3", "kumar", 1, 2, 3]

const module = {
  x:42,
  getx : function(){
      return this.x
  }
};
// undefined
const unboundGetx = module.getx;


// JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers.
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]

a.join("")
// "123"

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// expected output: [4, 1, 4, 20, 16, 1, 18]

Array.of('1','2','3')
// (3) ["1", "2", "3"]

var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"