// s = {
//     x : 5,
//     getValue(){
//        return this.x
//     }

// }

// const z = s.getValue;
// // console.log(z.getValue())

// console.log(z)



// // var o = {
// //     f : function() {
// //         return this.a + this.b;
// //     }
// // }
// // var p = Object.create(o);
// // p.a = 1;
// // p.b = 4;

// // console.log(p.f()); // 5;


// // var globalObject = this;
// // var foo = (() => this)
// // console.log(foo() === globalObject);

// var obj = {
//     bar : function(){
//         var x  = (()=> this);
//         return x;
//     }
// }

// var fn = obj.bar()



// var obj = {
//     x : 14,
//     getvalue: function(){
//       return this.x;
//     }
//   }
  
//   var unbounded = obj.getvalue;
//   console.log(unbounded())

// function Polygone(value){
//     this.value = value;
//     this.perimeter = perimeter
//   }
  
//   function perimeter(){
//     return this.value.reduce(function(accumlator,item){
//         return accumlator+item;
//     })
//   }

// const rectangle = new Polygone([1,2,3,4,5])
// console.log(rectangle.perimeter());


// function Polygone(value){
//     this.value = value;
//     this.perimeter = function perimeter(){
//         return this.value.reduce(function(accumlator,item){
//             return accumlator+item;
//         })
//       }
//   }
  
  

// const rectangle = new Polygone([1,2,3,4,5])
// console.log(rectangle.perimeter());

function Polygone(value){
    this.value = value;
}

Polygone.prototype.perimeter = function (){
    return this.value.reduce(function(accumlator,item){
        return accumlator+item;
    })
  }


  const rectangle = new Polygone([1,2,3,4,5])
  console.log(rectangle.perimeter());


class Rectangle{
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function(){
    return this.w * this.h;
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
    console.log(p1.distance(p1, p2));
}
catch (exception) {
    console.log(exception.name + ': ' + exception.message);
}