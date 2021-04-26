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

function loginUser(email,password,callback){
    setTimeout(()=>{
        console.log('we are in setTime out')
        callback({ userEmail : email})
    },1500)
}

// here loginUser is function having async inside it.
// when the setTiout goes to the queue then the loginUser will pop from the callStack and function return undefined

function getUserVideos(email,callback){
    setTimeout(()=>{
        callback(['video1','video2','video3'])
    },1000)
}

function videoDetails(video,callback){
    setTimeout(()=>{
        callback('title of the video');
    },2000)
}


// if we don't give callback then the value for this looginUser function will lost.
const user = loginUser('gyan@gmail.com',232343 , user => {
    console.log(user);
    getUserVideos(user.userEmail,videos =>{
        console.log(videos);
        videoDetails(videos[0],title=>{
            console.log((title))
        })
    })
})

// without callback.
// Start undefined End we are in setTime out.

// we can also write like this

// new Promise((resolve,reject)=>{
//     try{
//         const data = 'any thing';
//         resolve(data);
//     }catch(e){
//         reject(new Error(e))
//     }
// })

console.log('End');

