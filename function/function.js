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

