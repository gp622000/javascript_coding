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
    .then(data=>console.log(data));
    

// Start undefined End we are in setTime out.
console.log('End');

