function iterator(){
    let step = 0;
    return {
        next(){
            if(step<3){
                return {value : step++ , done : false}
            }
            return { value : undefined , done: true}
        }
    }
}

const iterable = {}
iterable[Symbol.iterator] = iterator;
console.log(iterable);
for(let i of iterable){
    console.log(i)
}