// 函数回调
// 案例一 同步执行的回调
var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);

var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);


// 案例二 异步执行的回调
var LTimeOperation = function(taskID){
    var id = taskID;
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}


//事件触发与事件监听
// 案例一 
document.onclick = function () {
    console.log("document 被点击了！");
};

// 案例二
for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}

for(var i=0;i<5;i++) {   
        document.getElementById("btnId" + i).addEventListener("click", function () {
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
}


// 案例三 在Nodejs环境下进行调试
var http = require('http');
var url = 'http://www.4399.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});


var Subject = function(){
    var _observer = [];
    this.attach = function(observer){
        _observer.push(observer);
    };
    this.detach = function(){
        _observer.pop();
    };
    this.notify = function(msg){
        for(var i=0;i<_observer.length;i++){
            _observer[i].update(msg);
        }
    };
    this.print = function(){
        console.log(_observer.length);
        console.log(_observer);
    };
};
var Observer = function(name){
    this.update = function(msg){
        console.log('i am '+name+',and i get the message: '+msg);
    };
};
var sub = new Subject()
sub.attach(new Observer('a'));
sub.attach(new Observer('b'));
sub.notify('hello');
//sub.print();

setTimeout(function(){
    var c = new Observer('c');
    sub.detach();
    sub.attach(c);
    sub.notify('world');
    //sub.print();
},5000);


//XMLHttpRequest Get 请求
//实例一
var xhr = new XMLHttpRequest();
if (!xhr) {
     console.log("xhr 创建失败！！");
 }
xhr.onreadystatechange = function () {
    console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();


var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    console.log(Object.keys(req),"___",Object.keys(res));
    console.log("req.url：",req.url);
     var getDataObj = url.parse(req.url,true).query;
    var getDataStr = url.parse(req.url).query;

    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin":"*", 
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("你好，我已收到你发的信息："+getDataStr);
    },20000*Math.random());
}).listen(8080,"127.0.0.1");
console.log("start server!");

