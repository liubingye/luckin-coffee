<template>
	<div class="mine">
		<MineHead />
		<div class="content">
			<van-cell-group>
			  <van-cell title="个人资料" :icon="logos[0]" is-link center to="/personaldata"/>
			  <van-cell title="咖啡钱包" :icon="logos[1]" is-link center to="wallet"/>
			  <van-cell title="优惠券" :icon="logos[2]" is-link center to="coupons"/>
			  <van-cell title="兑换优惠" :icon="logos[3]" is-link center/>
			  <van-cell title="发票管理" :icon="logos[4]" is-link center/>
			</van-cell-group>
		</div>
		<van-cell title="帮助反馈" :icon="logos[5]" is-link center class="help"/>
		<div class="b_mine"><img src="../assets/imgs/mine1.jpg" alt=""></div>
		<div class="b_nav">
			<BottomNav />
		</div>
	</div>
</template>

<script>
	import BottomNav from '@/components/BottomNav.vue'
	import MineHead from '@/components/MineHead.vue'
	import Vue from 'vue';
	import { Cell, CellGroup } from 'vant';
	
	Vue.use(Cell);
	Vue.use(CellGroup);
	export default{
		data(){
			return{
				logos:[
					require('../assets/m_logo/1.svg'),
					require('../assets/m_logo/2.svg'),
					require('../assets/m_logo/3.svg'),
					require('../assets/m_logo/4.svg'),
					require('../assets/m_logo/5.svg'),
					require('../assets/m_logo/6.svg')
				]
			}
		},
		components:{ BottomNav,MineHead }
	}
</script>

<style scoped lang="less">
	.mine{background: rgba(242, 242, 242, 1);}
	.b_nav{position: fixed;bottom: 0;}
	.content{height: 250px;width: 375px;}
	.van-cell{height: 50px;}
	.help{margin: 9px 0 8px;}
	.b_mine{width: 335px;height: 114px;padding: 8px 20px 7px;}
	.b_mine>img{width: 335px;height: 114px;}
</style>