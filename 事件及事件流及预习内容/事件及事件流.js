//JS文件
window.onload = function () {
    console.log("window onload");
    var div2 = document.getElementById("div2");
    div2.onclick = function () {
        console.log("div2 click");
    }
}

//事件对象(包含事件中相应的信息)
//当事件发生时会产生对应的事件对象（如：鼠标事件对象、键盘事件对象等）
//事件对象（Event）包含对应事件的相关信息（如：触发的元素、坐标信息、键值信息等）
//理解事件对象的继承关系（例如：Event--UIEvent--MouseEvent)
window.onload = function (e) {
    this.console.log("e:",e);
    var div1 = document.getElementById("div1");
    var eventHandler = function (e) {
        console.log(e);
        console.log(e.clientX,e.clientY);//坐标信息
    }
    div1.onclick = eventHandler;
}

//JS事件响应处理
//·事件响应处理方式
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };
    div2.onclick = eventHandler;
}



window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });

//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.target);
        console.log(this);
        var myEvent = new Event("MyEvent");
        
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);
    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);
}
}


//事件响应的兼容问题
//老版本IE不支持addEventListener、removeEventListener
//老版本IE不支持attachEvvent、detachEvent
//一些更特殊的浏览器可能两者都不支持
function addEventListener(ele,type,hander){
    if(ele.addEventListener){
        ele.addEventListener(type,hander,false);
    }else if(ele.attachEvent){
        ele.attachEvent('on'+type,hander);
    }else{
        ele['on'+type]=hander;
    }
}





//预习内容
//JS事件流（冒泡、捕获）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);
    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);
}

window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click--red");
        console.log("target:",e.target);
        console.log("this:",this);
        console.log(e.bubbles,e.cancelable,e.cancelBubble);
        e.stopPropagation();
    },false);

    div2.addEventListener("click",function (e) {
        console.log("div2 click--yellow");//
        e.target.hidden = true;
        this.hidden = true;
        
        e.stopPropagation();
    },true);

    div3.addEventListener("click",function (e) {
        console.log("div3 click--blue");
        e.stopPropagation();
    },false);
    document.getElementById("aId").addEventListener("click",function (e) {
        e.preventDefault();//阻止默认事件，阻止了链接跳转
        console.log("a click");
    });
}
