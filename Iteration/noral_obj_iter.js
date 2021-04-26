const iterator = {
    [Symbol.iterator](){
        return {
            i:0,
            next(){
                if(this.i < 3){
                    return { value : this.i++ , done:false};
                }
                return {value : undefined, done:true}
            }
        }
    }
}

for(let i of iterator){
    console.log(i);
}