<template>
	<div class="helloapp">
		<img :src="this.path" alt="">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				path:require('../assets/logo.png')
			}
		},
		mounted: function () {
		  this.$nextTick(function () {
		    setTimeout(()=>{
		    	this.$router.push('home')
		    },2500)
		  })
		}
	}
</script>

<style scoped lang="less">
	.helloapp{height: 667px;width: 375px;}
	.helloapp>img{height: 667px;width: 375px;}
</style>
