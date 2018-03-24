//函数的定义与调用
//函数的定义有三种：
//               1.通过函数声明的形式来定义（需要函数名）
//               2.通过函数表达式的形式来定义（可以是没有函数名的匿名函数，但是有名字会方便调用栈追踪）
//               3.通过Function构造函数实例化的形式来定义（JS中函数也是对象，函数对象）

//函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);

//函数表达式方式
var max = function (a,b){
    return a>b?a:b;
};
max(2,3);
//栈追踪
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);

//Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);


//函数调用
//函数调用有4种方式（注意调用函数的主体）
//1.作为函数直接调用（非严格模式下this为全局对象，严格模式下为undefined）
//2.作为方法调用（this为调用此方法的对象）
//3.通过call()和apply()间接调用（移花接木）
//4.作为构造函数调用（this为实例化出来的对象）


//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window
//嵌套情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法


//call()间接调用  移花接木
//实例一
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB


//实例二
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);


//实例三
function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Tom");
p1.sayHi();

//函数参数的数量问题
//实参大于形参
function test() {
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
return s;
}
test("hello,","world!");


//实参小于形参
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
