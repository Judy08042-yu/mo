<template>
		<div>
			<v-header></v-header>
			<mt-swipe :auto="4000">
				<mt-swipe-item><img src="../../data/images/mogu_images1.png" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/mogu_images2.png" alt=""></mt-swipe-item>
				<mt-swipe-item><img src="../../data/images/mogu_images3.png" alt=""></mt-swipe-item>
			</mt-swipe>
			<v-classify></v-classify>
			<div>
				<v-nav></v-nav>
				<component :is="msg"></component>
			</div>
		</div>
</template>
<script>
import vheader from '../component/nav/header.vue'
import vclassify from '../component/classification/classify.vue'
import vnav from '../component/navBarComponent/nav.vue'
import find from '../component/navBarComponent/find.vue'
import takecare from '../component/navBarComponent/takecare.vue'
	export default{
		name:"home",
		data(){
			return{
				msg:"find",
				list:[]
			}
		},
		components:{
			'v-header':vheader,
			'v-classify':vclassify,
			"v-nav":vnav,
			"find":find,
			"takecare":takecare
		}
	}
</script>
<style>
	li{
		margin:0;
	}
	.mint-swipe-items-wrap{
		padding-bottom:34.71%;
		height:0;
	}
	.mint-swipe-items-wrap img{
		width:100%;
	}
	.mint-swipe-indicators{
		position: absolute;
    	bottom: 5px;
    	left: 7%;
	}
	.mint-swipe-indicator{
		background:#fff;
		opacity: 1;
		width: 6px;
		height: 6px;
		margin:0 5px;
	}
	.is-active{
		background:brown !important;
	}
</style>