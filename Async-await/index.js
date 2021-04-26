// async and await are used only with promises
// if any await will reject then it would print undefined

// async implicitly return a promise.
// Promise.resolve('Hello') is same as 
// async function greet(){
//     return 'Hello'
// }
// greet()
// Promise {<fulfilled>: "hello"}

// Although the fact that async functions implicitly return promises is pretty great, 
// the real power of async functions can be seen when using the await keyword! With the await keyword, 
// we can suspend the asynchronous function while we wait for the awaited value return a resolved promise.
//  If we want to get the value of this resolved promise, like we previously did with the then() callback, we can assign variables to the awaited promise value!



function loginUser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('we are in setTime out')
            resolve({ userEmail : email})
        },2000)
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
        },3000)
    })
}

// for Error handdling we will use try catch block.

async function displayUser(){
    try{
        const loggedUser = await loginUser('gyan@gmail.com',1221323);
    // ReferenceError: Cannot access 'loginUser' before initialization
    // this occurs because we give same name as variable
        const videos = await getUserVideos(loggedUser.userEmail);
        const details  = await videoDetails(videos[0])
        console.log(details);
    }catch(err){
        console.log('We could not get the videos');
        console.log(err.message);
    }
}

displayUser();

