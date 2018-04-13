//JS闭包
function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3 = f1();
console.log(f3);//1
console.log(f3);//1

function f1(){
    var x = 1;
    function f2(){
        return x++;
    }
    return f2;
}
var f3 = f1();
console.log(f3());//1
console.log(f3());//2

//例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);
console.log(inc(1));//9
console.log(inc2(1));//6

//例三
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar();
}
foo();//1
foo();//1


//例四
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1



//闭包的常见形式
var tmp = 100;
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); 
fee(10);//16
fee(10);//17
fee(10);//18


function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); 
bar(10); //15 1
bar(10); //15 2
bar(10); //15 3


function fn() {
    var max = 10;
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else{
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15


function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2

function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();


function closureExample(objID, text, timedelay) {
    setTimeout(function() {
        //document.getElementById(objID).innerHTML = text;
        console.log(objID,text);
    }, timedelay);
}
closureExample("myDiv","Closure is Create", 2000);