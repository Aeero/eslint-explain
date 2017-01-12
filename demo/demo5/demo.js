/*@ eslint demo5   使用airbnb的验证规则
@@@ 打开demo5文件夹下的.eslintrc.js文件
@@@ 修改错误
@*/


function makeIterator (array) {
	var nextIndex = 0;
	return {
		next: function () {
			return nextIndex < array.length ? {value:array[nextIndex++],done:false}:{value:undefined,done:true};
		}
	}
}

var array = [1,2,3,'a','b'];
for( var a in array) {
	console.log(a);
}
for( var a of array) {
	console.log(a);
}
