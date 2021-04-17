<template>
	<div class="login">
		<Headnav :Msg="msg"></Headnav>
		<div class="logo">
			<img :src='logopath' alt="">
		</div>
		<div class="inner_form">
			<van-field v-model="text" label="昵称" placeholder="请输入昵称" center :error-message="textMsg" @blur="namemsg(text)"/>
			<van-cell is-link :title="title" @click="show = true" class="firstcell" center/>
			<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
			<van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" center :error-message="phoneMsg" @blur="phonemsg(tel)"/>
			<van-field v-model="password1" type="password" label="密码" placeholder="请输入密码" center :error-message="passMsg1" @blur="passmsg(password1)"/>
			<van-field v-model="password2" type="password" label="再次确认" placeholder="请输入密码" center :error-message="passMsg2" @blur="spassmsg(password2)"/>
			<van-button type="primary" block color="rgba(136, 175, 213, 0.6)"class="surebtn" @click="getUser">确定</van-button>
			
			<p>点击确定，即表示以阅读并同意 <span>《注册会员服务条款》</span></p>
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav'
	import Vue from 'vue';
	import { ActionSheet,Field,Button,Notify } from 'vant';
	import SetUser from '@/SetUser.js'
	
	Vue.use(ActionSheet);
	Vue.use(Field);
	Vue.use(Button);
	Vue.use(Notify);
	export default{
		data(){
			return{
				msg:'注册',
				logopath:require('../assets/homelogo/logo.png'),
				phoneMsg:'',
				passMsg1:'',
				passMsg2:'',
				textMsg:'',
				show: false,
				title:'中国+86',
				actions: [{ name: '中国+86' }, { name: '香港（中国）+852' }, { name: '台湾（中国）+886' }],
				tel: '',
				password1: '',
				password2: '',
				text:''
			}
		},
		methods:{
			 onSelect(item) {
			      // 默认情况下点击选项时不会自动收起
			      // 可以通过 close-on-click-action 属性开启自动收起
			      this.show = false;
			      this.title = item.name
			    },
			getUser(){
				if(this.phoneMsg == ''&& this.passMsg1== ''&& this.passMsg2 == '' && this.textMsg == '' && this.tel != '' && this.password1 !='' && this.password2 != '' && this.text != ''){
					// 将注册好的账号存入缓存 localstorage
					var user = {
						phone:this.tel,
						text:this.text,
						password:this.password1
					}
					var userMsg = {
						 orders:[],
						 address:[]
					}
					SetUser.setUser(user);
					localStorage.setItem(SetUser.getName(user.phone),JSON.stringify(userMsg));
					// 跳转到登录
					this.$router.replace({ path: 'login' })
				}else{
					Notify({ type: 'danger', message: '输入有误,无法注册' });
				}
			},
			phonemsg(tel){
				var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				if(tel == ''){
					this.phoneMsg = '请输入手机号'
				}else{
					if(reg_tel.test(tel)){
						this.phoneMsg = ''
					}else{
						this.phoneMsg = '手机号格式错误'
					}
				}
			},
			passmsg(password){
				var reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*]{6,20}$/;
				if(password == ''){
					this.passMsg1 = '请输入密码'
				}else{
					if(reg.test(password)){
						this.passMsg1 = ''
					}else{
						this.passMsg1 = '密码至少包含 数字和英文，长度6-20'
					}
				}
			},
			namemsg(name){
				var pattern = /^[a-zA-Z0-9\u4E00-\u9FA5]{2,11}$/;
				if(name == ''){
					this.textMsg = '请输入昵称';
				}else{
					if(pattern.test(name)){
						this.textMsg = ''
					}else{
						this.textMsg = '昵称为2-11位数字英文中文字符'
					}
				}
			},
			spassmsg(password){
				if(password == this.password1){
					this.passMsg2 = ''
				}else{
					this.passMsg2 = '两次输入的密码不一致!'
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
	
	.inner_form>p{color: rgba(128, 128, 128, 1);font-size: 12px;text-align: center;}
</style>
