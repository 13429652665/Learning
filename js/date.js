/*Date封装了一个时间点，提供了对时间和日期的操作API*/

// var now=new Date();
// var time=new Date("xx/xx/xx");

function hire() {
   /* var date=new Date();
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    console.log("今天是"+weekday[date.getDay()]);
    var month=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
    console.log("这个月是"+month[date.getMonth()]);*/
    var hireDate=new Date("2017/6/30");
    var endDate=new Date(hireDate.getTime());
    endDate.setFullYear(endDate.getFullYear()+3);
    console.log("合同到期时间为："+endDate.toLocaleDateString());
    var renewal=new Date(endDate.getTime());
    renewal.setMonth(renewal.getMonth()-1);
    if(renewal.getDay()==6){
        renewal.setDate(renewal.getDate()-1);
    }else if(renewal.getDay()==0){
        renewal.setDate(renewal.getDate()-2);
    }
    console.log("续签时间为："+renewal.toLocaleDateString());
    var remind=new Date(renewal.getTime());
    remind.setDate(remind.getDate()-7);
    console.log("提醒时间为："+remind.toLocaleDateString());
}
// hire();

/*从今天开始，计算任意个工作日之后的日期*/
function getDueDate(days) {
    var now=new Date();
    for(var i=0;i<days;i++){
        if(now.getDay()==5){
            now.setDate(now.getDate()+2);
        }else if (now.getDay()==6){
            now.setDate(now.getDate()+1);
        }
        now.setDate(now.getDate()+1);
    }
    console.log(now.toLocaleDateString());
}
getDueDate(9);

/*将当前日期格式化
* ****年**月**日 星期*  上午/下午  **:**:**
* */

function formatNow(date) {
    var arr=[];
    arr.push(date.getFullYear());
    var month=date.getMonth();
    if(month<10){
        month="0"+month;
    }
    arr.push(month);
    var day=date.getDate();
    if (day<10){
        day="0"+day;
    }
    arr.push(day);
    var weekday=["日","一","二","三","四","五","六"];
    arr.push(weekday[date.getDay()]);

}
formatNow(new Date());
/***Function对象
 * 1.arguments对象
 * 2.Function对象的本质
 * 3.匿名函数
 * 4.闭包
* */
// 1.***Function对象：js中一切都是对象
//       连函数也是对象
//       函数名其实是引用对象定义对象的变量


// 1.arguments对象:
// 重载：程序中可以定义多个相同函数名，不同参数列表的函数
//js不支持重载但可以用arguments对象模拟重载效果
// arguments对象：函数对象内部，自动创建的专门接手所有参数值得类数组对象。
function arguments() {
    for(var i=0,sum=0;i<arguments.length;i++){
         sum+=arguments[i];
    }
    console.log(sum);
}
// arguments(1,2,3,4,5);
// 2函数对象本质：
//   1.创建函数对象：3种
//      1.声明方式：function 函数名(参数){
//                 函数体;
//                 return 返回值
// }     ****声明提前时函数名和函数定义都被提前****
//      2.函数直接量:var 函数名=function(){
//                  函数体;
//                  return 返回值;
// }      ***仅函数名变量声明会提前，函数定义留在本地，必须定义在调用前****
//      3.使用new创建函数类型对象：
//         var 函数名=new Function("a","b",..."函数体");
var arr=[1,12,123,3,2,23];
/*function compare(a,b) {
    return a-b;
}*/
/*var compare=function (a,b) {
    return a-b;
};*/
// var compare=new Function("a","b","return a-b");
// console.log(arr.sort(compare).join(":"));

//    2.内存中的函数对象
//   创建函数对象时：同时创建2个对象：
//                  函数对象：函数的定义
//                  作用域链对象：保存了函数对象可用的变量位置
//                               默认第一项指向window对象
//   调用函数时：又会创建一个新对象：
//            活动对象：专门保存局部变量的对象
//            在作用域链对象中追加指向活动对象的引用
//    调用后：默认仅释放活动对象
//           作用域链中活动对象的引用出栈
//