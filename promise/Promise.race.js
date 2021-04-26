// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.



const yt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('in the youtube');
        resolve({video:[123,213,213231]})
    },2000)
})

const fb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('in the fb part');
        resolve({user:'gyan'})
    },2000)
})

Promise.race([yt,fb]).then(result=>console.log(result));


// Outcome: as the first promise resolve. s
// in the youtube
//{ video: [ 123, 213, 213231 ] } it is printing resolve value.
//in the fb part