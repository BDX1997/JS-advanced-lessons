//Date 练习
var date1 = new Date(2017,9,18,12,34,1);
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);
console.log(date2);

var date3 = new Date("2017-08-09");
console.log(date3);

var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);

var date5 = new Date();
console.log(date5);

var date6 = new Date(NaN);
console.log(date6);

var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);


console.log(Date.now());
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());


//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());


//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ
console.log(Date.parse("2010-01-01 11:12:23.111"));
console.log(new Date("2010-01-01 11:12:23.111"));
console.log(new Date().toISOString());

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());

console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));

console.log(new Date("1999-11-22T13:17"));
console.log(new Date("1999-11-22T13:17:11"));
console.log(new Date("1999-11-22T13:17:11.111"));
console.log(new Date("1999-11-22T13:17:11.111Z"));

console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));

