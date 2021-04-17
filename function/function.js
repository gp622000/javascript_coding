// function would be define in the javascript by writing function keyword
// function is group of statement which will perfrom some specific task


// 1. passing equal number of parameter

function multiply(a,b,c){
    return a*b*c;
}
console.log(multiply(2,4,2)); //OUtput would be 16

// 2. passing less number of parameter

console.log(multiply(2,4)); // output would be NaN

//3. passing more number of parameter then it would consider only 3
console.log(multiply(2,4,2,2)); // output would be 16

//4. when we don't know the number of parameter then the parameter goes in arguments object 
function printAll(){
    for(var i; i < arguments.length ; i++){
        console.log(arguments[i]);
    }
}

printAll("gyan","fullCreative","manirathan");
// prints everything that is in the parameter

// 4 when we pass less arguments and we give some value to parameter when function definition 
// then value passed as by default.

function findinterest(p,r=5,t=2){
    console.log('Interest over:',p*r*t);
}
findinterest(100)// works fine.
findinterest(100,3)// works fine
findinterest(100,8,2)// works fine.

//5. Rest Parameter we will pass rest parameter by writing ...parameter name
// it will work like array.

function addAtLeastThree(a,b,c,...numbers){
    var sum = a+b+c;
    for(var i = 0; i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(addAtLeastThree(10,20,30,40,50));

// 5. function inside funtion 

function totalCount(){
    var count = 0;
    function increaseCount(){
        count++;
    }
    increaseCount();
    increaseCount();
    increaseCount();
    return count;
}
console.log(totalCount());

//6 function Expression
// when the function is defined and assigned to a variable then that is mainly called as function Expression
var factorial = function fac(n){
    return n < 2 ? 1: n*fac(n-1);
}
console.log(factorial(3));

// 7 . IIFE
(function(a,b){
    var mul = a*b;
    console.log(mul);
})();


// usecases of anonymous function 
// Anonymous function is function without having name.
// use of anonymous function to passing arguments as another function.

var c = function(){
    console.log('Anonymous function')
}

// IIFE
// IIFE is defined by (function(){})(); it will call just after declearation
(function print(a){
    console.log(a)
})(5);

// test1.js

var greeting = 'Hello';



// iife.js
// Spelling of Function was not correct , result into error
// use - avoid creating global variable and function.
(function (name) { 
   var greeting = 'Namaste';
   console.log(greeting + ' ' + name);
})('Santosh');

console.log(greeting)   


// test1.js

var greeting = 'Hello';

// iife.js
// Spelling of Function was not correct , result into error
var c = function (name) { 
   var greeting = 'Namaste';
   console.log(greeting + ' ' + name);
}
c('gyan')
console.log(greeting)   
// Namste gyan
// Hello
var v, getValue;
v = 1;
getValue = (function (x) {
    return function () { return x; };
})(v);
v = 2;

getValue();  // 1

var iterator = a.entries()
// undefined
for(let e of iterator){
    console.log(e);
}
// VM4580:2 (2) [0, 1]
// VM4580:2 (2) [1, 2]
// VM4580:2 (2) [2, 3]
// VM4580:2 (2) [3, 4]


// difference between function statement and expression reflects in the hosting.
a() // print 'a called'
b() // b is not a function. because of hoisting.


// function statement  and declearation.

function a(){
    console.log('a called');
}

// function expression 
// when we put a function in the variable name then that called as function expression
var b = function(){
    console.log('b called')
}

// Anonymous function. will use when we need a function as values.
// if the anonymous function is define like function statement then it will give the error.
// function (){

// }

// first class function means we can pass the function as argument and also return fuction from function are called as first class function.

