//三种创建对象的方式
//1.通过字面量的方式创建JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi


//2.通过Object静态方法创建
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//23


//3.通过构造函数创建
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();


var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);
//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;

console.log(newObj.__proto__ === obj);//t
console.log(newObj2.__proto__ === obj);//t


//原型链操作
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3


//
function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);//20
p1.sayHi();


function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);//Mike
console.log(p1.age);//21
p1.sayHi();

console.log(p1.__proto__ === Person.prototype);//t


function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z = 5;

obj.hasOwnProperty("z");
console.log(obj.z);
console.log(MyObj.prototype.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//删除原型上的属性
delete  obj.__proto__.z;
console.log(obj.z);