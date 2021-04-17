<template>
	<div class="personaldata">
		<Headnav :Msg="msg"></Headnav>
		<ul class="contain">
			<li class="f_contain">
				<p class="f_left">头像</p>
				<img src="../assets/homelogo/head2.jpg" alt="" class="f_right">
			</li>
			<li class="f_contain">
				<P class="f_left">用户名</P>
				<p class="f_right">{{name}}</p>
			</li>
			<li class="f_contain">
				<P class="f_left">性别</P>
				<p class="f_right">男</p>
			</li>
			<li class="f_contain">
				<P class="f_left">绑定手机</P>
				<p class="f_right">{{phone}}</p>
			</li>
			<van-cell title="收货地址" is-link center to="/addresslist"/>
			<van-cell title="绑定微信" is-link value="已绑定" center/>
			<van-cell title="协议与说明" is-link center />
		</ul>
		<div class="btn" @click="changeLog()">切换登录</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav';
	import Vue from 'vue';
	import { Cell } from 'vant';
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	Vue.use(Cell);
	export default{
		data(){
			return{
				msg:'个人资料',
				name:'',
				phone:''
			}
		},
		mounted() {
			this.$nextTick(function () {
			    var users = JSON.parse(localStorage.getItem('users'));
			    for(var i=0;i<users.length;i++){
			    	if(this.$store.state.nowUser==users[i].phone){
			    		this.name = users[i].text;
						this.phone = this.$store.state.nowUser;
			    	}
			    }
			  })
		},
		components:{Headnav},
		methods:{
			changeLog(){
				this.$store.commit('Locked');
			}
		}
	}
</script>

<style scoped lang="less">
	.personaldata{background-color: rgba(243, 242, 241, 1);width: 375px;height: 100vh;}
	.contain{height: 350px;width: 355px;margin: 10px 10px;background: white;border-radius: 5px;}
	.contain>li{height: 50px;width: 355px;box-sizing: border-box;}
	.f_contain{padding-left: 5px ;padding-right: 20px;line-height: 50px;}
	.f_contain>p{font-size: 14px;}
	.f_contain>img{height: 40px;width: 40px;border-radius: 100%;margin-top: 5px;}
	.f_left{float: left;}.f_right{float: right;}
	
	.van-cell{padding-left: 5px;padding-right: 5px;height: 50px;}
	
	.btn{height: 35px;width: 335px;position: fixed;bottom: 25px;left: 20px;background-color: rgba(135, 159, 213, 1);color: white;border-radius: 20px;line-height: 35px;text-align: center;}
</style>
