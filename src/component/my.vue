<template>
	<div class="login-main">	
		<h1>登录</h1>
		<div class="wchat-icon">
			<img src="../../data/images/wchat_icon_94x76.png" alt="">
			<span>微信登录</span>
		</div>
		<div class="oth-login">
			<h2>其他登录方式</h2>
			<ul>
				<li>
					<img src="../../data/images/qq_login_90x90.png" alt="">
					<div>QQ登录</div>
				</li>
				<li>
					<img src="../../data/images/phone_login_90x90.png" alt="">
					<div>免密登录</div>
				</li>
				<li>
					<img src="../../data/images/number_login_90x90.png" alt="">
					<div>账号登录</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style>
	.login-main{
		width: 85%;
		margin:0 auto;
	}
	h1{
		 font-size: 28px;
		 text-align: center;
		 margin:70px 0 50px;
	 }
	.wchat-icon{
		color:#fff;
		width: 100%;
		margin:0 auto;
		background: rgb(9, 187, 7);
		height: 50px;
		border-radius: 50px 50px 50px 50px;
		text-align: center;
		line-height: 50px;
	}
	.wchat-icon img{
		width: 22px;
		margin-right:10px;
	}
	.oth-login{
		color: #5e5e5e;
		text-align: center;
		margin-top:75px;
	}
	.oth-login ul{
		padding-top:40px;
		font-size: 13px;
	}
	.oth-login ul li{
		margin:0px;
		width: 30%;
	}
	.oth-login ul li img{
		width: 44px;
	}
</style>