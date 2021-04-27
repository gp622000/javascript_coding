var o = { a : 1, b:2}
Object.setPrototypeOf(o,{f: function(){return this.a + this.b} })

console.log(o.f())