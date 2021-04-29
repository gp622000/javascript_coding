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
