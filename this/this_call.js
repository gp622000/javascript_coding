function getName(third){
    return this.firstName + this.secondName + third; 
}

const obj = {
    firstName : 'Gyan',
    secondName : 'prakash'
}

const call = getName.call(obj,'kumar');
console.log(call)