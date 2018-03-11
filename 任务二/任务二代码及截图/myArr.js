function myArr(){

	var i,j;

	var len = arr.length;

	for(i=0;i<len;i++){

	    for(j=i+1;j<len;j++){
	
        if(arr[i] == arr[j]){
	
            arr.splice(j,1);//我第一次用的是delete（），但不能返回删除元素后的新长度，所以我百度了一下，找到了splice()。

	        };
	
    };
	
};

return arr;
};

var arr =['1','2','3','2','3','4','7','1','5','8'];

var arr2 = myArr(arr);

console.log(arr2);
