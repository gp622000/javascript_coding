
// Set will create a new object with having unique value on it.
// const set = new Set([1,2,2,4])
// set.add(4)
// set.add(5)

// console.log(set);

// set will only take the argument which is iterable.
// since javascript object are not iterable then it won't take objects as arguments.



// we can add only unique value to set duplicates value will automatically removes from the set.


// in weak set we will add key as object only not primitve datatype.

const ws = new WeakSet([{a:1},{b:2}])

ws.add(5) // Error invalid value to the weakSet.
ws.add({a:1})
