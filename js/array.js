function getMax(arr) {
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }

    }
    return max
}
console.log(getMax([1,2,3,4,66,12]));

var emp=["Eric","Lisa","Ruby","Java"];
function indexOf(arr,eName) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==eName){
            return i;
        }
    }
    return -1;
}
console.log(indexOf(emp,"Lisa"));

/*关联数组*/
var fbb=[];
fbb["herName"]="范冰冰";
fbb["herAge"]=29;
fbb["likeFood"]="土豆";
fbb['boyFriend']="李晨";
console.log(fbb);
for(var key in fbb){
    console.log(key+":"+fbb[key]);
}
/*频繁字符串拼接，造成内存浪费
* 先将要拼接的字符串放入数组
* 最后，arr.join("");
* */
var arr=[];
arr[arr.length]="a";
arr[arr.length]="b";
arr[arr.length]="c";
var strArr=arr.join("");
console.log(strArr);

/*数组方法打印正三角*/
function printZhSan(l) {
    for(var i=1;i<=l;i++){
        for(var j=1,arr=[];j<=i;j++){
            arr[arr.length]="*";
        }
        console.log(arr.join(""));
    }
}
printZhSan(5);

/*数组方法打印反三角*/
function printFanSan(l) {
    for(var i=1;i<=l;i++){
        for(var j=1,arr=[];j<=l;j++){
            if(j<=l-i){
                arr[arr.length]=" ";
            }else{
                arr[arr.length]="*"
            }
        }
        console.log(arr.join(""));
    }
}
printFanSan(5);

/*数组方法打印等腰三角
*             *
*            ***
*           *****
*          *******
*         **********
* */
function printDengYao(l) {
    for(var i=1;i<=l;i++){
        for(var j=1,arr=[];j<=l-i+2*i-1;j++){
            if(j<=l-i){
                arr[arr.length]=" ";
            }else{
                arr[arr.length]="*"
            }
        }
        console.log(arr.join(""));
    }
}
printDengYao(5);

/*数组方法打印乘法口诀表
*     1*1=1
*     1*2=2 2*2=4
*     1*3=3 2*3=6 3*3=9
*     1*4=4 2*4=8 3*4=12 4*4=16
*     1*5=5 2*5=10 3*5=15 4*5=20 5*5=25
* */
function printKouJue(l) {
    for(var i=1;i<=l;i++){
        var str=[];
        for(var j=1;j<=i;j++){
            str[str.length]=[j,"*",i,"=",j*i," "].join("");
        }
        console.log(str.join(""));
    }
}
printKouJue(9);

var a=[1,2,3];  //  concat后a不变
console.log(a.concat(4,5));   //[1,2,3,4,5]
console.log(a.concat([4,5])); //[1,2,3,4,5]
console.log(a.concat(4,[5,[6,7]]));//[1,2,3,4,5,[6,7]]

var b=[1,2,3,4,5];  //slice后b不变
console.log(b.slice(0,3));   //[1,2,3]
console.log(b.slice(3));     //[4,5]
console.log(b.slice(1,-1));  // [2,3,4]
console.log(b.slice(-3,-2)); //[3]

var c=[1,2,3,4,5,6,7,8]; //splice后c变化
console.log(c.splice(4)); //[5,6,7,8]
console.log(c); // [1,2,3,4]
console.log(c.splice(1,2)); //[2,3]
console.log(c);  //[1,4]
console.log(c.splice(1,1));  //[4]
console.log(c); //[1]

var d=[1,2,3,4,5];
console.log(d.splice(2,0,'a','b')); // []
console.log(d);  //[1,2,'a','b',3,4,5]
console.log(d.splice(2,2,[1,2],3)); //['a','b']
console.log(d); // [1,2,[1,2],3,3,4,5]

/*数组排序*/
var aa=[1,2,3,23,123,33,12];
console.log(aa.sort());
console.log(aa.sort(function (a,b) {
    return a-b;
}));

var bb=['ant','Bug','cat','Dog'];
console.log(bb.sort());
console.log(bb.sort(
    function (a,b) {
        var s=a.toLowerCase();
        var w=b.toLowerCase();
        if (s<w)return -1;
        if (s>w)return 1;
        return 0;
    }
));

/*栈和队列*/
function bus() {
    var bus=[];
    for(var i=0;i<=5;i++){
        bus.push("乘客"+ i);
        console.log(bus);
    }
    while (bus.length!=0){
        var first=bus.shift();
        console.log(first+"下车");
        console.log(bus);
    }
}
bus();
/*十进制转二进制*/
function dec2bin(dec) {
    var bin=[];
    while (dec>0){
        bin.unshift(dec%2);
        dec=parseInt(dec/2);
    }
    return bin.join("");
}
console.log(dec2bin(2));

function panicBuying() {
    var n=[];

    var iphone=5;
    for(var i=1;i<=6;i++){
        n.push("顾客"+i);
    }
    console.log(n+"在排队抢iphone");
    while (iphone>0){
        var first=n.shift();
        console.log(first+"抢到一部：还剩"+(--iphone)+"部");
        console.log(n+"还在抢");
    }
    console.log(n+"没抢到");
}
panicBuying();

/*二维数组*/
(function erWei() {
    var arr=[];
    arr[0]=["石家庄","保定","唐山"];
    arr[1]=["德州","济南","烟台"];
    console.log(arr[0][2]);
    console.log(arr[1][1]);
})();
function getCities(prov) {
    var provinces=["北京市","河北省","河南省"];
    var cities=[
        ["朝阳区","海淀区","丰台区"],
        ["廊坊市","石家庄市","唐山市"],
        ["洛阳市","开封市","郑州市"]
    ];
    var i=provinces.indexOf(prov);
    if(i!=-1){
        console.log(cities[i].join(" "));
    }else{
        console.log("没有找到");
    }
}
var data=[
    [2,2,4,8],
    [8,4,2,2],
    [8,2,4,2],
    [2,4,8,4]
];
function isFull() {
    for(var row=0;row<data.length;row++){
        for(var col=0;col<data[row].length;col++){
            if(data[row][col]==0){
                return false;
            }
        }
    }
    return true;
}
console.log(isFull());
function isGameOver() {
    if (!isFull()){
        return false;
    }
    for(var row=0;row<data.length;row++){
        for(var col=0;col<data[row][col];col++){
            if(col!=3){
                if(data[row][col]==data[row][col+1]){
                    return false;
                }
            }
            if(row!=3){
                if(data[row][col]==data[row+1][col]){
                    return false;
                }
            }
        }
    }
    return true;
}
console.log(isGameOver());
