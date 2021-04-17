<template>
	<div class="login">
		<Headnav :Msg="msg"></Headnav>
		<div class="logo">
			<img :src='logopath' alt="">
		</div>
		<div class="inner_form">
			<van-cell is-link :title="title" @click="show = true" class="firstcell" center/>
			<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
			<van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" center/>
			<van-field v-model="password" type="password" label="密码" placeholder="请输入密码" center/>
			<van-button type="primary" block color="rgba(136, 175, 213, 0.6)"class="surebtn" @click="passLogin">确定</van-button>
			
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav'
	import Vue from 'vue';
	import { ActionSheet,Field,Button,Notify,Toast } from 'vant';
	import SetUser from '@/SetUser.js'
	
	Vue.use(ActionSheet);
	Vue.use(Field);
	Vue.use(Button);
	Vue.use(Notify);
	Vue.use(Toast);
	export default{
		data(){
			return{
				msg:'登录',
				logopath:require('../assets/homelogo/logo.png'),
				show: false,
				title:'中国+86',
				actions: [{ name: '中国+86' }, { name: '香港（中国）+852' }, { name: '台湾（中国）+886' }],
				tel: '',
				password: ''
			}
		},
		methods:{
			 onSelect(item) {
			      // 默认情况下点击选项时不会自动收起
			      // 可以通过 close-on-click-action 属性开启自动收起
			      this.show = false;
			      this.title = item.name
			    },
			 passLogin(){
				 var user = {
					 tel:this.tel,
					 pass:this.password
				 };
				 var passNum = SetUser.getUser(user);
				 switch(passNum){
					 case 1:
						// 登录成功改变loginLock的值  返回首页
						Toast({
						  type: 'loading',
						  duration: 1200,
						  message: '正在跳转',
						  onClose: () => {
						    this.$store.commit('unLock',user.tel)
							// 将user的text属性赋值到vuex
							this.$store.state.nowName = SetUser.getName(user.tel)
							// console.log(this.$store.state.nowName)
						    this.$router.go(-2)
						  },
						});
						break;
					case 2:
						Notify({ type: 'danger', message: '密码不正确' });
						break;
					case 3:
						Notify({ type: 'danger', message: '手机号未注册' });
						break;
											
				 }
			 }
		},
		components:{Headnav}
	}
</script>

<style scoped lang="less">
	.logo{width: 80px;height: 94px;margin: 26px auto 0;}
	.logo>img{width: 80px;height: 94px;}
	.inner_form{height: 267px;width: 375px;margin-top: 57px;box-sizing: border-box;padding: 0 20px;}
	.inner_form>.van-field{height: 58px;}
	.inner_form>.firstcell{height: 58px;}
	.surebtn{height: 40px;width: 300px;margin: 19px auto 10px;}
	
</style>
