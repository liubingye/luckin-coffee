<template>
	<div class="toptitle">
		<h2 class="title">{{fatherSay}}</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:['fatherSay']
	}
</script>

<style scoped>
	.toptitle{height: 44px;width: 375px;}
	.title{height: 44px;width: 375px;text-align: center;font-weight: bold;font-size: 18px;line-height: 44px;border-bottom: 1px solid rgba(248, 248, 248, 1);background: white;position: fixed;top: 0;z-index: 1000;}
</style>
