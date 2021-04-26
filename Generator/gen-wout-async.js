function* generator(){
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.resolve(3);
    yield 4;
}

(async function(){
    for await(let num of generator()){
        console.log(num);
    }
})();

for(let num of generator()){
    console.log(num);
}
