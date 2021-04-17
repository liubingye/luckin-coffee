<template>
	<!-- 选择登录还是注册 -->
	<div class="chooselogin">
		<Headnav :Msg="msg"></Headnav>
		<div class="logo">
			<img :src='logopath' alt="">
		</div>
		<div class="choosebox">
			<van-button type="primary" block to="/login">登录</van-button>
			<van-button plain type="primary" block color="rgba(136, 175, 213, 1)" to="/register">注册</van-button>
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav'
	import Vue from 'vue';
	import { NavBar,Button } from 'vant';
	
	Vue.use(NavBar);
	Vue.use(Button);
	export default{
		data(){
			return{
				msg:'请选择登录注册',
				logopath:require('../assets/homelogo/logo.png')
			}
		},
		 methods: {
		    onClickLeft() {
		      this.$router.go(-1)
		    }
		},
		components:{ Headnav }
	}
</script>

<style scoped lang="less">
	.logo{width: 80px;height: 94px;margin: 26px auto 0;}
	.logo>img{width: 80px;height: 94px;}
	.choosebox{margin: 116px auto 0;width: 300px;}
	.van-button{width: 300px;height: 44px;margin-bottom: 25px;}
</style>
