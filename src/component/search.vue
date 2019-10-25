<template>
        <div class="search-box">
            <div class="search-header">
                <div class="search-left" @click="goback()"></div>
                <router-link to="/search">
                     <form action="" class="search-form">
                        <input type="text" placeholder="鞋子" v-focus>
                    </form>
                </router-link>
                <span class="search-text">搜索</span>
            </div>
            <div class="history-box">
                <div class="history-search">
                   <span class="history-icon"></span><span>历史搜索</span>
                   <span class="delete-icon"></span>
                </div>
                <div class="history">
                    <ul>
                       <li><router-link to="/">风衣</router-link></li>
                       <li><router-link to="/">鞋子</router-link></li>                    
                    </ul>
                </div>
            </div>
            <div class="hot-search">
                <div><span class="hot-icon"></span><span>热门搜索</span></div>
                <div class="hot-box">
                    <ul>
                        <li>
                            <router-link to="/">卫衣</router-link>
                        </li>
                        <li>
                            <router-link to="/">风衣</router-link>
                        </li>
                        <li>
                            <router-link to="/">鞋子</router-link>
                        </li>
                        <li>
                            <router-link to="/">外套</router-link>
                        </li>
                        <li>
                            <router-link to="/">睡衣</router-link>
                        </li>
                        <li>
                            <router-link to="/">背带裤</router-link>
                        </li>
                         <li>
                            <router-link to="/">牛仔裤</router-link>
                        </li>
                         <li>
                            <router-link to="/">毛衣</router-link>
                        </li>
                         <li>
                            <router-link to="/">连衣裙</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        // 钩子函数
        directives:{
            focus:{
                inserted(el){
                    el.focus()
                }
            }
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style>
a{
    color:#999;
    text-decoration: none;
}
</style>
<style scoped>
    .search-box{
        font-size: 12px;
        color:#999;
        position: relative;
    }
    .search-header{
        padding:5px 0;  
        width: 100%;
        height:34px;  
        border-bottom:1px solid #eee;
    }
    .search-left{
        position: absolute;
        left:10px;
        top:12px;
        width:7%;
		height:20px;
		background:url('../../data/images/search_left.png');
		background-size: 100% 100%;
    }
    .search-form{
        width:75%;
        height:24px;
        position:absolute;
        left:10%;
        top:10px;
    }
    .search-form input{
        position: absolute;
        width:100%;
        height:100%;
        border:1px solid #aaa;
        font-size: 12px;
        border-radius:4px;
        outline: none;
        padding-left:10px;
        box-sizing: border-box;
    }
    .search-form input:focus{
        border-color:#ff4466;
    }
    .search-text{
        float:right;
        margin: 10px 5% 0  0;
    }
    .history-box{
        padding:15px 10px;
        border-bottom:1px solid #eee;
    }
    .history-icon{
        float:left;
        width: 13px;
        height: 13px;
        background: url('../../data/images/history-search.png');
        background-size: 100% 100%;
        margin-right:5px;
    }
    .delete-icon{
        float:right;
        width: 13px;
        height: 13px;
        background: url('../../data/images/delete-box.png');
        background-size: 100% 100%;
    }
    .history{
        margin-top:15px;
    }
    .history ul li a,.hot-box ul li a{
        padding:4px 10px;
        border:1px solid #f5f5f5;
        border-radius:6px;
    }
    .hot-search{
        padding:15px 10px;
    }
    .hot-icon{
        float:left;
        width: 13px;
        height: 13px;
        background: url('../../data/images/hot_search.png');
        background-size: 100% 100%;  
        margin-right:5px;
    }
    .hot-box ul li{
        margin:10px 0;
    }
</style>