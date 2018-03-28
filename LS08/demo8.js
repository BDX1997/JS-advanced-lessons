//函数对象
//JS中函数也是对象
function foo(){}
console.log(foo);//foo(){}
console.log(typeof foo);//function
console.log(foo instanceof Object);//true
console.log(foo instanceof Function);//true
console.log(foo === window.foo);//true

console.log(typeof Function);//function
console.log(typeof Array);//function
console.log(typeof Date);//function
console.log(typeof Error);//function
console.log(typeof Math);//object
console.log(typeof JSON);//object

console.log(typeof new Function());//function
console.log(typeof new Array());//object
console.log(typeof new Date());//object

console.log(Function instanceof Function);
console.log(Function instanceof Object);

console.log(Array instanceof Function);
console.log(Array instanceof Object);

console.log(Date instanceof Function);
console.log(Date instanceof Object);

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);
                                       //其余全为true

var foo = function (a,b){
    console.log(arguments);
    console.log(arguments === test.arguments);

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);

//函数对象属性之length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("1");
    }else{
        alert("2");
    }

}
checkVarCount(1, 2);
//2
checkVarCount(1);
//1

function test() {
    if (test.caller == null) {
        console.log("1");
    }else {
        console.log("2");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为:",test.caller);
test();//1

function testOuter() {
    test();
}
testOuter();
//2
//function testOuter() {
//    test();
//}

var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数

var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
};
console.log(func(4));//24

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();
console.log(li.sex);//M

//高阶函数
//函数作为参数被传递（最常见的形式，回调函数）
function add(x,y,f) {
    return f(x) + f(y);
}
add(2,3,function(x){
    return x+1;
});
add(2,-3,Math.abs);
add(2,3,Math.sqrt);

//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);
function foo(x,y,c1,c2){
    return 2*c1(x)-3*c2(y);
}
function f1(x){
    return x+1;
}
function f2(x){
    return x-1;
}
function f3(x){
    return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // (9) [1, 4, 9, 16, 25, 36, 49, 64, 81]

//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}//number

//reduce 相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1,3,5,7,9];
arr.reduce(function f(x,y) {
    return x + y;
});//25

//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

//sort 排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]



//函数作为返回值输出
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出: ƒ fun2() {
                                //    return this.x;
                                //}
console.log("输出：",obj.fun3()());//12
console.log("输出：",obj.fun4());//34
