// The Symbol.asyncIterator well-known symbol specifies the default AsyncIterator for an object. If this property is set on an object, it is an async iterable and can be used in a for await...of loop.
// Symbol.asyncIterator specifices the defualt asynciterator for an object
// it returns promise and can be used in a for await...of loop.

// these are no writable no enumerable and no configurable.

// object to be async iterable must have symbol.asyncIterator in a key.


// for await creates a loop iterating over async objects as well as sync iterables .


const myAsyscIterable = {
    async *[Symbol.asyncIterator](){
        yield "hello";
        yield "async";
        yield "iteration."
    }
};

(async () => {
    for await (const x of myAsyscIterable){
        console.log(x);
        // "hello"
        // "async"
        // "iteration"
    }
})()

