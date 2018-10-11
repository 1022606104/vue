
new Vue({
    el:"#app",
    data:{
        kb:'',
        kb1:'',
        kb2:'',
        kb3:'',
        kb1i:'',
        kb2i:'',
        kb3i:'',
        kb4i:'',
        xiugai:'已发布',
        ai:[
            {fz:"时尚",fx:"全网举报周冬雨，到底发生了什么？”",fc:"作者-1",fv:"09-28",fe:"待修改",fr:"发布",delepe:'删除'}
        ],
        aq:[
            {fz:"电影",fx:" 热巴印花裙霸气十足",fc:"作者-2",fv:"09-28",fe:"待修改",fr:"发布",delepe:'删除'}
        ],
        ao:[
            {fz:"今日话题",fx:"体检行业需要来一次“全面体检”",fc:"作者-3",fv:"09-28",fe:"待修改",fr:"发布",delepe:'删除'}
        ],
        index: ''
    },
    methods:{
        add: function(){
            document.getElementById("no").style.display = "block";
        },
        agg: function(){
            document.getElementById("no").style.display = "none";
        },
        ad: function(i){
            console.log(this.index)
            document.getElementById("nio").style.display = "block";
            this.index = i;
            this.kb3i=this.ai[i].fx;
            this.kb2i=this.ai[i].fc;
            this.kb1i=this.ai[i].fz;
        },
        ad1: function(i){
            document.getElementById("nio").style.display = "block";
            this.index = i;
            this.kb3i=this.aq[i].fx;
            this.kb2i=this.aq[i].fc;
            this.kb1i=this.aq[i].fz;
        },
        ad2: function(i){
            document.getElementById("nio").style.display = "block";
            this.index = i;
            this.kb3i=this.ao[i].fx;
            this.kb2i=this.ao[i].fc;
            this.kb1i=this.ao[i].fz;
        },
        ag: function(){
            document.getElementById("nio").style.display = "none";
        },
        gai:function(){
            var now=new Date();
            var  m = now.getMonth() + 1;
            m=(m<10)?'0'+m:m;
            var day  = now.getDate();
            day=(day<10)?'0'+day:day;
            this.ta =m+'-'+day;
            if(this.kb1i=="时尚"){
                this.ai.splice(this.index,1,{"fa": this.kb,"fz": this.kb1i,"fc": this.kb2i,"fx": this.kb3i,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"});
                localStorage.setItem("lis",JSON.stringify( this.ai));
            }else if(this.kb1i=="电影"){
                this.aq.splice(this.index,1,{"fa": this.kb,"fz": this.kb1i,"fc": this.kb2i,"fx": this.kb3i,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"});
                localStorage.setItem("ls",JSON.stringify( this.aq));
            }else if(this.kb1i=="今日话题"){
                this.ao.splice(this.index,1,{"fa": this.kb,"fz": this.kb1i,"fc": this.kb2i,"fx": this.kb3i,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"});
                localStorage.setItem("le",JSON.stringify( this.ao));
            }else{
                alert("请输入标题的内容")
            }
            document.getElementById("nio").style.display = "none";
        },
        confirm1:function(index){
            if(confirm("要删除吗？")){
                this.ai.splice(index,1)
            }
        },
        confirm2:function(index){
            if(confirm("要删除吗？")){
                this.aq.splice(index,1)
            }
        },
        confirm3:function(index){
            if(confirm("要删除吗？")){
                this.ao.splice(index,1)
            }
        },
        fun:function(){
            var now=new Date();
            var  m = now.getMonth() + 1;
            m=(m<10)?'0'+m:m;
            var day  = now.getDate();
            day=(day<10)?'0'+day:day;
            this.ta =m+'-'+day;
            if(this.kb1=="时尚"){
                this.ai.push({"fa": this.kb,"fz": this.kb1,"fc": this.kb2,"fx": this.kb3,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"});
            }else if(this.kb1=="电影"){
                this.aq.push({"fa": this.kb,"fz": this.kb1,"fc": this.kb2,"fx": this.kb3,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"})
            }else if(this.kb1=="今日话题"){
                this.ao.push({"fa": this.kb,"fz": this.kb1,"fc": this.kb2,"fx": this.kb3,fv:this.ta,fr:"发布",delepe:'删除',fe:"待修改"})
            }else{
                alert("请输入标题的内容")
            }
            document.getElementById("no").style.display = "none";
            
    }, fabu:function(index){

        alert("发布成功");
        this.ai[index].fe=this.xiugai;
        localStorage.setItem("lis",JSON.stringify(   this.ai))

    }, fabu1:function(index){

        alert("发布成功");
        this.aq[index].fe=this.xiugai;
        localStorage.setItem("ls",JSON.stringify( this.aq))

    }, fabu2:function(index){

            alert("发布成功");
            this.ao[index].fe=this.xiugai;
            localStorage.setItem("le",JSON.stringify( this.ao))
        }
},
    
    created:function(){
        if (localStorage.getItem('lis')!== null) {  this.ai=JSON.parse(localStorage.getItem('lis'))

        }
        if (localStorage.getItem('ls')!== null) {  this.aq=JSON.parse(localStorage.getItem('ls'))

        }
        if (localStorage.getItem('le')!== null) {  this.ao=JSON.parse(localStorage.getItem('le'))

        }
    }
});