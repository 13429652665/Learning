function isOddOrEven() {
    var input=prompt("请输入一个数字:");
    if(isNaN(input)){
        console.log("请输入数字！");
    }
    else if(input%2==1){
        console.log("您输入的数字"+input+"是奇数");
    }
    else{
        console.log("您输入的数字"+input+"是偶数");
    }
}
// isOddOrEven();

function luoJiYunSan() {
    // var Yao={height:226, assets:2.5, handsome:false};
    // var Ma={height:166, assets:218, handsome:false};
    // var Bei={height:183, assets:5, handsome:true};
    // console.log(Yao.height>180&&Yao.assets>1&&Yao.handsome==true);
    // var total=parseFloat(prompt("请输入收款金额"));
    // total>500&&(total=total*0.8);
    // console.log(total);

    // var input=prompt("请输入回复：");
    // input!=""||(input="主人很懒什么都没有留下");
    // console.log(input);

    // var salary=prompt("输入工资");
    // console.log(salary>=20000?"土豪":(salary<8000?"屌丝":"一般人")
    // );

    // var year=prompt("输入年份");
    // console.log(
    //     year%4==0&&year%100!=0||year%400==0?"是闰年":"平年"
    // );

}
// luoJiYunSan();
/*计算可莱托指数
* 请用户输入身高h体重w计算可莱托c=w/h的平方
* c<20廋
* c>25胖
* 其他正常
* */
function keLaiTo() {
    var height=prompt("请输入身高(单位米)：");
    var weight=prompt("请输入体重(单位千克)：");
    var clayto=weight/(height*height);
   console.log(clayto<20?"廋":
       clayto>25?"胖":"正常"
   ) ;
}
// keLaiTo();
function daFan(what,money) {
    console.log("取饭盒");
    console.log("去食堂");
    console.log("窗口打" + what);
    console.log("刷卡,扣" + money);
    console.log("回宿舍");
    return "香喷喷的" + what;
}
    var eric=daFan("牛肉炒饭",20);
    console.log("\neric得到"+eric);
/*  *** 变量作用域:一个变量的可以范围
 *        js中2种作用域：1.全局作用域：一个变量可以在程序的任何位置被访问。
 *                    2.函数作用域：一个变量仅能在函数调用时，内部被访问
 *      js中2种变量：
 *      1.全局变量：定义在全局作用域中的变量
 *        2种：1.直接在任何函数外声明的变量
 *               全局变量都属于window--全局对象
 *             2.无论在任何位置,为从未声明的
 *      2.局部变量：定义在函数作用域中的的变量
 *        2种：1.在函数内部定义声明的变量
 *             2.函数参数
 *
 */

