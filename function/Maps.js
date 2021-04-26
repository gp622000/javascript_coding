const a = {}
const b = {
    num  : 1
}

// a[a] = 1
// a[b] = 2

// [...a] // gives error a is not itterable.

// so here is the problem because it canot store the objects as a key.
const map = new Map();
// map has iterator property so we can use for of loop
// normal object don't have actually.
// because of the iterator property we can convert map object to array by using spread operator.
map.set(a,'a')
map.set(b,'b')
map.set(a,'c')
// console.log(map);
// for(let[key,value] of map){
//     console.log(key,'=',value)
// }

const ary = [...map];
// console.log(ary.flat());
// console.log(ary);

// why do we need weakMaps

{
    let x = {
        a : [1,2]
    };

    var m = new Map();
    m.set(x,'Something');
}

// x is only available till this block but no the Map is attached to it will have the value .
// console.log(map);

// for making that garbage collector we will use weak Map.

{
    let c = {
        a : [1,2]
    }

    var maap = new WeakMap();
    maap.set(c,'something new')
}
// weakMap are not iterable.
console.log(...maap);
