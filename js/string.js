var pid="34042119880821123x";
var birth=pid.slice(6,-4);
console.log(birth);
var gender=pid[pid.length-2]%2==0?"女":"男";
console.log(gender);
/*内置对象：ES标准中已定义好的，由浏览器厂商已经实现的对象
* 11个:String Number Boolean
* Array Date Math RegExp
* Error
* Function Object
* Global(全局)
*
* 包装类型：专门封装原始类型数据，并提供对原始类型数据的操作方法
* 何时使用包装类型：自动使用
* 为什么使用包装类型？
*
* */
/*String API*/

function split() {
    var path="c:\\windows\\temp\\index.html";
    console.log(path);
    var arr=path.split("\\");
    console.log(arr);
}
split();

