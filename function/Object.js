// Object in javascript are collection of properties
// Object - collection of keys and associated values.
// Object will also create a object
// Map will also create a object

// when the key of the plain object is number or boolean then javascript automatically coverts that key to the String

// when we create a object by using Map() then key data type preserves javascript won't change it to string.

// When there is a situation when an object cananot be created for such cases javascript provides a special value null which indicates a missing value.

// null is a primitive value that represents the intentional absence of any object value.

function greetObject(who){
    if(!who){
        return null
    }
    return {message:`Hello ${who}!`}
}


// undefined is the value of an uninitialized variable or object property.

// For example, if you declare a variable without assigning an initial value, accessing such variable evaluates to undefined:

// The main difference between null and undefined is that null represents a missing object, while undefined represents an uninitialized state.

// I use the loose equality operator to check whether a variable is null or undefined:

function isEmpty(value) {
  return value == null;
}

isEmpty(42);                // => false
isEmpty({ prop: 'Value' }); // => false
isEmpty(null);              // => true
isEmpty(undefined);         // => true

// avaScript interpreter returns undefined when accessing a variable or object property that is not yet initialized.
let number;
number;     // => undefined

let movie = { name: 'Interstellar' };
movie.year; // => undefined

let movies = ['Interstellar', 'Alexander'];
movies[3];  // => undefined
// The above example demonstrates that accessing:

// an uninitialized variable number
// a non-existing object property movie.year
// or a non-existing array element movies[3]

// Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

const target = {a:1, b:2};
const source = { b:4, c:5};

const returnedTarget = Object.assign(target,source);
console.log(target); // {a:1,b:4,c:5}

console.log(returnedTarget); // {a:1,b:4,c:5}

// Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
const obj1 = {};

Object.defineProperties(obj1,{
  property1 : {
    value : 42
  },
  property2 : {}
})

console.log(obj1.property1)

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

// Object.keys() method returns an array of a given object's 

const arr = ["a","b","c"];
console.log(Object.keys(arr));

// array-like object
const obj = {0:'a',1:'b',2:'3'}
console.log(Object.keys(obj))

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
    getFoo: {
      value: function () { return this.foo; }
    }
  });
  myObj.foo = 1;
  console.log(Object.keys(myObj)); // console: ['foo']


//   Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. 

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

console.log(Object.entries(100))
// []

console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Object.fromEntries() method transforms a list of key-value pairs into an object.

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj);
  // expected output: Object { foo: "bar", baz: 42 }

  const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }



// Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties,

const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode

// we'll give the dog an owner, that also has a name (mine ;) 
const obj = { name: "Doggo", owner: { name: "Ben" } }
// we'll again freeze the object
Object.freeze(obj)

// and this time we'll change the name of the owner
obj.owner.name = "Bla"

console.log(obj) // {name: "Doggo", owner: {name: "Bla"}}



//   The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

const object1 = {
    property1: 42
  };
  
  Object.seal(object1);
  object1.property1 = 33;
  console.log(object1.property1);
  // expected output: 33
  
  delete object1.property1; // cannot delete when sealed
  console.log(object1.property1);
  // expected output: 33

//   Existing properties in objects frozen with Object.freeze() are made immutable. Objects sealed with Object.seal() can have their existing properties changed.


// Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. 

const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']


// The limitations of javascript object is when we give keys as number then it automatically coverts to the String.

const names = {
    1:'One',
    2:'Two'
};

Object.keys(names); // => ['1','2']

const foo = { name: 'foo' };
const bar = { name: 'bar' };

const kindOfMap = [
  [foo, 'Foo related data'],
  [bar, 'Bar related data'],
];

// these things will happen by using Map object


const foo = { name: 'foo' };
const bar = { name: 'bar' };

const mapOfObjects = new WeakMap();

mapOfObjects.set(foo, 'Foo related data');
mapOfObjects.set(bar, 'Bar related data');

mapOfObjects.get(foo); // => 'Foo related data'

// Any JavaScript object inherits properties from its prototype object. The same happens to plain objects.

// The accidentally overwritten property inherited from the prototype is dangerous. Let’s study such a dangerous situation.

// First, let’s ovewrite the toString() property in an object actor:

const actor = {
  name: 'Harrison Ford',
  toString: 'Actor: Harrison Ford'
};
// Then, let’s define a function isPlainObject() that determines if the supplied argument is a plain object. This function uses the method toString():

function isPlainObject(value) {
  return value.toString() === '[object Object]';
}
// Finally, lets’ call isPlainObject(actor). Here’s the problem: because toString property inside actor is a string (instead of an expected function), this call generates an error:

isPlainObject(actor); // TypeError: value.toString is not a function

// by using we can do this

function isMap(value) {
    return value.toString() === '[object Map]';
  }
  
  const actorMap = new Map();
  
  actorMap.set('name', 'Harrison Ford');
  actorMap.set('toString', 'Actor: Harrison Ford');
  
  // Works!
  isMap(actorMap); // => true


//   we cannot easily define number of properties in plain objects

// but we can do it by using map

const exams = {
    'danger' : '10points',
    'prakash' : '8 points',
};
Object.keys(exams).length ; //2
// first we need to convert the keys into array then we will apply lenth property.

const exampsMap = new Map([
    ['John Smith','10 points'],
    ['Jane Doe','8 points'],
]);

exampsMap.size;// 2 function in map to determine the size.


// prototype in javascript

const cat = { sound : 'Meow!' , legs : 4};
// we extract information from cat 
const pet = { legs : 4};
const cat = { sound : 'Meow!'}
// but when if we want leg property on cat. we will do it by inheritance

// In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.

const cat = { sound : "Meow!",__proto__:pet}

cat.legs; // 4

// Inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods.

// For example, you could easily reuse legs property to create more pets:

const pet = { legs: 4 };

const cat = { sound: 'Meow!', __proto__: pet };
const dog = { sound: 'Bark!', __proto__: pet };
const pig = { sound: 'Grunt!', __proto__: pet };

cat.legs; // => 4
dog.legs; // => 4
pig.legs; // => 4
// cat, dog, and pig all reuse the property legs.

const pet = { legs: 4 };

const chicken = { sound: 'Cluck!', legs: 2, __proto__: pet };

chicken.legs; // => 2
// chicken.legs evaluates to 2. JavaScript picks the own property legs (which is 2) over the inherited legs (which is 4).

Object.fromEntries(i)
// {1: "gyan", 2: "prakash", 3: "kumar"}
i.hasOwnProperty(5)
// false
i.hasOwnProperty(1)
// true

let simpleColors = {
  colorA : 'white',
  colorB : 'black'
};
// undefined
let natureColors = {
  colorC : 'green',
  colorD : 'yellow'
};
// undefined
Object.setPrototypeOf(natureColors , simpleColors)
// {colorC: "green", colorD: "yellow"}colorC: "green"colorD: "yellow"__proto__: colorA: "white"colorB: "black"__proto__: Object
Object.keys(natureColors)
// (2) ["colorC", "colorD"]
natureColors['colorA']
// "white"

let meals = {
  mealA: 'Breakfast',
  mealB: 'Lunch',
  mealC: 'Dinner'
};
for (let [key, value] of Object.entries(meals)) {
  console.log(key + ':' + value);
}
// 'mealA:Breakfast' 'mealB:Lunch' 'mealC:Dinner'

let greetings = {
  morning: 'Good morning',
  midday: 'Good day',
  evening: 'Good evening'
};
let greetingsMap = new Map(Object.entries(greetings));
greetingsMap.get('morning'); // => 'Good morning'
greetingsMap.get('midday');  // => 'Good day'
greetingsMap.get('evening'); // => 'Good evening'



/*************** constructor function ********************/

// Defining the object type by writing constructor function.
// create a instance of object by writing new.

function Car(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new Car('MG','hector+',2017)


// constructor property return a refrence to the object constructor function that created instance object

let o = {};
o.constructor === Object // true.

let a = [];
a.constructor === Array // true.

let n = new Number;
n.constructor === Number // true.


// this will call the window object when it will call globally
console.log(this)
// windows{};


/******************* Map *******************/
// The difference between map and object are it has size property.
// if we want to do keep the keys as object we can do it by using WeakMap.





function getName(){
  return this.fistName + ' ' + this.secondName;
}

var Name = {
  firstName : 'Gyan',
  secondName : 'prakash'
} 

getName.call(Name); // "Gyan prakash"
getName.apply(Name); // "Gyan prakash"

this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81


// we can create methods using class in javascript.
class Polygon{
  constructor(sides){
      this.sides = sides
  }
  
  perimeter(){
      let sum = 0
      for(let i=0; i<this.sides.length; i++){
          sum = sum+this.sides[i]
      }
      return sum;
  }
}
const rectangle = new Polygon([1,2,3,4,5]);


