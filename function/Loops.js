// do while it will run code once when the condition is not meet
// what i mean to say is here

var i = 0;
undefined
do {
    console.log(i)
}while(i!=0);
// 0

/***********     while ********* */
// loop through block when certain condion meets.
var i = 0;
while(i<5){
    console.log(i)
    i++;
}
// 0
// 1
// 2
// 3
// 4
// 5.

for(var i=0; i<5 ; i++){
    console.log(i)
}
// 0
// 1
// 2
// 3
// 4

for(var i=0;;i++){
    console.log(i)
  }
  // prints infitie loop.

var s = 5
switch(s){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break
    case 4:
        console.log(4)
        break
    case 5:
        console.log(5);
        break
    default:
        console.log('Number is not here');
}

// if we don't write break after every case then it will print every case after match even default.
var s = 3;
switch(s){
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  case 3:
    console.log(3)
  case 4:
    console.log(4)
  case 5:
    console.log(5)
  default:
    console.log("The number is not here");
}
// 3
//  4
//  5
//  The number is not here

// if we don't write anything on the switch case then it will gives the syntax error.

const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}
// VM1379:8 Uncaught SyntaxError: Identifier 'message' has already been declared

// because here the let variable is already declared for 1 block and again it is redecleared for the same block.
// it happens because of hoisting.

const action = 'say_hello';
switch (action) {
  case 'say_hello':{
    let message = 'hello';
    console.log(message);
    break;}
  case 'say_hi':{
    let message = 'hi';
    console.log(message);
    break;}
  default:{
    console.log('Empty action received.');
    break;}
}
//  hello