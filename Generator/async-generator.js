// Async generator functions behave similarly to generator functions: the generator function returns an object that has a next() function, and calling next() executes the generator function until the next yield .
//  The difference is that an async iterator's next() function returns a promise


async function* func(){
    let i = 0;
    while(i<3){
        yield i++;
    }
}

(async function(){
    for await(let i of func()){
        console.log(i);
    }
})();