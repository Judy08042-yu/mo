<template>
    <div>
        <v-header></v-header>
        <div class="hotSales">
           <div class="hot-plate hot-plateone">
                <img src="../../data/images/time_quickly_grab_210x280.png" alt="">
                <div class="countdown" v-if="time>0">
                    <span class="hour">{{hour}}</span><i></i><span class="minutes">{{minu}}</span><i></i><span class="seconds">{{seco}}</span>
                </div>
                <p>限时抢购</p>
           </div>
           <div class="hot-plate hot-platetow">
                <p>热销榜单</p>
           </div>
          <div class="hot-plate hot-platetow">
                <p>好货精选</p>
          </div>
            <div class="hot-plate hot-platetow">
                <p>新品快抢</p>
           </div>
        </div>
		<v-classify></v-classify>
        <div class="guess_you_like">
            <img src="../../data/images/guess_you_like.png" alt="">
        </div>
        <div class="guess_list">
            <div class="guess-box">
                <ul>
                    <li v-for="(i,v) in mall_">
                        <router-link to="/">
                            <div class="guess-img">
                                <img :src="i.mall_img" alt="">
                                <div class="guess-txtbg">
                                    已售{{i.solded}}件
                                </div> 
                            </div>
                            <div class="guess-text">
                                <p>{{i.mall_text}}</p>
                                <div class="price-collect">
                                    <span class="prince-icon">&yen;{{i.price}}</span>
                                    <span class="collect">{{i.collecct}} <span class="collect-icon"></span></span>
                                </div>
                                <div class="buynow">立即购买</div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import vheader from '../component/nav/header.vue'
import vclassify from '../component/classification/classify.vue'
    export default {
        name:"mall",
        data(){
            return {
                mall_:[],
                hour: 0,
                minu:0,
                seco:0,
                time:0
            }
        },
        methods:{
            countdown(){
                const end=Date.parse(new Date('2019-10-11'))
                const now=Date.parse(new Date())
                const time=end-now
                this.time=time
                let hour=parseInt(time/1000/60/60)
                let minu=parseInt(time/1000/60%60)
                let seco=parseInt(time/1000%60)
                this.hour=hour>9 ? hour:'0'+ hour
                this.minu=minu>9 ? minu:'0'+ minu
                this.seco=seco>9 ? seco:'0'+ seco
                setTimeout(()=>{
                    this.countdown()
                },1000)
            }
        },
        mounted(){
            this.countdown();
            this.$http.get('./data/datas/mallguessyoulike.json')
            .then((response)=>{
                this.mall_=response.data.mall
            })
            .catch(function (error){
            })
            .then(function () {
            });  
        },
        components:{
            "v-header":vheader,
            "v-classify":vclassify
        }
    }
</script>
<style scoped>
    img{
        display: block;
    }
    li{
        margin: 0;
    }
    .hotSales{
        width: 100%;
        display: flex;
        justify-content: center;
        justify-content: space-between;
        padding:10px;
        box-sizing: border-box;
        color:#fff;
        font-weight: bold;
    }
    .hot-plateone{
        background:url('../../data/images/time_quickly_bg_248x248.png');
        background-size:100% 100%;
    }
    .hot-platetow{
        background: url('../../data/images/the_selection_of_good_248x248.gif');
        background-size:100% 100%;        
    }
    .hot-plate{
        width:23%;     
        height: 23vw;
        position: relative;
        border-radius:4px;
    }
    .hot-plate img{
        width:100%;
        height: 100%;
    }
    .countdown{
        position: absolute;
        bottom:22px;
        width: 100%;
        text-align: center;
    }
    .countdown span{
        display: inline-block;
        background:#333;
        font-size:12px;
        padding:1px 1px;
        border-radius: 2px;
    }
    .countdown i{
        display: inline-block;
        width: 3px;
        height: 6px;
        background: url('../../data/images/colon_icon.png');
        background-size: 100% 100%;
    }
    .hotSales p{
        position: absolute;
        bottom: 4px;
        font-size:14px;
        text-align: center;
        width: 100%
    }
    .guess_list{
        background: rgb(241, 239, 239);
    }
    .guess_you_like{
        width:100%;
    }
    .guess_you_like img{
        width: 100%;
        display: block;
    }
    .guess-box{
        padding:10px 10px 50px;
        font-size: 12px;
    }
    .guess-box ul{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .guess-box ul li{
        width: 48.5%;
        position: relative;
        margin-bottom:10px;
    }
    .guess-img{
        position: relative;
    }
    .guess-box ul li img{
        width: 100%;
        border-radius: 2px;
    }
    .guess-txtbg{
         background:url('../../data/images/gray_bg_p.png');
         background-size:100%;
         width: 57px;
         height: 25px;
         line-height: 25px;
         padding:0 20px 0 10px;
         color: #fff;
         white-space: nowrap;
         position: absolute;
         left:0;
         bottom:8px;
    }
    .guess-text{
        width: 100%;
        padding: 6px;
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        background:#fff;
    }
    .guess-text p{  
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .price-collect{
        padding:5px 0;
    }
    .prince-icon{
        font-size:15px;
        font-weight: bold;
    }
    .collect{
        float: right;
        padding-top: 4px;
    }
    .collect-icon{
        display: inline-block;
        background:url('../../data/images/guess_star.png');
        background-size: 100% 100%;
        width: 15px;
        height: 15px;
        vertical-align: top;
    }
    .buynow{
        text-align: center;
        line-height: 25px;
        color: rgb(255, 255, 255);
        background-color: rgb(255, 87, 119);
        height: 25px;
        box-sizing: border-box;
        margin:6px 0 0;
        border-radius: 3px;
    }
</style>