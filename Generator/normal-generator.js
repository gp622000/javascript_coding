function* generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    console.log(5);
}

for(let i of generator()){
    console.log(i);
}

var iterator = generator();
console.log(iterator.next())
console.log(iterator.next())
