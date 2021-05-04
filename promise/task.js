// console.log('start')

// setTimeout(()=>{
//     console.log('5')
//     setTimeout(()=>{
//         console.log('1')
//         setTimeout(()=>{
//             console.log('3')
//         },3000)
//     },1000)
// },5000)

// console.log('End')

// new Promise((resolve,reject)=>{
//     console.log('Initial')
//     resolve()
// }).then(()=>{
//     throw new Error('Something failed')
// }).catch(()=>{
//     console.error('Do that')
// }).then(()=>{
//     console.log('Do this, no matter')
// });

// const posts = [
//     { title:'Post One',body:'This is post one'},
//     { title:'Post Two',body:'This is post two'}
// ]

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post,index)=>{
//             output += post.title;
//         })
//         console.log(output);
//     }, 1000);
    
// }

// // function createPost(post,callback){
// //     setTimeout(() => {
// //         posts.push(post)
// //         callback()
// //     },2000);
// // }


// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             posts.push(post)
//             const error = false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject('Error: Something went wrong')
//             }
//         }, 2000);
//     })
// }

// // createPost({title:'post three',body:'this is post three'})
// // .then(getPosts)
// // .catch(err=>console.log(err))


// async function init(){
//     await createPost({title:'post three',body:'this is post three'});
//     getPosts();
// }

// init();



// DOM // EVENTS// EVENTAMMERTERS// EVENT BUBBLING


// async function f(){

//     let promise = new Promise((res,rej)=>{
//         res('done')
//     })

//     let result = await promise;
//     console.log(result);
// }

// f()
// console.log('End')
// i

// let promise = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res('5')
//     }, 5000);
// });

// promise
//     .then(functon(data){
//         console.log(data);
//         return new Promise((res,rej)=>{
//             setTimeout(() => {
//                 res('2')
//             },2000);
//         })
//     })
//     .then(function(data){
//         console.log(data)
//         return new Promise((res,rej)=>{
//             res('3')
//         })
//     })
//     .then(data=>console.log(data))


//  function fiveSec(){
//         return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res('5')
//         }, 5000);
//     })
// }

// function twoSec(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res('2')
//         }, 2000);   
//     })
// }

// function oneSec(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res('1')
//         }, 1000);
//     })
// } 

// fiveSec()
// .then(data=>{
//     console.log(data)
//     twoSec().then(data=>{
//         console.log(data)
//         oneSec().then(data=>console.log(data))
//     })
// })

// .catch(err=>console.log(err.message))




// async function myFunc() {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(console.log('5sec'));
//         }, 5000);
//     });

//      new Promise((resolve) => {
//         setTimeout(() => {
//             // Resolve the promise
//             resolve(console.log('2sec'));
//         }, 2000);
//     });

//      new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(console.log('1Sec'))
//         }, 1000);
//     })
// }

// // Call the function
// myFunc()


let promise1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('5')
    }, 5000);
})

let promise2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('2')
    }, 2000);
})

let promise3 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej('1')
    }, 1000);
})

let promise4 = Promise.all([promise3,promise1,promise2])
promise4.then(data=>console.log(data))