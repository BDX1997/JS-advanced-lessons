//基本（原始）数据类型与引用（对象）类型的区别 赋值功能不同
var str_a = "a";
var str_b = str_a;
str_b = "b";
console.log(str_a,str_b);

var obj_a = {v:"a"};
var obj_b = obj_a;
obj_b.v = "b";
console.log(obj_a,obj_b);
obj_b = {v:"c"};
console.log(obj_a,obj_b);

var obj_c = {x1:2,y1:3};
var obj_d = {x2:2,y2:e};

console.log(obj_c.x1 === obj_d.x2);