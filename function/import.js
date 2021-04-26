// to use the module we need to emmbeded the js file into html and we need to write type = "moduule" in the source file.


// const func = require('./export')

// console.log(func.square(2,3));


import {add} from './export.js';

console.log(add(2,3));