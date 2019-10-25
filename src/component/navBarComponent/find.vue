<template id="find">
<!-- 发现模块 -->
    <div class="contentFind">
        <ul>
            <li v-for="(i,v) in c_list">
                <router-link to="/">
                    <div class="content-box">
                        <div class="contentimg-box">
                            <div class="content-img">
                                <img :src="i.images" alt="">
                            </div>
                            <div class="play-icon"></div>
                            <div class="content-name">
                                <span class="ec-name">{{i.images_text}}</span>
                                <span class="pack-icon"></span>
                            </div>
                        </div>  
                        <div class="contetn-text">{{i.text}}</div>      
                    </div>
                </router-link>
                <router-link to="/" class="head-pro">
                    <div class="head-portrait">
                        <div class="head-portrait-img">
                            <img :src="i.imgheader" alt="">
                        </div>
                        <div class="head-pro-name">
                            <span class="user-name">{{i.name}}</span>
                            <span>165cm 48kg</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:"find",
        data(){
            return{
                c_list:[]
            }
        },
        mounted(){
        this.$http.get('./data/datas/contentlist.json')
        .then((response)=>{
            this.c_list=response.data.content_list
        })
        .catch(function (error){
        })
        .then(function () {
        });  
    }
    }
</script>
<style>
    .contentFind{
        padding: 10px 5px 50px 10px;
        background: rgb(241, 239, 239);
    }
    .contentFind ul{
        font-size: 12px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .contentFind ul li{
        width:33.33%;
        margin-bottom: 9px
    }
    .content-box{
        width: 95%;
        border-radius: 4px;
        background:#fff;
    }
    .content-img img{
        width:100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .contentimg-box{
        position: relative;
    }
    .play-icon{
        background:url('../../../data/images/play.png');
        width: 20px;
        height: 20px;
        background-size:100% 100%;
        position: absolute;
        top:6px;
        right:6px;
    }
    .content-name{
        position: absolute;
        bottom:0;
        padding:6px;
        width: 100%;
        box-sizing: border-box;
    }
    .ec-name{
        display: inline-block;
        background: rgba(51,51,51,.7);
        font-weight: bold;
        line-height: 15px;
        color: #fff;
        width:75%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding:0 3px;
    }
    .pack-icon{
        position: absolute;
        right:6px;
        width: 14px;
        height: 14px;
        background:url('../../../data/images/package_icon36x36.png');
        background-size:100% 100%;
    }
    .contetn-text{
        height: 31px;
        overflow: hidden;
        color: #666;
        margin: 9px 6px 0px 6px;
        text-overflow: ellipsis;
    }
    .head-portrait{
        background:#fff;
        padding: 10px 0px 10px 6px;
        overflow: hidden;
    }
    .head-portrait-img{
        float: left;
        width: 26%;
        height: 26%;
        margin-right:5px;
        border-radius:50%;
    }
    .head-portrait-img img{
        border-radius:50%;
        width:100%;
    }
    .head-pro-name{
        float: left;
        width: 66%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
     .head-pro-name span{
         display: block;    
         color:#333;
     }
     .user-name{
         font-weight: bold;
     }
     .head-pro{
        display: block;
        width: 95%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
     }
</style>