<template>
	<div>
		<div class="detail">
			<div class="detail-top">
				<span class="iconfont icon-goleft-baise detail-top-pre" @click="shopgoback"></span>
				<router-link to="/shoppingcar"><span class="iconfont icon-gouwuchekong detail-top-shopping"></span></router-link>
			</div>
			<div class="detail-box">
				<div class="detail-img">
					<img src="../../data/images/classdetail/detail0001.png" alt="">
				</div>
			</div>
			<div class="now-price">
				<div class="detai-price-box">
					<div class="detail-price">
						<span class="price-yen">&yen;</span>
						<span class="detail-price-icon">57.85</span>
					</div>
					<div class="old-price">
						<span class="old-price-yen">&yen;89.00</span>
						<span class="quickly-price">快抢价</span>
					</div>
				</div>	
				<div class="ending">
					<span class="ending-time-span">距结束</span>
					<div class="ending-time">
						<span class="ending-num">33</span><span>:</span><span class="ending-num">15</span><span>:</span><span class="ending-num">46</span>
					</div>
				</div>					
			</div>
			<div class="detail-text">
				<img src="../../data/images/classdetail/detail_img_228x64.png" alt="">
				<span>微喇九分阔腿裤2019秋季新款女装西裤显瘦黑色韩版高腰休闲裤</span>
			</div>
			<div class="free-money">
				<span>免邮费</span>
			</div>
			<div class="detail_time_grab">
				<img src="../../data/images/classdetail/detail_time_grab_1500x152.png" alt="">
			</div>
			<div class="detail-three">
				<div class="datail-three-box">
					 <ul>
						 <li>
							 <span class="gou-icon"><img src="../../data/images/classdetail/detail_img_gou.png" alt=""></span><span>劣一赔三服务</span>
						 </li>
						 <li>
							 <span class="gou-icon"><img src="../../data/images/classdetail/detail_img_gou.png" alt=""></span><span>72小时发货</span>
						 </li>
						 <li>
							 <span class="gou-icon"><img src="../../data/images/classdetail/detail_img_gou.png" alt=""></span><span>7天无理由退货</span>
						 </li>
					 </ul>
				</div>
			</div>
			<div class="please-choose">
				<div class="choose-box">
					<span>请选择：颜色 尺码</span>
				</div>
			</div>
			<div class="detail-comment">
				<router-link to="/" class="detail-comment-a">
					<div>
						<span>买家评价 154 | 销量 772</span>
					</div>
				</router-link>
				<div class="detail-com-con">
					<div>
						<ul>
							<li>有图片(14)</li>
							<li>料子不错(12)</li>
							<li>款式好(12)</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>质量很好(14)</li>
							<li>卖家服务很好(6)</li>
							<li>做工不错(5)</li>
						</ul>
					</div>
				</div>
				<div class="comment-box">
					<div class="comment-box1">
						<div class="comment-header">
							<img src="../../data/images/classdetail/detail_comment_img.png" alt="">
							<span class="comment-name">擅***澄</span>
						</div>
						<div class="comment-text">
						<p>裤子好看好穿~很喜欢呀！质量确实挺好的，里面走线也很正确，各个细节做的都很好，觉得还挺厚实的哈哈哈！大小刚好，修饰腿型又不会有紧绷感</p>
						</div>
						<p>2019-05-07</p>
						<div class="comment-img">
							<ul>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
							</ul>
						</div>
					</div>
					<div class="comment-box1">
						<div class="comment-header">
							<img src="../../data/images/classdetail/detail_comment_img.png" alt="">
							<span class="comment-name">擅***澄</span>
						</div>
						<div class="comment-text">
						<p>裤子好看好穿~很喜欢呀！质量确实挺好的，里面走线也很正确，各个细节做的都很好，觉得还挺厚实的哈哈哈！大小刚好，修饰腿型又不会有紧绷感</p>
						</div>
						<p>2019-05-07</p>
						<div class="comment-img">
							<ul>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
								<li>
									<img src="../../data/images/classdetail/comment_img.png" alt="">
								</li>
							</ul>
						</div>
					</div>							
				</div>
			</div>
		</div>
		<div>
			<div class="detail-bottom">
				<div class="detail-bot-left">
					<div>
						<ul>
							<li>
								<span class="dianpu-icon iconfont icon-dianpu"></span>
								<span>店铺</span>
							</li>
							<li>
								<span class="dianpu-icon iconfont icon-liaotian"></span>
								<span>客服</span>
							</li>
							<li>
								<span class="dianpu-icon iconfont icon-shoucang"></span>
								<span>收藏</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="detail-bot-right">
					<div class="addshoppingcar">加入购物车</div>
					<div class="buynow">立即购买</div>
				</div>
			</div>
			<div class="show-add">
				<div class="show-add-box">
					<div class="show-header">
						<div class="show-close">
							<img src="../../data/images/classdetail/miss_icon_40x40.png" alt="">
						</div>
						<img src="../../data/images/classdetail/detail0001.png" alt="" class="show-img">
						<div class="show-yen">
							<div class="show-yen-box">
								<span>
									<span class="show-yen-icon">&yen;</span>
									<span class="yenicon">57.85</span>
								</span>
							</div>
							<div>库存2253件</div>
							<!-- 都不选-->
							<div v-if="indexc==-1&&indexs==-1">请选择：<span>颜色</span> <span class="size-icon">尺码</span></div>
							<!-- 只选颜色 -->
							<div v-else-if="indexs==-1">请选择：<span></span><span class="size-icon">尺码</span></div>
							<!-- 只选尺码 -->
							<div v-else-if="indexc==-1">请选择：<span>颜色</span><span class="size-icon"></span></div>
							<!-- 都选 -->
							<div v-else>已选择：<span>{{colortext}}</span> <span class="size-icon">{{sizetext}}</span></div>
						</div>
					</div>
					<div class="show-view">
						<div class="choose-color">
							<div class="showview-text">颜色</div>
							<ul>
								<li v-for="(i,index) in de_lists" :class="{choosed:index==indexc}" @click="choosed(i,index)">{{i.color}}</li>
							</ul>		
						</div>
						<div class="size">
							<div class="showview-text">尺码</div>
							<ul>
								<li  v-for="(i,index) in de_size" :class="{choosed:index==indexs}" @click="choosed2(i,index)">
									{{i.tit}}
								</li>
							</ul>		
						</div>
						<div class="choose-color">
							<div class="showview-text">数量</div>
							<div class="change-num">
								<span @click="del">-</span>
								<span>{{num}}</span>
								<span @click="add">+</span>
							</div>		
						</div>
					</div>
					<div class="determine" @click="determine">
						确定
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			de_lists:[],
			de_size:[],
			colortext:'',
			sizetext:'',
			num:1,
			indexc:-1,
			indexs:-1,
		}
	},
	mounted(){
		this.$http.get('./data/datas/detail.json')
        .then((response)=>{
			this.de_lists=response.data.choose
			this.de_size=response.data.choose[0].size
        })
        .catch(function (error){
        })
        .then(function () {
		});  
		$('.addshoppingcar').click(function(){
			$(".show-add").fadeIn();
		})
		$('.show-close').click(function(){
			$(".show-add").css('display','none');
		})
	},
	methods:{
        shopgoback(){
            this.$router.go(-1)
        },
		choosed(i,index){
			if(index!=this.indexc){
				this.indexc=index;
				this.colortext=i.color;
				// console.log(this.colortext)
			}else{
				this.indexc=-1;	
			}
		},
		choosed2(i,index){
			if(index!=this.indexs){
				this.indexs=index;
				this.sizetext=i.tit;
				console.log(this.sizetext)
			}else{
				this.indexs=-1;
			}
		},
		// 减少
		del(){
			this.num--;
			if(this.num<1){
				this.num=1;
				this.$toast({
					message: '至少要购买一件',
				})
			}
		},
		//增加
		add(){
			this.num++
		},
		determine(){
			if(this.indexc==-1||this.indexs==-1){
				this.$toast({
					message: '请选择商品规格',
				})
			}else{
				this.$toast({
					message: '加入购物车成功',
				})
			}
			
		}
	}
}
</script>
<style>
	a{
		text-decoration: none;
	}
	li{
		margin:0;
	}
	.detail{
		font-size: 11px;
		padding-bottom:50px;
	}
	.detail-top{
		padding:8px;
		position:absolute;
		width: 100%;
		box-sizing: border-box;
	}
	.detail-top-pre,.detail-top-shopping{
		display:inline-block;
		width: 35px;
		height: 35px;
		line-height:35px;
		text-align:center;
		background: rgba(0,0,0,.4);
		color:#fff;
		font-size: 20px;
		border-radius:50%;
	}
	.detail-top-shopping{
		float: right;
	}
	.detail-img{
		width:70%;
		margin:0 auto;
		padding-top:8px;
	}
	.detail-img img{
		width:100%;
		display: block;
	}
	.now-price{
		background:url('../../data/images/classdetail/detail_bg_1500x200.png') no-repeat;
		width:100%;
		height: 50px;
		line-height: 50px;
		color:#fff;
		padding:0 15px;
		box-sizing: border-box;		
	}
	.detai-price-box{
		height: 100%;
		width: 60%;
		float: left;
	}
	.detail-price{
		float: left;
	}
	.price-yen{
		position: relative;
		top:-8px;
		right:-4px;
	}
	.detail-price-icon{
		font-size: 26px;
	}
	.old-price{
		float: left;
		height: 100%;
		width: 50px;
		font-size: 12px;
		margin-left:5px;
		position: relative;
	}
	.old-price-yen{
		float: left;
		text-decoration: line-through;
		opacity: 0.7;
		position: absolute;
		top:-7px;
	}
	.quickly-price{
		float: left;
		position: relative;
		line-height: 13px;
		padding:1px 2px;
		top: 27px;
		background: rgba(255, 255, 255, 0.2);
	} 
	.ending{
		font-size:12px;
		float: left;
		width: 40%;
		text-align:center;
		position: relative;
	}
	.ending-time-span{
		position: absolute;	
		line-height: 12px;
    	top: 8px;	
		left: 50%;
    	transform: translateX(-50%);
	}
	.ending-time{
		margin-top:25px;
		line-height: 12px;	
		color:#000;
	}
	.ending-num{
		color:#fff;
		display: inline-block;
		padding:2px 2px;
		border-radius: 3px;
		background:#333;
		margin:0 5px;
	}
	.detail-text{
		padding:9px 15px 0;
		font-size: 15px;
	}
	.detail-text img{
		width: 64px;
		position:relative;
		top:2px;
	}
	.free-money{
		padding:0px 15px 0;
		font-size: 11px;
		color:#999999;
		line-height: 30px;
		border-bottom:1px solid #eeeeee;
	}
	.detail_time_grab img{
		width:100%;
	}
	.detail-three{
		background: #eee;
		padding:10px 0;
	}
	.datail-three-box,.choose-box{
		padding:0 10px;
		height: 38px;
		line-height: 38px;
		background: #fff;
	}
	.datail-three-box ul li{
		width: 30%;
		line-height: 15px;
		margin:0;
	}
	.gou-icon{
		width: 15px;
		height: 15px;
		float: left;
		margin-right:5px;
	}
	.gou-icon img{
		width: 100%;
	}
	.choose-box{
		height: 40px;
		padding:0 10px;
		line-height: 40px;
	}
	.please-choose{
		padding-bottom: 10px;
		background: #eee;
	}
	.detail-comment{
		padding:0 10px;
	}
	.detail-comment-a{
		color: #999;
		display: inline-block;
		padding:10px 0;
	}
	.detail-com-con{
		color:#FF2255;
	}
	.detail-com-con ul li{
		background:#FFE8EE;
		padding:0 5px;
		line-height: 24px;
		margin:0 5px 5px 0;
	}
	.comment-box1{
		padding:10px 0 15px;
		color:#727272;
		border-bottom:1px solid #eee;
	}
	.comment-header{
		overflow: hidden;
	}
	.comment-header img{
		width: 30px;
		border-radius: 50%;
		float: left;
	}
	.comment-name{
		float: left;
		margin-top:8px;
	}
	.comment-text{
		margin:7px 0;
	}
	.comment-img{
		margin:12px 0;
	}
	.comment-img ul li img{
		width:70px;
	}
	.detail-bottom{
		height: 50px;
		width: 100%;
		position: fixed;
		bottom:0;
		background:#fff;
		border-top:1px solid #eee;
		overflow: hidden;
		font-size: 12px;
	}
	.detail-bot-left{
		float: left;
		width: 50%;
	}
	.detail-bot-left ul li{
		width:32%;
		margin-left:-4px;
		text-align: center;
	}
	.detail-bot-left ul li:nth-child(-n+2){
		border-right:1px solid #eee;
	}
	.dianpu-icon{
		margin-top:6px;
		display: block;
		font-size: 20px;
	}
	.detail-bot-right{
		width: 50%;
		float: right;
		overflow: hidden;
	}
	.detail-bot-right div{
		width: 50%;
		float: left;
		line-height: 50px;
		text-align: center;
	}
	.addshoppingcar{
		color: #ff5777;
    	background-color: #ffe6e8;
	}
	.buynow{
		background: linear-gradient(90deg,#ff5777,#ff468f);
		color:#fff;
	}
	.show-add{
		position: fixed;
    	left: 0;
    	top: 0;
    	right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 1;
		display: none;
	}
	.show-add-box{
		width:100%;
		position: absolute;
		bottom: 0;
		background:#fff;
		box-sizing: border-box;
		font-size: 11px;
	}
	.show-header{
		padding:15px 7px;
	}
	.show-header::after{
		display: block;
		content:"";
		width:0;
		height:0;
		clear: both;
	}
	.show-close{
		width: 15px;
		height: 15px;
		position: absolute;
		right: 10px;
	}
	.show-close img{
		width: 100%;
	}
	.show-img{
		width: 80px;
		float: left;
		position: absolute;
		top:-20px;
		margin-left:10px;
	}
	.show-yen{
		float: left;
		margin-left:100px;
	}	
	.show-yen-icon{
		position: relative;
		top:-6px;
	}
	.yenicon{
		font-size: 24px
	}
	.show-view{
		padding:0 7px;
	}
	.showview-text{
		margin:5px 0;
	}
	.choose-color,.size{
		margin-bottom:20px;
	}
	.choose-color ul li,.size ul li{
		border: 1px solid #bbb;
		border-radius:4px;
		line-height: 25px;
		height: 25px;
		padding:0 15px;
		margin:0 15px 0 0;
	}
	.change-num span{
		display: inline-block;
		padding:5px 10px;
		border:1px solid #eee;
	}
	.determine{
		color: #fff;
		text-align: center;
		height: 50px;
		line-height: 50px;
		background: linear-gradient(90deg,#ff5777,#ff468f);
	}
	.choose-color ul li.choosed{
		color: #ff5777;
		border:1px solid #ff5777;
	}
	.size ul li.choosed{
		color: #ff5777;
		border:1px solid #ff5777;
	}
</style>
