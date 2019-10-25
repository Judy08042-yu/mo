<template>
	<div class="main">
		<div class="navbar-top">
			<div class="show-navtop">
				<div class="nav-box">
					<ul>
						<li v-for="(a,index) in nav" v-bind:class="{ active:index==isActive}" @click="isShow(index)">
						{{a}}</li>				
					</ul>
					<div class="nav-more" @click="toTop()">
						<i class="more-icon iconfont icon-shangxiajiantou"></i>
					</div>
				</div>
				<i class="shadow-icon"></i>
			</div>
			<div class="navdown" v-show="shownav">
				<div class="navdown-box">
					<div class="navhead-box">
						<div class="navdown-head">推荐</div>
						<div class="recon-box">
							<ul>
								<li class="pinkbg">发现</li>
								<li>关注</li>
							</ul>
						</div>
					</div>
					<div class="navhead-box">
						<div class="navdown-head">热门</div>
						<div class="recon-box">
							<ul>
								<li>街拍</li>
								<li>品牌上新</li>
								<li>性价比</li>
								<li>美妆</li>
								<li>发型</li>
								<li>高颜值</li>
								<li>秋上新</li>
							</ul>
						</div>
					</div>
					<div class="navhead-box">
						<div class="navdown-head">身材</div>
						<div class="recon-box">
							<ul>
								<li>小个子</li>
								<li>肉肉girl</li>
								<li>s型身材</li>
								<li>梨型身材</li>
								<li>纸片人</li>
								<li>苹果身材</li>
								<li>X型身材</li>
								<li>显白</li>
								<li>遮肉显瘦</li>
								<li>遮小粗腿</li>
								<li>遮小肚腩</li>
								<li>平胸</li>
								<li>大胸</li>
								<li>显腿长</li>
							</ul>
						</div>
					</div>
					<div class="navhead-box">
						<div class="navdown-head">风格</div>
						<div class="recon-box">
							<ul>
								<li>韩系</li>
								<li>日系</li>
								<li>欧美</li>
								<li>国风</li>
								<li>潮酷</li>
								<li>学院</li>
								<li>复古</li>
								<li>简约</li>
								<li>少女甜美</li>
								<li>温柔风</li>
							</ul>
						</div>
					</div>
					<div class="navhead-box">
						<div class="navdown-head">场合</div>
						<div class="recon-box">
							<ul>
								<li>出游</li>
								<li>约会</li>
								<li>学校</li>
								<li>职场</li>
								<li>逛街</li>				
							</ul>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
		name:"nav",
        data(){
            return{
				shownav:false,
                msg:'find',
                isActive:0,
                list:'',
                nav:['发现','关注','秋上新','小个子','品牌上新','遮肉显瘦','温柔风','遮小粗腿','约会','梨型身材','遮小肚腩',
                '韩系','肉肉girl','高颜值','出游','职场','显腿长','少女甜美','黑色系','逛街']
            }
        },
        methods:{
			isShow(index){
				this.isActive=index;
			},
			toTop(){
				var totop=$('.navbar-top').offset().top;
				$('html,body').animate({scrollTop:425},10)
				this.shownav=!this.shownav;
				if(this.shownav){
					$('body').attr('style','position:fixed;width:100%;height:100%;top:-425px')
				}else{
					$('body').attr('style','')
				}
			}
        },
        mounted(){
            $(window).scroll(function(){
                if($(window).scrollTop()>425){
					$('.navbar-top').addClass('hidd-navtop');
                }else{
					$('.navbar-top').removeClass('hidd-navtop');
                }
            })
        }
    }
</script>
<style>
    .navbar-top{
		width: 100%;
    	border-bottom:1px solid #e5e5e5;
		overflow: hidden;
	}
    .show-navtop{
        overflow: hidden;
        position: relative;
    }
	.nav-box{
		float: left;
		height: 49px;	
		width:88%;
		box-sizing:border-box;
		background:#fff;
		overflow-y: hidden;
		padding:0 10px 0 8px;
	}
	.nav-box::-webkit-scrollbar{
		display: none;
	}
	.nav-box{
		font-size: 16px;
	}	
	.nav-box ul{
		overflow: hidden;
		width:9999px;
		font-weight: bold;
	}
	.nav-box ul li{
		float:left;
		height: 49px;	
		line-height: 49px;
		padding:0 12px;
		position: relative;
	}
	.nav-box ul li.active::after{
		position: absolute;
		content: '';
		left:50%;
		transform: translateX(-50%);
		bottom:10px;
		height: 2px;
		width: 25px;
		background:#ff5777;
	}
	.nav-more{
		width: 14%;
		height: 49px;
		position: relative;
		background:#fff;
        position: absolute;
        top:0;
        right:0;
	}
	.shadow-icon{
		position:absolute;
		height: 49px;
		width:37px;
		background: url('../../../data/images/shadow.png');
		background-size: 100% 100%;
		right:13%;
	}
	.more-icon{
		position: absolute;
		color:#999;
		font-size: 30px;
		text-align: center;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
    div.hidd-navtop{
        position: fixed;
        top:0;
        z-index: 2;
	}
	.main{
		background:rgb(241, 239, 239);
		padding-top:7px;
	}
	.navdown{
		border-top:1px solid #eee;
		background:rgba(0,0,0,0.7);
		font-size:12px;
		color:#333;
		position: fixed;
		top: 46px;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	.navhead-box{
		margin-bottom:10px;
	}
	.navdown-head{
		margin-bottom:5px;		
		color:#666;
	}
	.navdown-box{
		background:#fff;
		padding:12px 10px 0px;
		height: 360px;
		overflow-y: scroll;
	}
	.navdown-box::-webkit-scrollbar{
		display: none;
	}
	.recon-box li.pinkbg{
		color:#f46;
		background:rgba(255,68,102,0.1)
	}
	.recon-box ul li{
		background:#f6f6f6;
		border-radius:2px;
		width: 23%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin:0px 0% 3% 0px;
	}

</style>