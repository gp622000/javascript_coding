//function* add(num){
    //     const num = yield;
    //     yield 2 + num;
    //     yield 4 + num;
    // }

// import { connected } from "node:process";

    
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
    // console.log(stringIterator.next())
    
    // let map = new Map()
    // map['1'] = 'gyan'
    // map['2'] = 'prakash'
    // const mapIterator = map[Symbol.iterator]();
    // console.log(mapIterator.next());
    
    
    // to make normal function iterator we will use generator.
    
    // const object = { 'name':'gyan'}
    
    // object[Symbol.iterator] = function* (){
    //     yield this;
    // }
    
    // const arr = [...object]
    // console.log(arr);

// it will run till the last line of the code or find return the value 
// function* indexGenerator(){
//     var index = 0;
//     while(true){
//         yield index++;
//     }
// }

// const g = indexGenerator();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

//console.log(indexGenerator().next())// error in nodejs 

// const getIndex = function* (){
//     let index = 0;
//     while(true){
//         yield index++;
//     }
// }
// const ge = getIndex()
// console.log(ge.next())


// const obj = {
//     *indexGenerator(){
//         var index = 0;
//         while(true){
//             yield index++;
//         }
//     }
// }

// const gen= obj.indexGenerator();
// console.log(gen.next());
// console.log(gen.next());