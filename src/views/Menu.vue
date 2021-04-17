<template>
	<div class="menu">
		<Toptitle :fatherSay='msg'/>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item><img :src="require('../assets/imgs/m1.jpg')" alt=""></van-swipe-item>
		  <van-swipe-item><img :src="require('../assets/imgs/m2.png')" alt=""></van-swipe-item>
		</van-swipe>
		<div class="menumain">
			<div class="leftbar">
				<van-sidebar v-model="activeKey">
				  <van-sidebar-item title="人气Top" />
				  <van-sidebar-item title="大师咖啡"  />
				  <van-sidebar-item title="零度拿铁"  />
				  <van-sidebar-item title="瑞纳冰"  />
				  <van-sidebar-item title="健康轻食"  />
				  <van-sidebar-item title="鲜榨果蔬汁"  />
				</van-sidebar>
			</div>
			<div class="rightcontain">
				<InnerMenu  :activeKey="activeKey"/>
			</div>
		</div>
		<div class="b_nav">
			<BottomNav />
		</div>
	</div>
</template>

<script>
	// 引入组件
	import BottomNav from '@/components/BottomNav.vue'
	import Toptitle from '@/components/Toptitle.vue'
	import Vue from 'vue';
	import { Swipe, SwipeItem,Sidebar, SidebarItem } from 'vant';
	// 引入组件innermenu
	import InnerMenu from '@/components/InnerMenu.vue'
	
	Vue.use(Swipe);
	Vue.use(SwipeItem);
	Vue.use(Sidebar);
	Vue.use(SidebarItem);
	export default{
		data(){
			return{
				msg:'选择咖啡和小食',
				activeKey: 0
			}
		},
		components:{ BottomNav,Toptitle,InnerMenu },
		watch:{
			activeKey:function(activeKey){
				
			}
		}
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
	height: 130px;width: 375px;
  }
  .van-swipe-item>img{
	  width: 100%;
  }
  .van-sidebar-item--select::before{
	  height: 100%;width: 3px;
	  background-color: rgba(136, 175, 213, 1);
  }
  .menumain{height: 442px;}
  .leftbar{width: 90px;height: 442px;float: left;background-color: rgba(248, 248, 248, 1);}
  .rightcontain{width: 285px;height: 442px;float: right;}
  .van-sidebar{width: 90px;}
  .van-sidebar-item{height: 44px;width: 90px;padding: 14px 0;text-align: center;}
  .van-sidebar-item--select{font-weight: 600;}
</style>