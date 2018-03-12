//String类型的值
var str = "abc_def_ghi_jkl_mn";
str.split("_");              //按照_来进行字符串的分割   结果为：(5) ["abc", "def", "ghi", "jkl", "mn"]  默认则为全部分割
str.split("_",2);            //分割2个  结果为：(2) ["abc", "def"]
str.concat("_opq");          //在原来的字符串的最后面拼接
str.substr(4,7);             //从字符串的第4个元素截取元素，截取7个
str.substring(4.7);          //从字符串的第4个元素截取到第7个元素
str.slice(2);                //切片，从前往后数到第2个元素，把前面的元素删除   结果为："c_def_ghi_jkl_mn"
str.slice(-2);               //从后往前数第2个元素，把前面的元素删除  结果为："mn"
str.slice(2,5);              //第2个元素前及第5个元素后的元素全删除

//Boolean类型的值
var a ;
console.log(a);              //结果为undefined
//注意：分清未定义与未声明的区别 undefined与 undeclare
function foo(x,y){
    console.log(x,y);
}
foo(1);                      //没有返回值的情况下，结果是undefined

var feeReturnValue = fee();
console.log(feeReturnValue);//undefined

console.log(typeof null);//object

//包装对象
var a = 123;
var b = new Number(a);
console.log(a == b);//true
console.log(a === b);//false

//临时包装对象
var str = "abcde";
console.log(str.length);//5 

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]


//JavaScript数据类型转换

//其他类型转换为Boolean类型
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true


//其他类型转换为Number类型
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//32343

//其他类型转换为String类型
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object Object]

//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);//false
console.log(typeof (a==b),a==b);//false
console.log(typeof (a<b),a<b);//true

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g);//false true true

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){
    console.log("h:",h);
}//h:{x:1}

//Number原型方法(Number对象继承的方法）
var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4