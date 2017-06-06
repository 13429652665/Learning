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
// getDueDate(9);

/*将当前日期格式化
* ****年**月**日 星期*  上午/下午  **:**:**
* */
function formatNow(date) {
    var arr=[];
    arr.push(date.getFullYear());
    var month=date.getMonth()+1;
    arr.push(month<10?"0"+month:month);
    var day=date.getDate();
    arr.push(day<10?"0"+day:day);
    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    arr.push(weekday[date.getDay()]);
    var hours=date.getHours();
    arr.push(hours<12?"上午":"下午");
    hours>12&&(hours-=12);
    arr.push(hours<10?"0"+hours:hours);
    var minuter=date.getMinutes();
    arr.push(minuter<10?"0"+minuter:minuter);
    var seconds=date.getSeconds();
    arr.push(seconds<10?"0"+seconds:seconds);
    var str=arr.join("");
    var reg=/(\d{4})(\d{2})(\d{2})(星期[日一-六])([上下]午)(\d{2})(\d{2})(\d{2})/;
    console.log(str.replace(reg,"$1年$2月$3日 $4 $5 $6:$7:$8"));
}
formatNow(new Date());

/*错误/异常处理*/
/*  SyntaxError：语法错误
*   ReferenceError：引用错误。找不到变量或对象
*   TypeError：类型错误，错误的使用了对象中的方法
*   RangeError：范围错误，参数超范围
*   EvalError：调用eval函数时出错
*   URLError：URL错误
* */
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
function argument() {
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
//      3.**匿名函数：定义时，不指定函数名的函数
//         何时使用：2大用途：
//        1.匿名函数自调：自定义，立即执行
//                       执行完立刻释放
//          何时使用：只有确定函数只执行一次！
//           如何自调：(function(){})();
//           匿名函数自调不提前
//        3.匿名函数回调：向将函数作为对象传递给另一个函数，由另一个函数自主决在需要时调用

// *******  4.闭包：
//  ******    问题：全局变量和局部变量的缺陷
//    ****    全局变量：容易全局污染
//     ***    局部变量：无法分享,不能长久保存
//      **    既可以共享，长久保存，又不会全局污染的变量
//       *    解决：3步：闭包三特点：
//      **    1.定义外层函数，封装被保存的局部变量
//     ***    2.定义内层函数，执行对外层函数局部变量的操作
//    ****    3.外层函数返回内层函数的对象，
//   *****      并且外层函数被调用，结果被保存在全局变量中
// *******   何时使用：既反复使用局部变量，又避免全局污染就要用闭包

//           判断闭包执行结果：
//          1.外层函数被调用几次，就有几个受保护的局部变量副本
//          2.来自一个闭包的函数调用几次，受保护的局部变量就变化几次

/*定义一个取号机函数
* 每调用一次，顺序生产一个永不重复的序号
* */

