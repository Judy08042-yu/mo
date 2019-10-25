<template>
    <div class="footer">
        <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/mall">商城</router-link></li>
            <li><router-link to="/live">直播</router-link></li>
            <li><router-link to="/my">我</router-link></li>
        </ul>
    </div>
</template>
<style scoped>
    a{
        color:rgb(109, 103, 103);
        text-decoration:none;
    }
    .footer{
        position: fixed;
        bottom:0;
        background: #fff;
        width:100%;
        border-top: 1px solid rgb(226, 226, 226);
        z-index:1;
    }
    .footer ul{
        margin:0;
    }
    .footer li{
        width:22%;
        height: 44px;
        line-height: 44px;
        margin:0;
        text-align: center;
    }
    .router-link-active{
        color: rgb(255, 63, 120);
    }
</style>
<script>
    export default {
        
    }
</script>
    
