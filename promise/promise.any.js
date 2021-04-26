// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError,


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


const promise = Promise.any([yt,fb])
promise.then(result=>console.log(result));