
/*计算从1加到100的值
*  先定义一个变量sum,保存每次累加后的和，
*  从1开始，依次累加每个数，直到加到100为止
*  三要素：
*  1.循环条件：加数<=100
*  2.循环变量：加数，每次依次，加数+1
*  3.循环体：将当前的加数累加到sum中
*  循环结束后，输出sum中的值
*
* */
/*var sum=0;
var i=1;
while (i<=100){
    sum+=i;
    i++;
}
console.log(sum);
*/

/*for(var i=1,sumPlus=0;i<=100;i++){
    sumPlus+=i;
}
console.log("从1加到100的值为："+sumPlus);

/!*计算从1乘到100的值*!/
for(var sumMulti=1,m=1;m<=100;m++){
    sumMulti*=m;
}
console.log("从1乘到100的值为："+sumMulti);
//    计算1+1/3+1/5+...+1/999；
for(var n=1,sum=0;n<=999;n+=2){
    sum+=1/n;
}
console.log(sum);*/

/*控制台打印乘法口诀表
* 1X1=1    第1行
*            打印第1行第1个
* 1X2=2 2X2=4 第2行
*              打印第2行第1个，第2个
* 1X3=3 2X3=6 3X3=9  第l行
*                      打印第l行第1个,第2个...第j个 条件j<=i
*                      乘数从1到i i<=l 被乘数一直为l
* */
/*window.onload=function () {
    var printHang=document.getElementById("printHang");
    printHang.onclick=function () {

        var l=prompt("输入行数");
        l=parseInt(l);
        for(var i=1;i<=l;i++){
            for(var j=1,str="";j<=i;j++){
                str+=j+"*"+ i + "=" + j*i + " ";
            }
            console.log(str);
        }
    };
};*/
/*直接table中打印99乘法表*/
/*document.write("<table>");
for(var x=1;x<=9;x++){
document.write("<tr>");
    for(var y=1;y<=x;y++){
        document.write("<th>"+y+"*"+ x+"="+y*x+"</th>");
    }
    document.write("</tr>")
}
document.write("</table>");*/

/*获得5个闰年*/
/*var year=prompt("输入年份");
var getLeapYear=parseInt(year);
for(var yearMun=0;yearMun<5;yearMun==0?getLeapYear++:getLeapYear+=4){
    if(getLeapYear%4==0&&getLeapYear%100!=0||getLeapYear%400==0){
        console.log(getLeapYear);
        yearMun++;
    }
}*/
/*打印正三角
*     *
*     **
*     ***
*     ****
*     *****
* */
function print(l) {
    for(var i=1,str="";i<=l;i++){
        str+="*";
        console.log(str);
    }
}
/*function print(l) {
    for(var i=1;i<=l;i++){
        for(var j=1;j<=i;j++){
            document.write("*");
        }
        document.write("<br>");
    }
}*/
/*打印反三角
*        *
*       **
*      ***
*     ****
*    *****
* */
/*function print2(l) {
    for(var i=1;i<=l;i++){
        for(var j=1;j<=l-i;j++){
            document.write("&nbsp");
        }
        for(var k=1;k<=i;k++){
            document.write("*");
        }
        document.write("<br>");
    }
}*/
function print2(l) {
    l=parseInt(l);
    for(var i=1;i<=l;i++){
        var space=l-i;
        var str="";
        for(var j=0;j<l;j++){
            if(j<space){
                str+=" ";
            }else{
                str+="*";
            }
        }
        console.log(str);
    }
}
/*打印等腰三角
*       *       1 1
*      ***      2  3
*     *****     3  5
*    *******    4  7
*   *********
* */
/*for(var i=1;i<=5;i++){
 for(var j=1;j<=5-i;j++){
 document.write("&nbsp");
 }
 for(var k=1;k<=2*i-1;k++){
 document.write("*");
 }
 document.write("<br>");
 }*/
for(var i=1;i<=5;i++){
    var str="";
    var space=5-i;
    for(var j=0;j<5+i-1;j++){
        if(j<space){
           str+="";
        }else{
           str+="*";
        }
    }
    console.log(str);
}

