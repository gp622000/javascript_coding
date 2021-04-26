const yt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Getting stuff from youtube')
        resolve({ videos:[1,22,3,4]})
    },2000)
})

const fb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Getting stuff from facebook')
        resolve({ user:'Gyan'})
    },1000);
})

// this is used when we want all the promises will send the data at the same
Promise.all([yt,fb]).then(result => console.log(result));