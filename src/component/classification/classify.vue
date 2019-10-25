<template>
    <div>
        <div class="classify">
			<ul>
				<li v-for="(i,v) in list">
					<router-link :to="'/lists/'+i.id">
						<div class="class-img">
							<img :src="i.imgUrl" alt="">
						</div>
						<div class="class-txt">{{i.title}}</div>
					</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
	name:"classify",
	data(){
			return{
				list:[],
			}
	},
	mounted(){
		console.log(this.$route.params)
		
		this.$http.get('./data/datas/classify.json')
		.then((response)=>{
			this.list=response.data.classify
		})
		.catch(function (error){
		})
		.then(function () {
		});  
	}
}
</script>
<style>
	.classify{
		font-size:12px;
		padding:0 10px;
		background:#fff;
		padding-bottom:8px;
	}
	.classify ul{
		overflow: hidden;
	}	
	.classify ul li{
		width:20%;
		text-align: center;
		margin:0;
		float:left;
		padding-top: 10px;
	}
	.classify ul li a{
		color:rgb(102, 102, 102);
	}
	.class-img{
		border-radius: 50%;
	}
	.class-img img{
		width:70%;
	}
</style>

