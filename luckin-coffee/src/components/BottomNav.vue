<template>
	<div>
		<van-tabbar v-model="active" active-color="rgba(43, 76, 126, 1)" inactive-color="rgba(43, 76, 126, 1)" route border>
		  <van-tabbar-item name="home" replace to="/home">
			  <span>首页</span>
			      <template #icon="props">
			        <img :src="props.active ? TouchImgs[0] : imgs[0]" />
			      </template>
		  </van-tabbar-item>
		  <van-tabbar-item name="menu" replace to="/menu">
			  <span>菜单</span>
			      <template #icon="props">
			        <img :src="props.active ? TouchImgs[1] : imgs[1]" />
			      </template>
		  </van-tabbar-item>
		  <van-tabbar-item name="order" replace to="/order">
			  <span>订单</span>
			      <template #icon="props">
			        <img :src="props.active ? TouchImgs[2] : imgs[2]" />
			      </template>
		  </van-tabbar-item>
		  <van-tabbar-item name="shopcar" replace to="/shopcar">
			  <span>购物车</span>
			      <template #icon="props">
			        <img :src="props.active ? TouchImgs[3] : imgs[3]" />
			      </template>
		  </van-tabbar-item>
		  <van-tabbar-item name="mine" replace to="/mine">
			  <span>我的</span>
			      <template #icon="props">
			        <img :src="props.active ? TouchImgs[4] : imgs[4]" />
			      </template>
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Tabbar, TabbarItem } from 'vant';
	Vue.use(Tabbar);
	Vue.use(TabbarItem);
	export default{
		 data() {
		    return {
			  active:'home',
			  imgs:[
				  require('../assets/b_logo/home.png'),
				  require('../assets/b_logo/menu.svg'),
				  require('../assets/b_logo/order.svg'),
				  require('../assets/b_logo/shopcar.svg'),
				  require('../assets/b_logo/mine.svg')
			  ],
			  TouchImgs:[
				  require('../assets/b_logo/ihome.png'),
				  require('../assets/b_logo/imenu.svg'),
				  require('../assets/b_logo/iorder.svg'),
				  require('../assets/b_logo/ishopcar.svg'),
				  require('../assets/b_logo/imine.svg')
			  ]
		    };
		  }
	}
</script>

<style scoped>
	div{width: 100%;height: 49px;}
	.van-tabbar{background-color: rgba(248, 248, 248, 1);}
	.van-tabbar-item--active{background-color: rgba(248, 248, 248, 1);}
</style>
