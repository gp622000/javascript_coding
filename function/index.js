
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
// }
// console.log(c)
// console.log(b)
// function z(){
//     var b = 400;
//     function x(){
//         var a = 100;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x()
// }
// z();

// var name = {
//     firstName : 'Gyan',
//     lastName : 'pakash',
//     printFullName : function(){
//         console.log(this.firstName + ' ' + this.lastName);

//     }
// }

// name.printFullName()

// function x(){
//     x = 10;
//     function y(){
//         console.log(x);
//     }
//     y();
// }
// x()


// console.log("Start");

// // it will call the callback function once the time hasbeen over.
// setTimeout(function(){
//     console.log('Callback of setTimeout')
// },1000);


// // it will call the callback after every specified time.
// let refreshInterval = setInterval(function cbt(){
//     console.log('Cb SetTimeout');
// },1000);

// clearInterval(refreshInterval);
// // fetch("'https://example.com/movies.json")
// // .then(response => response.json())
// // .then(data => console.log(data));

// console.log('End')

log();
function log(){
    console.log('checking for hoisting');
}
console.log(x)
x = 10