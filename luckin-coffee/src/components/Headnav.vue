<template>
	<div class="headnav">
		<van-nav-bar
		  :title="Msg"
		  left-arrow
		  @click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { NavBar } from 'vant';
	
	Vue.use(NavBar);
	export default{
		methods: {
		    onClickLeft() {
		      this.$router.go(-1)
		    }
		},
		props:['Msg']
	}
</script>

<style scoped lang="less">
	.headnav{height: 44px;width: 375px;background: white;}
	.van-nav-bar{position: fixed;top: 0;height: 44px;width: 375px;}
</style>
