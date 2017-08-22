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
    console.log("化妆");
    console.log("去商城");
    console.log("买" + what);
    console.log("刷卡,扣" + money);
    console.log("回家");
    return "漂漂亮亮的" + what;
}
    var eric=daFan("Gucci包包",20000);
    console.log("\neric得到"+eric);


/*  *** 变量作用域:一个变量的可以范围
 *        js中2种作用域：1.全局作用域：一个变量可以在程序的任何位置被访问。
 *                    2.函数作用域：一个变量仅能在函数调用时，内部被访问
 *      js中2种变量：
 *      1.全局变量：定义在全局作用域中的变量
 *        2种：1.直接在任何函数外声明的变量
 *               全局变量都属于window--全局对象
 *             2.无论在任何位置,为从未声明的变量赋值时，自动创建同名全局变量
 *      2.局部变量：定义在函数作用域中的的变量
 *        2种：1.在函数内部定义声明的变量
 *             2.函数参数天生就是局部变量
 *    函数其实是引用类型的对象；
 *    函数名其实是指向函数对象的变量；
 *    函数的定义和调用过程：
 *    1.声明和定义函数时：
 *         window中创建了函数名变量
 *         window外创建了函数定义的对象-->封装函数的定义
 *         函数名变量中保存了指向函数对象的地址
 *     2.调用时， 创建局部变量：2种
 *     3.调用过程中，如果局部有，就不用全局的
 *                  如果局部没有，才会用全局的
 *                  如果全局也没有，则报错！
 *      4.调用结束后，释放所有局部变量！
 *
 */

/*
* 1.函数声明提前：在程序执行前或函数被调用前
*                将var声明的变量和function声明的函数
*                提前到当前作用域顶部集中创建
*           强调：仅声明提前，赋值仍在原地
*
* 2.按值传递：js中无论是变量间赋值或使用变量传递参数时，都是讲变量中的值，复制一个副给对方！
*
* */
var a=100;
function fun(a) {
    a++;
    console.log(a);
}
fun(a);

/*
* 分支结构
*    程序结构三大类：
*      顺序：从上向下逐步执行
*      分支：根据条件判断的结果，有选择的执行不同的代码段
*      循环：程序可以反复执行同一代码段，到达临界退出
* */
/*收银找零程序*/
function pay() {
    var price=parseInt(prompt("请输入单价"));
    var num=parseInt(prompt("请输入数量"));
    var money=parseInt(prompt("请输入收款金额"));
    var total=price*num;
    total>500&&(total*=0.8);
    var change=money-total;
    console.log("应收"+total+",找零"+change);
}
// pay();
/*成绩单*/
function Score() {
    var score=prompt("请输入成绩");
    /*console.log(isNaN(score)?"玩我呢":
        score>100||score<0?"超范围":
            score>=90?"A":
                score>=80?"B":
                    score>=60?"C":
                        "D"
    );*/
    if(isNaN(score)){
        console.log("玩我呢");
    }else if(score>100||score<0){
        console.log("超范围");
    }else if(score>=90){
        console.log("A");
    }else if(score>=80){
        console.log("B");
    }else if(score>=60){
        console.log("C");
    }else{
        console.log("D");
    }
}
// Score();
/*找最大*/
function getMax(a,b,c) {
    var max=a>b?a:b;
    c>max&&(max=c);
    return max;
}
// console.log(getMax(prompt("输入第一个数"),prompt("输入第二个数"),prompt("输入第三个数")));
/*查询*/
function chaXun() {
    switch (prompt("请按键")){
        case "1":
            console.log("正在查询");
            break;
        case "2":
            console.log("取款进行中。。。");
            break;
        case "3":
            console.log("转账进行中。。。");
            break;
        case "0":
            console.log("退出，欢迎下次光临！");
            break;
        default:
            console.log("输入有误!");
    }
}
// chaXun();
/*循环结构
* 3要素
* 1.循环条件：继续循环的条件：圈数<5
* 2.循环变量：在循环条件中，用作比较的变量：圈数
* 3.循环体：反复执行的代码
* */
/*
* while循环：
* 语法：var 循环变量=初值;
* while(循环条件){
*    循环体;
*    迭代变化循环变量;
* }
* */

