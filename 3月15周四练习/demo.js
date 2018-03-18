//知识点回顾
var a = [1,2,3];
var b = a;
console.log(a,b);//(3) [1, 2, 3] (3) [1, 2, 3]
b.pop();
console.log(a,b);//(2) [1, 2] (2) [1, 2]
b = [4,5,6];
console.log(a,b);//(2) [1, 2] (3) [4, 5, 6]

function foo(x){
    x.push(4);
	x = [5,6,7];
	x.push(8);
	console,log(x);//(4) [5, 6, 7, 8]
}
var a = [1,2,3];
foo(a);
console.log(a);//(4) [1, 2, 3, 4]

function foo(x){
    x.push(4);
	console.log(x);//(4) [1, 2, 3, 4]
	x.length = 0;
	x.push(5,6,7,8);
	console.log(x);//(4) [5, 6, 7, 8]
}
var a =[1,2,3];
foo(a);
console.log(a);//(4) [5, 6, 7, 8]

//语法二义性
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}

//表达式及表达式分类
//条件语句
var a = 2,b =3;
if(a>b){
    console.log("a>b");
}else{
	console.log("a<b");
}

function foo(){
    var a=b=3;
}
foo();
console.log("b",b);//b 3
console.log("a",a);//报错

//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);


//ES5中的块(没有块作用域)
{
    var a = 20;
}
console.log(a);//20
//在大括号外依然能访问到a的值

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);
//仍然可以输出

if(true){
    var a=20;
}
console.log(a);//20

if(false){
    var b = 30;
}
console.log(b);//undefined


//JS严格模式
//严格模式下全局变量需显示声明
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//123

function  sloppyFunc() {
    'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);//报错

//一般函数this在严格模式下为Undefined，在非严格模式下为全局变量
//可以检测是否在严格模式下
'use strict'
function isStrictMode() {
    return this === window?false:true;
}
console.log(isStrictMode());


//严格模式下禁止删除不可改变的属性的变量
var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);

function  sloppyFunc() {
    str.length = 7;
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    console.log(str.length);//
}
sloppyFunc();

function  strictFunc() {
    'use strict';
    console.log(Object.getOwnPropertyDescriptor(str,"length"));
    str.length = 7;
    console.log(str.length);
}
strictFunc();//报错

//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
'use strict';
delete foo;
delete window.foo;


//switch
var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}

// 利用switch的穿透性:求某月某日是一年中的第几天?
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);

//for ... in
//for ... in 遍历数组
var arr = [2,,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}

//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
//
var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
    console.log(k,obj2[k]);
}
