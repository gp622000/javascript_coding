// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.


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

const promise = Promise.allSettled([yt,fb])
promise.then(result=>console.log(result));


// OutCome:
// in the youtube
// in the fb part
// [
//   { status: 'fulfilled', value: { video: [Array] } },
//   { status: 'fulfilled', value: { user: 'gyan' } }
// ]