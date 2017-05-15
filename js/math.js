function round(num,d) {
    num*=Math.pow(10,2);
    num=Math.round(num);
    return num/Math.pow(10,d);
}
// console.log(round(1223.556,2));
// console.log(Math.max.apply(Math,[1,6,3,4,8]));

/*随机生产min-max的整数*/
function random(min,max) {
    console.log(parseInt(Math.random()*(max-min+1)+min));
}
// random(1,3);

/*双色球
*  随机生产6个红球：
*  随机范围：1~33
*  红球不能重复
*  
*  随机生成1个篮球：1~16
* */
function doubleBall() {
    var reds=[];
    while (reds.length<6){
        var red_ball=parseInt(Math.random()*(33-1+1)+1);
        if(reds.indexOf(red_ball)==-1){
            reds.push(red_ball);
        }
    }
    reds.sort(function (a,b) {
      return a-b;
    });
    var blue=parseInt(Math.random()*(16-1+1)+1);
    console.log(reds+"|"+blue);
}
// doubleBall();

/*随机生产验证码并验证*/
var chars=[];
for(var c=48;c<=57;c++){
    chars.push(String.fromCharCode(c));
}
for(var d=65;d<=90;d++){
    chars.push(String.fromCharCode(d));
}
for(var e=97;e<=122;e++){
    chars.push(String.fromCharCode(e));
}
function getCode() {
    for(var i=0,arr=[];i<4;i++){
        var num=parseInt(Math.random()*(62));
        arr.push(chars[num]);
    }
    return arr.join("");
}

function vailCode() {
    var code=getCode();
    while (prompt("输入验证码:"+code).toLowerCase()!=code.toLowerCase()){
        console.log("验证码输入错误！");
        code=getCode();
    }
    console.log("验证通过！");
}
// vailCode();