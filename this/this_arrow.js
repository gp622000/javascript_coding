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