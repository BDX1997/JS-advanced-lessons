//LS10  JS作用域及执行上下文

//JS作用域
var a = 10,
	b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500 20 200 600

//JS词法作用域
var name = "jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();
//jack

//词法作用域 与调用形式无关
var name = "jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "bill";
    echo();
}
foo();
//jack


//new Function实例化对象的函数对象
var scope = "g";
function foo(){
    var scope = "1";
    return new Function("console.log(scope);")
}
foo()();
//g

//变量污染  变量共享
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
//...................................................
var a=2,b=3;
if(a<3){
    var userId = 234;
}
//undefined


//解决方法     使用IIFE来解决上述问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//................
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());

