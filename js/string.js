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
    var arr=path.split("\\");
    console.log(arr);
    console.log(path);
}
// split();
/*将英文句子中每个单词首字母变大写！*/
function parseFirst() {
    var str="you can you up! no zuo no die!!";
    var arr=str.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
    }
    console.log(arr.join(" "));
}
// parseFirst();

/*程序中保存一个固定的4位验证码
* 请用户反复输入
* 输入不正确就提示验证码错误，
* 反复输入，正确后提示验证通过
* */
function enterConfirmation() {
    var code = "4eAt";
    var input = "";
    while ((input = prompt("please enter:" + code)).toUpperCase() != code.toUpperCase()) {
        console.log("enter error！");
    }
    console.log("enter right!");
}
// enterConfirmation();

/*请用户输入一句话：input
*    遍历input中的每个字符，
*      将每个字符转为Unicode号
*      暂时存入一个数组arr中
*      遍历结束后，将数组中的每个号，拼成一个大字符串
* */
function encode(input) {
   var arr=[];
    for(var i=0;i<input.length;i++){
        var encode=input.charCodeAt(i);
        encode=(100000+encode+"").slice(1);
        arr.push(encode);
    }
    console.log(arr.join(""));
}
// encode(prompt("请输入要编码的字符串"));

/*关键字查找
* */
function getKeyWord() {
    var str="who we two who and who";
    var index=str.length;
   while ((index=str.lastIndexOf("who",index-1))!=-1){
       console.log("在位置"+index+"发现敏感词！");
       if(index==0){
           break;
       }
   }

}
// getKeyWord();

/*String API*/
//获取子串
var ipCard="34042119880821123X";
var str01=ipCard.slice(6,-4);
console.log(str01);
var str02=ipCard.substr(6,8);
console.log(str02);
var str03=ipCard.substring(6,14);
console.log(str03);

/*解码字符串*/
function decode(code) {
    var arr=[];
    for(var i=0;i<code.length;i+=5){
        var char=code.substr(i,5);
        arr.push(String.fromCharCode(parseInt(char)));
    }
    console.log(arr.join(""));
}
// decode(prompt("输入要解码的字符串"));

/*获取邮箱信息*/
function mail() {
    var email="yingfeng.z@163.com";
   /* //yingfeng.z@163.com
    var num=email.indexOf("@");
    var username=email.slice(0,num);
    var domain=email.slice(num+1);
    console.log("用户名： "+username);
    console.log("域名："+domain);*/
   var arr=email.split("@");
    console.log("用户名："+arr[0]);
    console.log("域名："+arr[1]);
}
// mail();

/*打印游戏角色*/
function printRoles() {
    var str="Tom@补给兵@60%#Mary@医护兵@80%#John@特种兵@30%";
    var roles=str.split("#");
    for(var i=0;i<roles.length;i++){
        var arr=roles[i].split("@");
        roles[i]=[arr[0],arr[1],"生命:"+arr[2]].join(" ");
    }
    console.log(roles.join("\n"));
}
// printRoles();
/*模式匹配：按照规则查找或替换字符串中的字内容*/
function regexp() {
    var str="No zuo no die,nO can NO bi bi";
    var keyWord=/no/ig;
    var arr =str.match(keyWord);
    var newStr=str.replace(keyWord,"**");
    console.log(newStr);
    console.log("共替换："+(arr?arr.length:0)+"个")
}
regexp();

/*正则表达式：专门规定字符串中字符*格式规则*的表达式
* 何时使用：只要定义字符串格式规则，都用正则表达式
* 最简单的正则：一个关键字的原文，就是最简单的正则
* */
/*
1.备选字符集：规定某*一位*字符可选的备选文字列表
  语法：[备选字符列表]
  强调：无论备选字符集中有多少字/符，都必须且只能选1个
  一个[]只能代表1位字符！
2.-：如果备选字符连续可用-表示“到”
3.预定义字符集：专门表示常用的连续的字符集
   \d==>[0-9]:1位数字
   \w==>[0-9a-zA-Z_]:1位数字或字母或下划线
   \s==>[空字符]：1位空字符：空格，Tab符
   .==>除了换行外其他所有的字符
4.量词：规定一个字符集出现的次数：2种
  明确数量：3种：{min,max}：最少min位，最多max位
               {min，}至少min位
               {n}必须n位
   不确定数量：3种：
   ？==>{0,1}:可有可无，最多1次
   *==>{0,}：可有可无，多了数量不限
   +==>{1,}:至少一次，多了数量不限
* */
function yanZh() {
    var card=/\d{15}(\d{2}[0-9xX])?/;
    var iphone=/(\+86)?\s*1[34578]\d{9}/;
    var reg=/^(?![a-z0-9*$])(?![A-z]*$)[a-zA-Z0-9]{6}$/;
    while(!reg.test(prompt("输入密码"))){
        console.log("密码格式不对");
    }
    console.log("密码修改成功");
}
// yanZh();
/*查找API
* reg.exec(str)
* 既查找内容又查找位置
* */
function chaZh() {
    var str="明明喜欢我，却不告诉我；别理我，我想静静；静静是谁！你TM先告诉我明明是谁！！";
    var reg=/明明|静静/g;
    var arr=null;
    while ((arr=reg.exec(str))!=null){
        console.log(arr);
        console.log("在位置"+arr.index+"发现关键字："+arr[0]);
        console.log("下次从"+reg.lastIndex+"开始找");
    }
}
// chaZh();
/*正则贪婪模式和懒惰模式
*  默认贪婪模式
*     .*==>.*?
*  贪婪模式==>变懒惰模式
* */
function tlTold() {
    var html='<h1 class="h1"></h1><a class="curr" href="http://tmooc.cn"></a><a name="top"></a><div id="main"></div>' +
        '<A href="http://tedu.cn"></A><link rel="stylesheet" href="index.css"><h1></h1>';
    var reg=/<a\s+(.*?)href\s*=\s*(['"])([^'"]*)\2/ig;
    var arr=null;
    while ((arr=reg.exec(html))!=null){
        console.log(RegExp.$3);
    }
}
// tlTold();

/*替换replace*/
function replace() {
    var str="纪委负责对全国党员干部的纪检监察工作";
    var reg=/纪[检委](监察)?/;
    var count=0;
    var arr;
    while ((arr=reg.exec(str))!=null){
        count++;
        console.log(arr);
       /* if(arr[0].length==2){
            str=str.replace(reg,"**")
        }else{
            str=str.replace(reg,"****");
        }*/
       str=str.replace(reg,arr[0].length==2?"**":"****");
    }
    console.log(str);
    console.log("共替换"+count+"处");
    //
    var time="20151016143155";
    var patter=/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
    time=time.replace(patter,"$1年$2月$3日$4:$5:$6");
    console.log(time);
    var list="<li>eric</li>\n\t<li>smith</li><li>rose</li>\t<li>john</li>\t<li>scott</li><li>tom</li><li>jerry</li>";
    var patter1=/<\/li>\s*<li>/;
    list=list.slice(4,-5);
    var arr1=list.split(patter1);
    console.log(arr1);
    var html="<ul><li>"+arr1.sort().join("</li><li>")+"</li></ul>";
    document.write(html);
}
// replace();








