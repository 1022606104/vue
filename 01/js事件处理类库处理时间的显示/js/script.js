var time = '';

document.querySelector("#btn").addEventListener("click",function(){
    var shijinachuo = Date.parse(new Date());
    time = shijinachuo;

    //创建一个本地存储
    localStorage.setItem("t",time)
})

//得到本地存储的值
var t = localStorage.getItem("t");

//把字符串变成数字再转换时间戳
t = Number(t);

document.querySelector("#pid").innerHTML = moment(t).fromNow();

