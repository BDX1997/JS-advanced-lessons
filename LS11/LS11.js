//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()

// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);


//文件内的变量污染问题,尤其是异步执行的情况下
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//一长串代码后，假如看不见上述代码了
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());

//解决方法
(function () {  // IIFE开始
var x = 10;
document.onclick = function () {
    // console.log("x = ",x);
    alert("x = "+x);
};
})(); 

//IIFE 解决变量共享问题
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();


//局部变量的案例
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出几？
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();

//避免闭包中非期望的变量共享问题，如下例子
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {

        tabs[i].onclick=function(){
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
            }
            this.className = "active";
            contents.innerHTML = "导航" + i + "内容";
        };

}

//通过IIFE解决变量共享问题
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}