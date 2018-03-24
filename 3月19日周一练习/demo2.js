//赋值运算符   = 和 ==
var a = 34;
if(a = 45){      //一个=是赋值运算符，所以会输出console.log的内容
    console.log("是否会输出?");
}

var b = 34;
if(45 == b){
    console.log("输出");
}
//关于为什么45 == b要反写，是为了防止因失误少写一个=变成赋值运算符


//算数运算符
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3      如果相加则结果为52

var x = "1";
console.log(x+=1);//2
var x = 1;
console.log(x+=1);//11              +=是转换成字符类型

var i=1;
var y = ++i + ++i + ++i;
console.log(y);//9            即2+3+4


//关系运算符       ==和===
console.log(3===3);
console.log(3==="3");//f
console.log(3=="3");
console.log(3==new String(3));
console.log(3===new String(3));//f

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == new String("xyz"));
//全是false  引用类型的比较

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//f
console.log(obj1 !== obj2);
console.log(obj1 != obj2);
console.log(obj1 != new String("xyz"));
// !=是==的逆运算    !==是===的逆运算


//&&和||的区别
//&&是两边全真则真 有假则假     ||是全假则假，有真则真
console.log(2>1&&4<5);//t
console.log(true&&(!2));//f
console.log(false&&("2" == 2));//f
console.log(false&&false);//f

console.log(2>1||4<5);//t
console.log(true||(!2));//t
console.log(false||("2" == 2));//t
console.log(false||false);//f

//（非布尔类型）
//首先将左操作数进行布尔值转换
//然后对转换后的左操作数进行逻辑判断
//根据短路原则返回左操作数或右操作数

//短路原则
//对于&&，如果转换后的左操作数为true，则直接返回右操作数，如果为false，则返回原始左操作数
//对于||，如果转换后的左操作数为true，则返回原始左操作数，如果为false，则返回右操作数
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//{name: "Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//world

console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});//{x:2}
console.log(null||"hello");//hello
console.log({}||"world");//{}

console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//Boolean {[[PrimitiveValue]]: false}

//&&和||在实际的用途
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//可以代替if-else
var score = 66;
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||(score<60&&"不及格"));

//使用||来设置参数默认值
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//10
//将其改为    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
//           if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
//即可避免上面问题
