// const promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log('Got the user');
//         //resolve({user : 'ed'})
//         reject(new Error('User not logged in'));
//     },2000)
// });

// promise
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })


// appliying promises to the first code

// Syncronous code example.

// function func(){
//     console.log('we are in the function')
// }

// Asyncroous code example 

console.log('Start');
// func();

// setTimeout(()=>{
//     console.log('We are in the timeout function.')
// },2000)

// // start
// // End
// // We are in the timeout function.

function loginUser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('we are in setTime out')
            resolve({ userEmail : email})
        })
    })
}
    
     
function getUserVideos(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3'])
        },1000)
    })
  
}

function videoDetails(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('title of the video');
        },2000)
    })
}


loginUser('gyan@gmail.com','adjkfasldffjk')
    .then((data,reject)=>getUserVideos(data.userEmail))
    .then(data=>videoDetails(data[0]))
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
    

// Start undefined End we are in setTime out.
console.log('End');



p1.then(function(value) {
    console.log(value); // "Success!"
    return Promise.reject('oh, no!');
  }).catch(function(e) {
    console.error(e); // "oh, no!"
  }).then(function(){
    console.log('after a catch the chain is restored');
  }, function () {
    console.log('Not fired due to the catch');
  });

  var p1 = Promise.resolve("calling next");

  var p2 = p1.catch(function (reason) {
      //This is never called
      console.error("catch p1!");
      console.error(reason);
  });
  
  console.log(p1)
  console.log(p2)
  p2.then(function (value) {
      console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
      console.log(value); /* calling next */
  }, function (reason) {
      console.log("next promise's onRejected");
      console.log(reason);
  });
//   VM695:10 Promise {<fulfilled>: "calling next"}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "calling next"
//   VM695:11 Promise {<pending>}__proto__: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "calling next"
//   VM695:13 next promise's onFulfilled
//   VM695:14 calling next

var original = Promise.resolve(33)
var cast = Promise.resolve(original)

cast.then(function(value){
    console.log('Value: '+value)
})
console.log('original === caste ? '+(original === cast))

// Original === caste ? true.
// value : 33
