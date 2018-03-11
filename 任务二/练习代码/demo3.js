//值比较和引用比较
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);
console.log(a1 === b1);

var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);
console.log(a2 === b2);

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);
console.log(a3 === b3);

b3 = new Number(200);
console.log(a3 === b3);

//思考
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);
console.log(a4 === b4);

var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 == b5);
console.log(a5 === b5);