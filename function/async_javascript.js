// once the call stack is empty then the even loop will take callbacks from microtask quere or from callback queue are sent it to call stack for excecutions.
// Microtask queue will only contains callback from promises and mutationn obj.
// callback will stay in the web API's regiter till it gets response.

// So the async keyword is added to functions to tell them to return a promise rather than directly returning the value

async function hello() { return "Hello" };
hello();

// same as.
let hello = async function() { return "Hello" };
hello();

// hello().then((value) => console.log(value))

// The advantage of an async function only becomes apparent when you combine it with the await keyword.

// await only works inside async functions within regular JavaScript code, however it can be used on its own with JavaScript modules.

fetch('coffee.jpg')
    .then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! status ${response.ok}`)
        }
        return response.blob();
    })
    .catch(e => {
        console.log('There  has been a problem with your fetch operation' + e.message);
    })

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


// // const user =  loginUser('gyan@123',12345,(user)=>{
// //     console.log(user);
// //     getUserVideos(user.userEmail,(videos)=>{
// //         console.log(videos)
// //         videoDetails(videos[0],(title)=>{
// //             console.log(title);
// //         })
// //     })
// // });
// // console.log(user) // it is giving undefined because setTimeout is a async webAPI so till that the undefined is store in the user variable.
// // to solve this issue we will use callback function(passing function as a argument of another function)

// function loginUser(email,password){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             console.log('now we have a data');
//             resolve({ userEmail : email})
//         },5000)
//     })
   
// }

// function getUserVideos(email){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(['video1','video2','video3']);
//         },1000)
//     })
// }
    

// function videoDetails(video){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve('title of the video');
//         },2000)
//     })
    
// }

// // const user =  loginUser('gyan@123',12345,(user)=>{
// //     console.log(user);
// //     getUserVideos(user.userEmail,(videos)=>{
// //         console.log(videos)
// //         videoDetails(videos[0],(title)=>{
// //             console.log(title);
// //         })
// //     })
// // });

// // loginUser('gyan@123','gyan')
// //     .then(user => getUserVideos(user.userEmail))
// //     .then(videos => videoDetails(videos))
// //     .then(details => console.log(details))

// // console.log('End')

// // const yt = new Promise(resolve => {
// //     setTimeout(() => {
// //         console.log('getting stuff from youtube');
// //         resolve({videos:[1,2,34,5]})
// //     },2000)
// // });

// // const fb = new Promise(resolve => {
// //     setTimeout(() => {
// //         console.log('getting stuff from facebook');
// //         resolve({user: "Name"})
// //     },2000)
// // })

// // // if we want the data same time not one by one then we will use this.
// // Promise.all([yt,fb])
// //     .then(result => console.log(result));

// // async

// async function displayUser(){
//     try{
//         const logged = await loginUser('ed',13485);
//         const videos = await getUserVideos(logged.userEmail)
//         const detail = await videoDetails(videos[0]);
//         console.log(detail);
//     }catch(err){
//         console.log( new Error('We could not get the videos'))
//     }
    
// }

// // displayUser()


// console.log('End');
