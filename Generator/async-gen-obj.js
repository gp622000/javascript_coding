const asyncIterator = {
    [Symbol.asyncIterator](){
        return{
            i : 0,
            next(){
                if(this.i < 3){
                    return Promise.resolve({value : this.i++ , done: false});
                }
                return Promise.resolve({done:false})
            }
        }
    }
}

(async function(){
    for await(let num of asyncIterator){
        console.log(num);
    }
})();