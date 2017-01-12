/*@ eslint demo2   环境、全局变量配置
@@@ 打开demo2文件夹下的.eslintrc.js文件 增加了no-undef规则表示禁止使用未声明的变量
@@@ 在globals里增加 "jQuery":true,"$":true,"require":true  表明这些事允许使用的全局变量
@@@ 或者添加相应的环境
@*/

var a = window.location.host;
var b = jQuery(".b");
var c = $(".c");
var d = require("d");
