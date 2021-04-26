function getImage(file){
    return new Promise((res,rej)=>{
        try{
            const data = readFile(file);
            resolve(data)
        }
        catch(err){
            reject(new err)
        }
    })
}

// getImage('/image.png'){
//     .then(image => compressImage(image))
//     .then(compressedImage => aplyfilter(compressedImage))
//     .then(filteredImage => saveImage(filteredImage))
//     .then(res => console.log('successfully saved image!'));
//     .catch(err => throw new Error(err))
// }

Promise.resolve('Promise!')
    .then(res => console.log(res))

console.log('End!');

const one = () => Promise.resolve('One!');

async function myFunc(){
    console.log('In function');
    const res = await one()
    console.log(res)
}

console.log('Before function')
myFunc();
console.log('After function');


function slowAddition(n1 , n2){
    return new Promise(resolve => {
        setTimeout(()=> resolve(n1 + n2))
    })
}

slowAddition(1,5).then(sum => console.log(sum))



const promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'one');
});

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,100,'two');
});

Promise.race([promise1,promise2]).then((value) => {
    console.log(value);
});

// output : 'two'


// any(if any promise resolve return that ) if all promise wil give error then aggregate error happens.
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

// Promise.allSettled()

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
    console.log(p);
    console.log(p2);
    console.log(p3);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }


// / All method
// Trigger `catch` Method, if any one promise rejected.
// Trigger `then` Method, once every promise fulfilled.
// Promise.all([promise1, promise2]);
// Race method
// Trigger `catch` Method, if any one promise rejected.
// Trigger `then` Method, if any one promise fulfilled.
// Promise.race([promise1, promise2]);