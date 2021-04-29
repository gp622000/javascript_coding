var obj = {
    bar : function(){
        var x = (()=>this)
        return x;
    }
};

// the this of bar will be refere to the obj object
var fn = obj.bar()
console.log(fn() === obj) // true.

var fn2 = obj.bar
console.log(fn2() === window) // false.


this.table = 'window table'

const cleanTable = function(soap){
    const innerFunction = function(_soap){
        console.log(`log ${this.table} using ${_soap}`)
    }
    innerFunction(soap);
}
// Error because innerfunction cannot have object with this.

// 1st solution assign this to any variable that.
const cleanTable = function(soap){
    let that = this
    const innerFunction = function(_soap){
        console.log(`log ${that.table} using ${_soap}`)
    }
    innerFunction(soap);
}// log window table using soap
cleanTable.call(this,'some shoap')

// 2nd solution apply call on this.

const cleanTable = function(soap){
    const innerFunction = function(_soap){
        console.log(`log ${that.table} using ${_soap}`)
    }
    innerFunction.call(this,soap);
}// log window table using soap
cleanTable.call(this,'some shoap')

//3rd solution is to apply arrow function 
const cleanTable = function(soap){
    let that = this
    const innerFunction = (_soap)=>{
        console.log(`log ${that.table} using ${_soap}`)
    }
    innerFunction(soap);
}// log window table using soap
cleanTable.call(this,'some shoap')


var createRoom = function(name){
    this.table = name;
}

const jillsRoom = new createRoom('gyan')//
// 'gyan'

// to create a method inside the prototype of the createRoom we will use this.

createRoom.prototype.cleanTable = function(){
    console.log(`clearning ${this.table}`)
}
