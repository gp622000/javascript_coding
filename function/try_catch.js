try{
    f()
    throw 'Reference error'
}catch(err){
    console.log(`error is ${err}`)
}finally{
    console.log('Done')
}

function isPositive(a) {
    if(a>0){
        return 'YES'
    }
    else if(a === 0){
        throw new Error('Zero Error')
    }
    else{
        throw new Error('Negative Error')
    }
}