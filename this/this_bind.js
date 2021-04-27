function getName(third){
    return this.firstName + this.secondName + third; 
}

const obj = {
    firstName : 'Gyan',
    secondName : 'prakash'
}
// bind will return method
const call = getName.bind(obj,'kumar');
// so we ned to call that method for its working.
console.log(call())