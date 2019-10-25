<template>
    <div class="classdetail-box">
       <div class="classdetail-header">
            <router-link to="/" class="login-icon"></router-link>
            <router-link to="/search">
                <form action="" class="class-form">
                <input type="text" placeholder="卫衣" class="class-input">
                </form>
            </router-link>
          <router-link to="/shoppingcar" class="shopping-icon"></router-link>
       </div>
       <div class="class-content">
            <div class="side-class">
                <ul>
                    <li v-for="(a,i) in classlist" :class="{activebg:i==ind}" @click="changebg(i)">{{a}}</li>
                </ul>
            </div>
            <div class="class-detail">
                <div class="class-detail-box"  v-for="(item,index) in classlist2" v-if="index==ind">
                    <router-link to="/" class="class-a" v-for="it in classlist2[index].listimg">
                        <div class="img-box">
                            <img :src="it.nowimg" alt="">
                        </div>
                        <p>{{it.text}}</p>
                    </router-link> 
                </div>
            </div>
       </div>
    </div>
</template>    
<script>
     export default {
        name:"classdetail",
        data(){
            return {
                ind:0,
                classlist:[],
                classlist2:[],
            }
        },
        mounted(){
             this.$http.get('./data/datas/class_detail.json')
            .then((response)=>{
                this.classlist=response.data.listname;
                this.classlist2=response.data.class_detail
                console.log( this.classlist2)
            })
            .catch(function (error){
            })
            .then(function () {
            });  
        },
        methods:{
           changebg(ind){
				this.ind=ind;
			}
        }
    }
</script>
<style>
    a{
        text-decoration: none;
        color:#666;
    }
    li{
        margin:0
    }
    .classdetail-box{
          font-size: 12px;
    }
    .classdetail-header{
        width:100%;
        height: 25px;
        padding:7px 5px;
        position: fixed;
        top:0;
        background: #fff;
        border-bottom:1px solid #eee;
        z-index:1;
    }
    .login-icon{
        float: left;
        background: url('../../../data/images/chat.png') no-repeat center;
        width:7%;
        height: 100%;
        background-size: 90% auto;
        margin:0 10px;
    }
    .class-form{
        float: left;
        height: 25px; 
        background: #eee; 
        width:70%;     
        border-radius: 3px;
    }
    .class-form input{
        border:none;
        outline: none;
        padding-left:25px;
        background:url('../../../data/images/search.png') no-repeat 5px 5px;
        height: 100%;
        background-size: 10% auto;
    }
    .shopping-icon{
        float: left;
        background: url('../../../data/images/shopping-caricon.png') no-repeat center;
        margin-left:10px;
        width:7%;           
        height:100%;
        background-size: 90% auto;
     }
    .side-class{
        width: 24%;
        color:#666;
        line-height: 45px;
        float: left;
        height: 626px;
        overflow-y: auto;
    }
    .side-class::-webkit-scrollbar{
		display: none;
	}
    .side-class ul li{
        width: 100%;
        text-align: center;
        background:#eee;
        position:relative;
    }
    .class-content{
        margin-top:40px;
        overflow: hidden;
    }
    .side-class ul li.activebg{
        background:#fff;
        color:#FF5777;
        font-weight: bold;
    }
    .side-class ul li.activebg:before{
        position:absolute;
        content:"";
        width:3px;
        height:14px;
        left:0;
        top:50%;
        transform:translateY(-50%);
        background:#FF5777;
    }
    .class-detail{
        padding-left:24%;
        width: 76%;
    }
    .class-detail-box{

        padding:15px 0 0 10px;
    }
    .class-a{
        display: inline-block;
        text-align: center;
        width: 33%;
        margin:10px 0;
    }
    .img-box{
        width: 65px;
        height: 65px;
        margin: auto;
    }
    .img-box img{
        width:100%;
    }
    .class-three{
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
    }
    .class-three ul li{
       width:31%;
       height:40px;
       line-height: 40px;
       text-align: center;
   }
</style>
