const obj = {
    name : 'gyan',
    getName(){
        return this.name;
    }
}

z = obj.getName;
console.log(z)