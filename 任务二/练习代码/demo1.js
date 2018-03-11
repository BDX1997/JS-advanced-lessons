//类型检测 typeof
console.log(typeof 123);
console.log(typeof false);
console.log(typeof "def");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name:"tom",age:14});
console.log(typeof function myFunction(){});

//思考
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof NUmber);
console.log(typeof Math);
console.log(typeof JSON);

//类型检测 instanceof
undefined
var a ={name:"tom",age:13};
console.log(a instanceof Object);
var b = [12,34,{},""];
console.log(b instanceof Array);
var Person = function(){

};
var p1 = new Person();
console.log(p1 instanceof Person);

