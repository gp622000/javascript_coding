// once the call stack is empty then the even loop will take callbacks from microtask quere or from callback queue are sent it to call stack for excecutions.
// Microtask queue will only contains callback from promises and mutationn obj.
// callback will stay in the web API's regiter till it gets response.


console.log("Start");

setTimeout(function cbt(){
    console.log('Cb SetTimeout');
},5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log('CB Netflix');
});

console.log('End')



setTimeout(function(){
    console.log("timer")
},5000);

function x(y){
    console.log("x")
    y();
}

x(function y(){
    console.log('y');
})