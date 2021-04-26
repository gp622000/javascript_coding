
// // {
// //     var a = 10;
// //     let b = 20;
// //     const c = 30;
// //     // console.log(a);
// //     // console.log(b);
// //     // console.log(c);
// // }
// // console.log(c)
// // console.log(b)
// // function z(){
// //     var b = 400;
// //     function x(){
// //         var a = 100;
// //         function y(){
// //             console.log(a,b);
// //         }
// //         y();
// //     }
// //     x()
// // }
// // z();

import { name } from "./export"

// // var name = {
// //     firstName : 'Gyan',
// //     lastName : 'pakash',
// //     printFullName : function(){
// //         console.log(this.firstName + ' ' + this.lastName);

// //     }
// // }

// // name.printFullName()

// // function x(){
// //     x = 10;
// //     function y(){
// //         console.log(x);
// //     }
// //     y();
// // }
// // x()


// // console.log("Start");

// // // it will call the callback function once the time hasbeen over.
// // setTimeout(function(){
// //     console.log('Callback of setTimeout')
// // },1000);

// // setTimeout(function(){
// //     console.log('Callback 2')
// // })

// // console.log('End');

// // // it will call the callback after every specified time.
// // let refreshInterval = setInterval(function cbt(){
// //     console.log('Cb SetTimeout');
// // },1000);

// // clearInterval(refreshInterval);
// // // fetch("'https://example.com/movies.json")
// // // .then(response => response.json())
// // // .then(data => console.log(data));

// // console.log('End')

// // log();
// // function log(){
// //     console.log('checking for hoisting');
// // }
// // console.log(x)
// // let x = 10



// // Closures

// // function x(){
// //     var i = 5;
// //     function y(){
// //         console.log(i)
// //     }
// //     return y
// // }

// // var z = x()
// // z();

// // console.log('Start');


// // setTimeout(() => {
// //     console.log('Timeout!')
// // },0);

// // Promise.resolve('Promise!')
// //     .then(res => console.log(res))

// // console.log('End!');

// // async function fetchMovies() {
// //     const response = await fetch('https://api.example.com/movies');
// //     if (!response.ok) {
// //       throw new Error('Failed to fetch movies');
// //     }
// //     const movies = await response.json();
// //     return movies;
// //   }
  
// //   console.log('start')


// console.log('start')

// // function loginUser(email,password,callback){
// //     setTimeout(()=>{
// //         console.log('now we have a data');
// //         callback({ userEmail : email})
// //     },5000)
// // }

// // function getUserVideos(email , callback){
// //     setTimeout(() => {
// //         callback(['video1','video2','video3']);
// //     },1000)
// // }

// // function videoDetails(video,callback){
// //     setTimeout(()=>{
// //         callback('title of the video');
// //     },2000)
// // }

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



// console.log(x) // 20
// var x = () => {}

// const a = [1,2,3];
// console.log(...a) // 1 2 3 removes the , and []
// console.log([...a]); // [1,2,3]

// function fun(...args){
//     console.log(args)
// }

// fun(1,2,3) // [1,2,3]


// generator is basically used to pause the code like normally function and any code runs in single go but we can pause the code by using generator and yield

// function* add(num){
//     const num = yield;
//     yield 2 + num;
//     yield 4 + num;
// }

// var generator = add(); // returns a generator object with value and done property.

// console.log(generator.next()) // { value: undefined, done: false}
// console.log(generator.next(2)) // { value : 4 , done: false};

// function iterator(){
//     let step = 0;
//     return {
//         next: () => {
//             step++;

//             if(step === 1){
//                 return { value : '😘', done:false}
//             }

//             if(step === 2){
//                 return {value:'😂', done: false}
//             }

//             if(step === 3){
//                 return {value:'❤', done: false}
//             }
//             return { value : undefined , done: true}
//         }
//     }

// }

// // const itterable = {}
// // itterable[Symbol.iterator] = iterator;
// // console.log(...itterable); 

// Array.prototype[Symbol.iterator] = iterator;

// const string = 'hi';

// const stringIterator = string[Symbol.iterator]();

// console.log(stringIterator.next())
// console.log(stringIterator.next())
// console.log(stringIterator.next())

// function* myIterable(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const iterable = {}
// iterable[Symbol.iterator] = myIterable;
// console.log(iterable);




// const a = [1,2,3]
// const s = "gyan"

// const arrayIterator = a[Symbol.iterator]();
// const stringIterator = s[Symbol.iterator]()

// for(let i of arrayIterator){
//     console.log(i);
// }
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// console.log(arrayIterator.next())
// // console.log(stringIterator.next())

// // let map = new Map()
// // map['1'] = 'gyan'
// // map['2'] = 'prakash'
// // const mapIterator = map[Symbol.iterator]();
// // console.log(mapIterator.next());

// let contacts = new Map()
// contacts.set('Jessie',{ phone: '23234234', address : 'hajipur vaishali'})
// contacts.set('Hilary',{phone : '23234234324', address : 'akldjflasjdfl'})
// contacts.set('praveen',{phone:'123123123',address:'afdfkalsdkalsdlakd'})
// console.log(contacts.has('SDASD'));
// console.log(contacts.get('Hilary'));
// // console.log(contacts.delete('Hilary'));
// // console.log(contacts);
// // console.log(contacts.clear());

// const keyIterator = contacts.keys();
// // console.log(keyIterator.next())
// const valueIterator = contacts.values();
// // console.log(valueIterator.next())
// const  keyValueIter = contacts.entries();
// console.log(keyValueIter.next())

// console.log(contacts.size);
// const values = contacts.values()

// //console.log(Array.from(contacts))

// console.log([...contacts]);


// const mySet1 = new Set();

// mySet1.add(1)
// mySet1.add(5)
// mySet1.add(5)
// mySet1.add(6)

// o = { a: 1, a:2 }
// mySet1.add(o)
// console.log(mySet1);
// // console.log(mySet1[0]);
// for( let i of mySet1){
//     console.log(i);
// }


// {
//     let c = {
//         a : [1,2]
//     }

//     var maap = new WeakMap();
//     maap.set(c,'something new')
// }

// console.log(maap);

// import {add } from './export.js'
// console.log(add(2,3));



// import { add } from './export.js'
