// Javascript used the concept call hoisting
// function declaration and variable declaration puts into the memory before the code execution.
// on compile time the function and variable got memory.

car('BMW')
function car(name){
  console.log(name)
}

// Hoisting will only do declaration not initialization.
console.log(num)
// undefined
var num; // Declartion
num = 6; // Initialization

console.log(num); // Throws referance error exception.
num = 6 // only Intialization.

// if we declare anything by using const then we need to initialize it also.
a = 1;
const a; // Throws SyntaxError : Missing initializer.

a = 1;
let a // can't access 'a' before initialization.

// Functions and variables are stored in memory for an execution context before we execute our code. This is called hoisting.

// Functions are stored with a reference to the entire functions, variables with the var keyword with the value of undefined, and variables with the let and const keyword are stored uninitialized.


// function with their lexical 
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x()
console.log(z);


let name = {
    firstName : 'gyan',
    lastName : 'prakash',
    printfullName : function(address){
        console.log(this.firstName + " " + this.lastName + address)
    }
}
name.printfullName();

let name2 = {
    firstName = "Gyan",
    lastName = "prakash"
}

// call and apply are function borrowing
console.log(name.printfullName.call(name2,'Rampur Nausahan'))


let getfullName = function(address){
    console.log(this.firstName + " " + this.lastName + " " + this.getfullName)
}

getfullName.call(name1)

// the difference between call and apply is that call will take argurmnet directly but apply takes as list

name.printfullName(name1,["Rampur Nausahan"]);

// bind method will return a method which will call later it directly not printing the method.
let printMyName = getfullName.bind(name1,"rampur")
printMyName();

// eventListener with closures.

function attachEventListner(){
    let count = 0;
    document.getElementById('clickMe')
    .addEventListener('click',function(){
        console.log('Button Clicked',count++)
    })
}
attachEventListner();