<template>
    <div class="shoppingmain">
        <div class="shopp-header">
            <div class="shopp-pre" @click="shoppGoback"><img src="../../data/images/search_left.png" alt=""></div>
            <div class="shopp-head-text">购物车(5)</div>
            <div class="shopp-head-right">
                <span class="shop-editor">编辑</span>
                <span class="shopp-icon iconfont icon-liaotian"></span>
            </div>
        </div>
        <div class="shopp-box">
            <div class="shopinmain-box" v-for="(v,index) in shoppinglist">
                <div class="shopin-box-head">
                    <!-- 局部全选 -->
                    <span class="shopp-circle" @click="localchoosed(v,index)" :class="{'circlechoosed':isLaChoose[index]}"></span>
                    <span>{{v.shopname}}</span>
                    <span v-show='false'>{{a}}</span>
                    <span class="shopp-coupon" v-if="index==0">领券 ></span>
                </div>
                <div class="shopp-list">
                    <ul>
                        <li v-for="(v2,i) in shoppinglist[index].shoppinglist1">
                            <div class="list-circle">
                                <!-- 单选 -->
                                <span class="shopp-circle" @click="singlechoosed(v2,i,index)" :class="{'circlechoosed':v2.circlechoosed}"></span> 
                            </div>
                            <div class="shopp-list-box">
                               <div class="shopp-list-img">
                                   <img :src="v2.shoppimg" alt="">
                                </div> 
                                <div class="shopp-list-text">
                                    <h5>{{v2.shoppingtext}}</h5>
                                    <p>{{v2.shoppingstyle}}</p>                                
                                    <p class="yen-p">&yen;{{v2.shoppingnowyen}}
                                        <span class="shop-old-yen" v-if="v2.shoppingoldyen">&yen;{{v2.shoppingoldyen}}</span> 
                                        <span class="shopp-num">x{{v2.shoppingnum}}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="shopp-bottom">
            <div class="choose-all">
                <!-- 全选 -->
                <span class="shopp-circle" @click="allchoosed" :class="{circlechoosed:allSelected}"></span>
                <span >全选（{{num}}）</span>
            </div>
           <div class="all-price">
               {{allMoney | filterallMoney}}
           </div>
           <div class="settlement" @click="gotobuy(allMoney)">去结算</div>
        </div>	
    </div>
</template>
<script>
export default {
    data(){
        return{
            allSelected:false,
            isLaChoose:[false,false],
            shoppinglist:[],
            a: 0,
            // 总数量
            num:0,
            // 总价
            allMoney:0
        }
    },
    methods:{
        // 去结算
        gotobuy(allMoney){
            this.$store.commit("gotobuy",allMoney)
        },
        shoppGoback(){
            this.$router.go(-1)
        }, 
        // 全选
        allchoosed(){
            this.a++         
            this.allSelected=!this.allSelected;
            if(this.allSelected){ 
                this.shoppinglist.forEach((v,i)=>{
                    this.isLaChoose[i]=true,
                    v.shoppinglist1.forEach((vi,ii)=>{
                        vi.circlechoosed=true;   
                    }) 
                })
            }
            else{
                this.shoppinglist.forEach((v,i)=>{
                    this.isLaChoose[i]=false,
                    v.shoppinglist1.forEach((vs,is)=>{
                        vs.circlechoosed=false;
                    })
                })               
            }
            this.getallMoney();
            this.getchooseNum()
        },

        // 局部全选
        localchoosed(v,index){
            this.isLaChoose[index] = !this.isLaChoose[index];
            var listObject=this.shoppinglist[index].shoppinglist1
            if(this.isLaChoose[index]){
                for(var x in listObject){  
                    this.$set(listObject[x],'circlechoosed',true)
                }      
                this.getallMoney();
                this.getchooseNum()
            }else{
                for(var x in listObject){
                    this.$set(listObject[x],'circlechoosed',false)
                }
                this.getallMoney();
                this.getchooseNum()
            }
            // 控制全选
            let part=[];
            this.isLaChoose.forEach((v,i)=>{
                if(v){
                    part.push(v)
                }
            })
            if(this.shoppinglist.length==part.length){
                this.allSelected=true;
            }else{
                this.allSelected=false;
            }
        },  

        // 单选
        singlechoosed(v2,i,index){
            let listObject=this.shoppinglist[index].shoppinglist1;   
            if(v2.circlechoosed){
                v2.circlechoosed=!v2.circlechoosed
                this.getallMoney();
                this.getchooseNum()
            }else{     
                this.$set(v2,'circlechoosed',true)
                this.getallMoney();
                this.getchooseNum()
            }
            //  控制局部全选
            var listChecked=[];
            listObject.forEach((v2,i)=>{
                if(v2.circlechoosed==true){
                    listChecked.push(v2)
                }
            }) 
            if(listChecked.length==listObject.length){
                this.isLaChoose[index] = true;   
            }else{
                this.isLaChoose[index] = false;
            }
            // 控制全选
            var allChecked=[];
            var all=[];
            this.shoppinglist.forEach((v,i)=>{
                v.shoppinglist1.forEach((vs,is)=>{
                        all.push(vs)
                    if(vs.circlechoosed==true){
                        allChecked.push(vs)
                    }
                })
            })
            if(all.length==allChecked.length){
                this.allSelected=true;
            }else{
                this.allSelected=false;
            }
        },

        // 计算总价格
        getallMoney(){
            this.allMoney=0;
            this.shoppinglist.forEach((v,i)=>{
                v.shoppinglist1.forEach((vi,ii)=>{
                    if(vi.circlechoosed==true){
                        this.allMoney+=vi.shoppingnowyen*vi.shoppingnum
                    }    
                }) 
            })
        },
        
        // 总量
        getchooseNum(){
            this.num=0;
            this.shoppinglist.forEach((v,i)=>{
                v.shoppinglist1.forEach((vi,ii)=>{
                    if(vi.circlechoosed==true){
                        this.num++
                    }    
                }) 
            })
        }
    },
    filters: {
        filterallMoney(allMoney){
            return '￥'+allMoney.toFixed(2)
        }
    },
    mounted () {
        this.$http.get('./data/datas/shopp.json')
        .then((response)=>{
            this.shoppinglist=response.data.shopping;
        })
        .catch(function (error){
        })
        .then(function () {
        });  
    },
}
</script>

<style>
    .shoppingmain{
        background:#f5f5f5;
        font-size: 15px;
        color:rgb(94, 94, 94);
    }
    .shopp-box{
        padding-top:45px;
        padding-bottom:70px;
    }
    .shopp-header{
        height: 45px;
        width:100%;
        line-height: 45px;
        background:#fff;
        position: fixed;
        border-bottom: 1px solid #c9c7c8;
        z-index: 1;
    }
    .shopp-pre{
        float: left;
        width: 10%;
        height: 45px;
        line-height: 50px;
        text-align: center;
    }
    .shopp-pre img{
         width:50%;
    }
    .shopp-head-text{
        float: left;         
        width: 70%;
        text-align: center;
    }
    .shopp-head-right{
        float: left;
        width:20%;
    }
    .shopinmain-box{
        margin-top:13px;
        font-size:12px;
        background:#fff;
    }
    .shopin-box-head{
        box-sizing:border-box;
        padding:7px 13px;    
        border-bottom: 1px solid #e5e5e5    
    }
    .shopp-circle{
        display: inline-block;
        width: 17px;
        height: 17px;
        position: relative;
        top:3px;
        background:url('../../data/images/classdetail/checkbox.png') no-repeat 0 100%;
        background-size: 100% auto;
    }
    span.circlechoosed{
        background-position:0 0;
    }
    .shopp-coupon{
        float: right;
    }
    .shopp-list{
        padding:8px;
    }
    .shopp-list ul li{
        padding-left:34px;
        margin:0 0 20px;
        position: relative;
    }
    .shopp-list-img{
        width: 64px;
        height: 82px;
        float: left; 
        margin-right:6px;
    }
    .shopp-list-text h5{
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight:bold;
    }
    .shopp-list-text p{
        color:#999;
    }
    .shopp-list-img img{
        width:100%;
        height: 100%;
    }
    .shopp-list-text .yen-p{
        margin-top:14px;
        font-size:13px;
        color:#333;
    }
    .shopp-list-text .shop-old-yen{
        color:#999;
        font-size: 12px;
        text-decoration: line-through;
    }
    .shopp-num{
        float: right;
        color:#999;
    }
    .list-circle{
        left:6px;
        top:50%;
        transform: translateY(-50%);
        position:absolute;
    }
    .shopp-bottom{
        font-size: 13px;
        border-top: 1px solid #c9c7c8;
        position: fixed;
        width:100%;
        bottom:0;
        background:#fff;
        padding:8px 12px;
        box-sizing: border-box;
    }
    .choose-all{
        display: inline-block;
    }
    .all-price{
        display: inline-block;
    }
    .settlement{
        float: right;
        padding:5px 20px;
        color: #fff;
        border-radius: 4px;
        background: #ff5777;
    }
</style>