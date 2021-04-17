<template>
	<div class="home">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img :src="require('../assets/imgs/1.jpg')" alt=""></van-swipe-item>
		  <van-swipe-item><img :src="require('../assets/imgs/2.jpg')" alt=""></van-swipe-item>
		  <van-swipe-item><img :src="require('../assets/imgs/3.jpg')" alt=""></van-swipe-item>
		</van-swipe>
		<div class="near">
			<div class="nearleft">
				<p>青年汇店</p>
				<span>距您53m</span>
			</div>
			<div class="nearright" @click="changeActive()">
				<p :class="{twoch:true,onech:ocactive}">自提</p>
				<p :class="{twoch:true,onech:tcactive}">外送</p>
			</div>
		</div>
		<van-cell-group>
		  <van-cell title="现在下单" label="ORDER NOW" center is-link to="menu">
		    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		    <template #right-icon>
		      <van-icon :name="HomeLogos[0]" class="right-div"/>
		    </template>
		  </van-cell>
		  <van-cell title="咖啡钱包" label="COFFRR WALLET" center is-link to="wallet">
		    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		    <template #right-icon>
		      <van-icon :name="HomeLogos[1]" class="right-div"/>
		    </template>
		  </van-cell>
		  <van-cell title="送Ta咖啡" label="SEND COFFEE" center is-link>
		    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		    <template #right-icon>
		      <van-icon :name="HomeLogos[2]" class="right-div"/>
		    </template>
		  </van-cell>
		  <van-cell title="企业账户" label="ENTERPRISE ACCOUNT" center is-link>
		    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
		    <template #right-icon>
		      <van-icon :name="HomeLogos[3]" class="right-div"/>
		    </template>
		  </van-cell>
		</van-cell-group>
		<div class="bottombg">
			<img :src="require('../assets/imgs/bbg.png')" alt="">
		</div>
		<div class="b_nav">
			<BottomNav />
		</div>
	</div>
</template>

<script>
	// 引入组件
	import BottomNav from '@/components/BottomNav.vue'
	import Vue from 'vue';
	import { Swipe, SwipeItem,Cell, CellGroup,Icon } from 'vant';
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Cell);
	Vue.use(CellGroup);
	Vue.use(Icon);
	export default{
		data(){
			return{
				ocactive:true,
				tcactive:false,
				HomeLogos:[
					require('../assets/homelogo/1.svg'),
					require('../assets/homelogo/2.svg'),
					require('../assets/homelogo/3.svg'),
					require('../assets/homelogo/4.svg')
				]
			}
		},
		methods:{
			changeActive(){
				this.ocactive = !this.ocactive;
				this.tcactive = !this.tcactive;
			}
		},
		components:{ BottomNav }
	}
</script>

<style scoped lang="less">
	.b_nav{position: fixed;bottom: 0;}
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
		height: 208px;width: 375px;
	  }
	  .near{padding: 16px 20px;width: 375px;height: 70px;box-sizing: border-box;}
	  .nearleft{height: 39px;width: 60px;float: left;}
	  .nearleft>p{font-size: 15px;}
	  .nearleft>span{font-size: 11px;color: rgba(128, 128, 128, 1);}
	  .nearright{height: 36px;width: 90px;border: 1px solid rgba(136, 175, 213, 1);border-radius: 18px;float: right;box-sizing: border-box;padding: 2px;}
	  
	  .twoch{font-size: 12px;float: left;height: 30px;width: 50%;line-height: 30px;text-align: center;color: rgba(136, 175, 213, 1);}
	  .onech{background-color: rgba(136, 175, 213, 1);color: rgba(255, 255, 255, 1);border-radius: 15px;}
	  
	  .right-div{height: 40px;width: 40px;border: 1px solid rgba(99, 71, 58, 1);border-radius: 100%;box-sizing: border-box;position: relative;}
	  .van-icon__image{height: 24px;width: 24px;position: absolute;top: 50%;left: 50%;margin-left: -12px;margin-top: -12px;}
	  .bottombg{padding: 10px 20px;width: 375px;box-sizing: border-box;}
	  .bottombg>img{height: 55px;width: 332px;}
	  
	  .van-swipe-item>img{width: 100%;}
	  
	  .van-cell__title>span{font-weight: bold;}
</style>
