<template>
    <div>
        <div class="live-header">
            <ul>
                <li>热门</li>
                <li>关注</li>
                <li>穿搭</li>
                <li>美妆</li>
            </ul>
        </div>
        <div class="live-main">
            <ul>
                <li v-for="(item,index) in livelist">
                    <div class="live-main-header">
                        <div class="live-head">
                            <img :src="item.liveheadimg" alt="">
                        </div>
                        <div class="live-name">{{item.livename}}</div>
                    </div>
                    <div class="live-main-content" :style="'background-image:url('+item.livebg+')'">
                        <div class="live-content-box">
                            <div class="living">
                                <span class="living-dot"></span>
                                直播中
                                <span class="living-hot">{{item.livenum}}</span>
                            </div>
                            <div class="living-text">
                                {{item.livetext}}
                            </div>
                            <div class="living-list">
                                <div class="living-list-content">
                                    <ul>
                                        <li v-for="i in livelist[index].livelistimg">
                                            <img :src="i.livelistimg1" alt="">
                                            <div class="living-yen">&yen;{{i.liveyen}}</div>
                                        </li>
                                    </ul>
                                </div>   
                                <div class="living-list-right">
                                    <ul>
                                        <li v-for="a in livelist[index].livecomment">
                                            <div class="living-msg-img"></div>
                                            <span>{{a.comtext}}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:"live",
        data(){
            return{
                livelist:[],
            }
        },
        mounted(){
            this.$http.get('./data/datas/live.json')
            .then((response)=>{
                this.livelist=response.data.live
            })
            .catch(function (error){
            })
            .then(function () {
            });  
        }
    }
</script>
<style>
    li{
        margin:0;
    }
    .live-header{
        position:fixed;
        border-bottom: 1px solid #ececec;
        width:100%;
        background:#fff;
        padding-left: 4px;
        box-sizing: border-box; 
        z-index:2;
     }
    .live-header ul li{
        width: 24%;
        height:45px;
        line-height: 45px;
        margin:0 0 0 -4px;
        text-align:center;
    }
    .live-main-header{
       height: 45px;
    }
    .live-main{
        padding:45px 0;
    }
    .live-main>ul{
        padding:0 10px;
    }
    .live-main ul li{
        width:100%;
    }
    .live-head{
        width:45px;
        height:45px;
        transform:translateY(20%);
        margin:0 15px;
        float: left;
        position: relative;
        z-index: 1;
    }
    .live-head img{  
        width:100%;
        border-radius: 50%;
        border: 2px solid rgba(238, 237, 237, 0.9);
    }
    .live-name{
        float: left;
        height:45px;
        line-height: 60px;
    }
    .live-main-content{
        color:#fff; 
        height: 200px; 
        background-repeat:no-repeat;
        background-position: center;
        background-size:100% auto; 
        overflow: hidden;
    }
    .live-content-box{
        margin-top:66px;
        padding:5px 12px 12px;
        background:linear-gradient(180deg,transparent,rgba(0,0,0,0.4))
    }
    .living{
        width: 30%;
        background:rgba(0,0,0,.26);
        padding:0 5px;
        font-size:12px;
        border-radius: 3px;
    }
    .living-dot{
        display: inline-block;
        background:#f5342f;
        border-radius:50%;
        width: 8px;
        height: 8px;
        animation:2s livingdot linear infinite;
    }
    @keyframes livingdot{
        0%{
            opacity: 1;
        }
        100%{
            opacity:0;
        }
    }
    .living-hot{
        display: inline-block;
        box-sizing: border-box;
        background:url('../../data/images/living_fire_30x30.png') no-repeat 3px center;
        background-size:22% auto;
        padding-left:15px;
        margin-left:2px;
        height: 10px;
        line-height: 10px;
        border-left:1px solid rgba(255, 254, 254, 0.5)
    }
    .living-list{
        overflow: hidden;
    }
    .living-text{
        margin-top:5px;
    }
    .living-list-content {
        width:60%;
        height: 60px;
        margin-top:8px;
        float:left;
    }
    .living-list-content ul{
        display: flex;
    }
    .living-list-content ul li{
        margin-right:5px;
        position: relative;
    }
    .living-list-content ul li img{
        width:100%;
        display: block;
    }
    .living-yen{
        position:absolute;
        left:0;
        bottom:0;
        width: 100%;
        font-size:10px;
        height: 16px;
        line-height: 16px;
        padding-left:5px;
        background:linear-gradient(180deg,transparent,rgba(0,0,0,0.5))
    }
    .living-list-right{
        width:36%;
        /* background:pink; */
        float: left;
        margin:8px 0 0 8px;
        font-size: 10px;
    }
    .living-list-right ul li{
        margin-bottom:10px;
    }
    .living-msg-img{
        float: left;
        width: 14px;
        height: 14px;
        border-radius:50%;
        margin-right:4px;
        background:url('../../data/images/xiaofeiyan_100x100.jpg') no-repeat center;
        background-size:100% 100%;
    }
</style>