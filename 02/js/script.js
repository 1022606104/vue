new Vue({
    el:"#app",
    data:{
         num:"",
        al:[
            {text:'学好Vue.js',delepe:'删除'},{text:'学好Vue.js',delepe:'删除'},{text:'学好Vue.js',delepe:'删除'},
        ],
    },
     methods:{
         add:function(){
             if(this.num!==""){
                 this.al.push({
                   text:this.num,
                   delepe:"删除",
                 })
                 this.num ="";
             }else{
                 alert("请添加事件")
             }
         },
        de:function(index){
            this.al.splice(index,1);
           }
       }  
}); 
