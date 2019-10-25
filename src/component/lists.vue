<template>
	<div class="lists-main">
		<div class="lists-header">
				<div class="lists-pre" @click="back()"></div>
				<div class="lists-box">
					<form action="" class="lists-form">
						<input type="text" placeholder="女装" class="lists-input">
					</form>
					<i class="lists-reflesh"></i>
				</div>
				<router-link to="/shoppingcar" class="lists-shopping"></router-link>
		</div>
		<div class="lists-nav">			
			<a href="#" v-for="(a,index) in lista" v-bind:class="{active:index==isActive}" @click="isShow(index)">{{a}}</a><a href="#" class="price-show">价格<span></span></a>
		</div>
		<div class="choose-price">
			<div class="price-area">
				<ul>
					<li><span>50-80</span> </li>
					<li><span>80-90</span></li>
					<li><span>90-100</span></li>
				</ul>
			</div>
			<div class="area-price">
				<span>区间(元)</span>
				<input type="number" value="50"></input>
				<span class="area-price-line"></span>
				<input type="number" value="80">
				<button class="price-btn">确认</button>
			</div>
		</div>
		<div class="lists-content">
			<ul>
				<li v-for="(v,i) in list">
					<router-link to="/detail">
						<div class="lists-con-box">
							<img :src="v.iUrl" alt="">					
						</div>
						<div class="lists-con-text">
							<div class="lists-text-box">
								<span class="hot-sale-icon">热卖</span>{{v.tex}}
							</div>
							<div class="lists-yen-box">
								<span class="lists-yen">&yen;{{v.yen}}</span>
								<div class="lists-col-num">
									<span>{{v.num}}</span>
								</div>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="quickly-icon">
			<div></div>
		</div>
	</div>
</template>
<script>
	 export default {
		data(){
			return{
				list:'',
				isActive:0,
				lista:['综合','销量','新品']
			}
		},
        methods:{
            back(){
                this.$router.go(-1)
			},			
			isShow(index){
				this.isActive=index;
			}
		},
		mounted () {
			$('.price-show').click(function(){		
				$('.choose-price').slideToggle(250);
			})
			this.$http.get('./data/datas/list.json')
			.then((response)=>{
				this.list=response.data.list1
			})
			.catch(function (error){
			})
			.then(function () {
			});  
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
	.lists-header{
		position: fixed;
		width:100%;
		height: 45px;
		background:#fafafa;
		border-bottom:1px solid #c9c7c8;
	}
	.lists-pre,.lists-shopping{
		height: 100%;
		width: 14%;
		background: url('../../data/images/lists_pre_img.png') no-repeat center;
		background-size:50% auto;
		float: left;
	}
	.lists-box{
		color:#5e5e5e;
		height: 30px;
		margin-top:8px;
		float: left;
		background: #ececec;
		position: relative;
		width:72%;
	}
	.lists-form{
		border:none;
		height: 100%;
		padding-left:25px;
		background:url('../../data/images/search.png') no-repeat 5px 6px;
		background-size:6% auto;
	}
	.lists-input{
		background: #ececec;
		border:none;
		outline: none;
		height: 100%;
	}
	.lists-reflesh{
		display: inline-block;
		background:url('../../data/images/reflesh.png') no-repeat center;
		background-size:100% 100%;
		height: 25px;
		width: 25px;
		position: absolute;
		top: 0;
		right:5px;
	}
	.lists-shopping{
		background: url('../../data/images/shopping-caricon.png') no-repeat center;
		background-size:40% auto;
	}
	.lists-nav{
		position:fixed;
		top:46px;
		width:100%;
		height: 40px;
		background:#fff;
		border-bottom: 1px solid #eaeaea;
	}
	.lists-nav a{
		display: inline-block;
		text-align: center;
		width:25%;
		line-height: 40px;
		color:#5e5e5e;
		position:relative;
	}
	.lists-nav a.active{
		color:#ff5b76;
	}
	.lists-nav a:nth-child(-n+3)::after{
		position: absolute;
		content:'';
		right:0;
		height: 20px;
		top:50%;
		transform: translateY(-50%);
		width: 1px;
		background:#e6e6e6;
	}
	.lists-content{
		padding:101px 0 20px;
		background: rgb(241, 239, 239);
	}
	.lists-content ul{
		display:flex;
		justify-content: space-around;
    	flex-wrap: wrap;
		padding:0 5px;
	}
	.lists-content ul li{
		width:48%;
		text-align: center;
	}
	.lists-content ul li img{
		width:100%;
		display: block;
	}
	.lists-con-text{
		font-size: 12px;
		color: #333;
		padding:7px 5px;
		background: #fff;
	}
	.hot-sale-icon{
		display: inline-block;
		color:#fff;
		background:rgb(17, 16, 16);
		height: 18px;
		line-height: 18px;
		padding:0 3px;
		margin-right:3px;
	}
	.lists-text-box{
		overflow: hidden;
		text-overflow: ellipsis;
  		display: -webkit-box;
  		-webkit-line-clamp: 2;
  		-webkit-box-orient: vertical;
		margin-bottom:5px;
	}
	.lists-yen-box{
		overflow: hidden;
	}
	.lists-yen{
		color:#333;
		font-size:16px;
		font-weight:bold;
		float: left;
	}
	.lists-col-num{
		background: url('../../data/images/guess_star.png') no-repeat right;
		background-size:auto 100%;
		width: 35%;
		float: right;
	}
	.choose-price{
		position: fixed;
		width:100%;
		background:#fff;
		top:87px;
		padding:7px 10px 0;
		display: none;
		box-sizing: border-box;
	}
	.price-area ul li{
		width: 30%;
		text-align: center;
		background: #f3f3f3;
	}
	.price-area ul li span{
		display: inline-block;
		height: 30px;
		line-height: 30px;
	}
	.area-price{
		height: 50px;
		line-height: 50px;
	}
	input[type='number']{
		width: 16%;
		height: 30px;
		text-align: center;
		border:1px solid #e5e5e5;
		margin:10px 0 0 10px;
		padding:0 5px;
	}
	.area-price-line{
		display: inline-block;
		width:10px;
		border-top:1px solid #cbcbcb;
		margin:0 -12px 6px 0px;
	}
	.price-btn{
		width: 21%;
		height: 30px;
		background: #ff5b76;
		border:none;
		color:#fff;
		border-radius: 2px;
	}
</style>