<template>
	<main>
		<router-view></router-view>
		<footer-view></footer-view>
	</main>
</template>

<script>
import footer from '../component/nav/footer.vue'
export default{
	name:"index",
	components:{	
		'footer-view':footer
	}
}
</script>
<style>
a{
	text-decoration: none;
}
</style>

