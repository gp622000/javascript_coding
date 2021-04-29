
function Polygone(value){
    this.value = value;
    this.perimeter = function perimeter(){
        return this.value.reduce(function(accumlator,item){
            return accumlator+item;
        })
      }
  }
  
  

const rectangle = new Polygone([1,2,3,4,5])
console.log(rectangle.perimeter());
