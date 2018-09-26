var p1=document.querySelector(".nav .p1");
var span1=document.querySelector(".nav .p2");
var sun=1;
p1.onclick = function(){
    sun++;
    if(sun==3){
        sun=1;
    }
    if(sun==1){
        span1.style.display ='none';
    }else{
        span1.style.display = 'block';
    }
};
$('.p1').click(function(iev){
    $(this).children('.fa-angle-down').toggleClass('hidden');
    $(this).children('.fa-angle-up').toggleClass('hidden');
});
//箭头

new Vue({
    el: "#app",
    data: {
        lists: ""
    },
    methods:{
        ju:function(a,b){
            this.lists[a][b].bool =!this.lists[a][b].bool;
        }
    },
    mounted:function(){
        //发送get请求
        this.$http.get('json/data.json').then(function(res){
            console.log(res.body);
            this.lists = res.body;

        },function(){
            console.log('请求失败处理');
        });
    }
});

