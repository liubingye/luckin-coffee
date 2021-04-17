<template>
	<div class="order">
		<Toptitle :fatherSay='msg'/>
		<van-tabs v-model="activeName" color="rgba(144, 192, 239, 1)">
		  <van-tab title="全部" name="a">
			  <div class="ordercont" v-for="val in alllist">
				  <div class="ordertop">
					  <p class="topleft">外卖订单：2384756392817{{val.id}}</p>
					  <p class="topright" v-if="!val.orderstate">待付款</p>
					  <p class="topright" v-if="val.orderstate">已完成</p>
				  </div>
				  <div class="cont2">
					  <p class="cont2left van-ellipsis">{{address[val.addressId].province+address[val.addressId].city+address[val.addressId].county}}  {{address[val.addressId].addressDetail}}</p>
					  <p class="cont2right">2019-01-08 09:05</p>
				  </div>
				  <p class="cont3">{{val.goodsList[0].name}}等   共{{val.goodsList.length}}件商品</p>
				  <div class="cont4">
					  <p class="cont4left">￥{{val.price}}</p>
					  <div class="cont4right" v-if="!val.orderstate"><router-link :to="{name:'settlement',params:{choose:val.id}}">去支付</router-link></div>
					  <div class="cont4right" v-if="val.orderstate"><router-link to="menu">再来一单</router-link></div>
				  </div>
			  </div>
		  </van-tab>
		  <van-tab title="未完成" name="b">
			  <div class="ordercont" v-for="val in failist">
				  <div class="ordertop">
				  					  <p class="topleft">外卖订单：2384756392817{{val.id}}</p>
				  					  <p class="topright">待付款</p>
				  </div>
				  <div class="cont2">
				  					  <p class="cont2left van-ellipsis">{{address[val.addressId].province+address[val.addressId].city+address[val.addressId].county}}  {{address[val.addressId].addressDetail}}</p>
				  					  <p class="cont2right">2019-01-08 09:05</p>
				  </div>
				  <p class="cont3">{{val.goodsList[0].name}}等   共{{val.goodsList.length}}件商品</p>
				  <div class="cont4">
				  					  <p class="cont4left">￥{{val.price}}</p>
				  					  <div class="cont4right"><router-link :to="{name:'settlement',params:{choose:val.id}}">去支付</router-link></div>
				  </div>
			  </div>
		  </van-tab>
		  <van-tab title="已完成" name="c">
			  <div class="ordercont" v-for="val in suclist">
				  <div class="ordertop">
				  					  <p class="topleft">外卖订单：2384756392817{{val.id}}</p>
				  					  <p class="topright">已完成</p>
				  </div>
				  <div class="cont2">
				  					  <p class="cont2left van-ellipsis">{{address[val.addressId].province+address[val.addressId].city+address[val.addressId].county}}  {{address[val.addressId].addressDetail}}</p>
				  					  <p class="cont2right">2019-01-08 09:05</p>
				  </div>
				  <p class="cont3">{{val.goodsList[0].name}}等   共{{val.goodsList.length}}件商品</p>
				  <div class="cont4">
				  					  <p class="cont4left">￥{{val.price}}</p>
				  					  <div class="cont4right"><router-link to="menu">再来一单</router-link></div>
				  </div>
			  </div>
		  </van-tab>
		</van-tabs>
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
	import { Tab, Tabs } from 'vant';
	
	Vue.use(Tab);
	Vue.use(Tabs);
	export default{
		data(){
			return{
				msg:'订单列表',
				activeName: 'a',
				alllist:[],
				suclist:[],
				failist:[],
				address:JSON.parse(localStorage.getItem(this.$store.state.nowName)).address
			}
		},
		components:{ BottomNav,Toptitle },
		created() {
			this.alllist = JSON.parse(localStorage.getItem(this.$store.state.nowName)).orders;
			for(var i=0;i<this.alllist.length;i++){
				if(this.alllist[i].orderstate==0){
					this.failist.push(this.alllist[i])
				}else{
					this.suclist.push(this.alllist[i])
				}
			}
			// console.log(this.alllist,this.suclist,this.failist)
		}
	}
</script>

<style scoped lang="less">
	.order{min-height: 100vh;width: 375px;background: rgb(247,246,244);padding-bottom: 50px;}
	.b_nav{position: fixed;bottom: 0;}
	.ordercont{height: 160px;width: 375px;background-color: white;margin-top: 10px;box-sizing: border-box;padding: 12px 15px;}
	.ordertop{height: 26px;border-bottom: 1px solid rgba(242, 242, 242, 1);}
	.topleft{float: left;color: rgba(166, 166, 166, 1);font-size: 13px;}
	.topright{float:right;color: rgba(136, 175, 213, 1);font-size: 13px;}
	.cont2{height: 22px;width: 100%;margin-top: 11px;}
	.cont2left{float: left;font-weight: bold;font-size: 15px;width: 208px;}
	.cont2right{float: right;font-size: 12px;color: rgba(166, 166, 166, 1);}
	.cont3{height: 19px;width: 100%;color: rgba(80, 80, 80, 1);font-size: 13px;}
	
	.cont4{height: 28px;width: 100%;margin-top: 26px;}
	.cont4left{font-size: 14px;float: left;}
	.cont4right{float: right;height: 28px;width: 74px;border: 1px solid rgba(144, 192, 239, 1);line-height: 28px;text-align: center;color: rgba(144, 192, 239, 1);}
</style>