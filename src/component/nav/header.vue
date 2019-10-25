<template>
   	<div class="headerbox">
		<div class="head">
			<router-link to="/classdetail"></router-link>
			<div class="form-box">
				<router-link to="/search">
					<form action="">
						<i class="icon-search"></i>
						<input type="text" placeholder="鞋子" class="inputsearch">
					</form>
				</router-link>
			</div>
			<span class="chat-icon"></span>
		</div>
       <router-view></router-view>
	</div>
</template>

<style scoped>
    a{
		color:#000;
	}
	li{
		margin:0;
	}
    .head{
		font-size: 12px;
		padding:8px 0px;
		overflow: hidden;
		background: #fff;
    	border-bottom:1px solid #e5e5e5;	
	}
	.head>a{
		width:7%;
		height:20px;
		background:url('../../../data/images/tabel.png');
		background-size: 100% 100%;
		float: left;
		position: relative;
		top:5px;
		margin:0 20px 0;
	}
	.form-box{
		position: relative;
		float: left;
		width:67%;
		box-sizing: border-box;
		background:#eee;
		padding-left:30px;
		border-radius:4px;
	}
	.icon-search{
		position: absolute;
		display: inline-block;
		background:url('../../../data/images/search.png');
		background-size: 100% 100%;
		width:7%;
		height: 20px;
		top:50%;
		left:5px;
		transform: translateY(-50%);
	}
	.inputsearch{
		border:none;
		outline: none;
		height: 30px;
		line-height: 30px;
		color:#999;
		background:#eee;
		width:100%;
		border-radius:4px;
	}
	.chat-icon{
		float: right;
		background: url('../../../data/images/chat.png');
		height: 20px;
		width: 6%;
		background-size: 100% 100%;
		position: relative;
		right:5.33%;
		margin-top:5px;
	}
</style>
<script>
    export default {
        name:"header"
    }
</script>