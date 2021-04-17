<template>
	<div class="settlement">
		<Headnav :Msg="msg"></Headnav>
		<div class="endtime">
			<div class="nearleft" @click="changeActive()">
				<p :class="{twoch:true,onech:ocactive}">自提</p>
				<p :class="{twoch:true,onech:tcactive}">外送</p>
			</div>
			<div class="nearright">
				<h4>立即取餐</h4>
				<p>约<span>14:42</span>可取</p>
			</div>
		</div>
		<div class="contain">
			<router-link to="/Addresslist">
				<div class="containtop">
					<h4>外卖配送</h4>
					<p v-if="address.length==0">请选择您的地址</p>
					<div v-else>
						<p>{{address.name}}({{address.tel}})</p>
						<p>{{address.province+address.city+address.county}}  {{address.addressDetail}}</p>
					</div>
				</div>
			</router-link>
			<h4>订单信息</h4>
			<div class="innercontain" v-for="val in result">
				<div class="msgtext">
					<div class="goodsmsg">
						<p class="goodsname">{{val.name}}</p>
						<p class="goodschoose">{{val.size}}/{{val.temp}}</p>
					</div>
					<p class="goodsnum">X{{val.num}}</p>
				</div>
				<p class="goodsprice">￥{{val.num*val.newprice}}</p>
			</div>
			<div class="countprice">
				<p>合计<span>￥{{this.allprice}}</span></p>
			</div>
		</div>
		<div class="choosemethod">
			<div class="chofirst">
				<p>使用优惠</p>
				<van-switch v-model="checked" size="24px" class="firstright"/>
			</div>
			<van-cell value="1个可用" is-link class="picktwo" center>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">使用咖啡钱包</span>
			    <van-tag type="warning">充值优惠</van-tag>
			  </template>
			</van-cell>
			<van-cell value="6个可用" is-link class="picktwo" center>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">使用优惠券</span>
			  </template>
			</van-cell>
			<van-cell value="支付宝支付" is-link center>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
			    <span class="custom-title">支付方式</span>
			  </template>
			</van-cell>
		</div>
		<div class="beizhu">
			<van-cell value="" is-link center>
			  <!-- 使用 title 插槽来自定义标题 -->
			  <template #title>
				<span class="custom-title">备注特殊需求</span>
			  </template>
			</van-cell>
		</div>
		<div class="xieyi">
			<van-checkbox v-model="radio" shape="square" icon-size="20px" class="checkbox1"></van-checkbox>
			<p class="p1">我已阅读并同意《支付协议》</p>
			<p class="p2">温馨提示：仅支持开具电子发票，订单完成后可前往发票管理中开具</p>
		</div>
		<div class="topay">
			<p class="heji">应付合计</p>
			<p class="allprice">￥{{allprice}}</p>
			<div class="rightBtn" @click='toPay'>去支付</div>
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav.vue';
	import Vue from 'vue';
	import { Cell,CellGroup,Switch,Tag,Checkbox,  } from 'vant';
	
	Vue.use(Switch);
	Vue.use(Cell);
	Vue.use(Tag);
	Vue.use(Checkbox);
	Vue.use(CellGroup);
	export default{
		data(){
			return{
				msg:'确认订单',
				ocactive:true,
				tcactive:false,
				result:[],
				allprice:0,
				checked:true,
				radio:true,
				address:JSON.parse(localStorage.getItem(this.$store.state.nowName))
			}
		},
		components:{ Headnav },
		methods:{
			changeActive(){
				this.ocactive = !this.ocactive;
				this.tcactive = !this.tcactive;
			},
			toPay(){
				this.$router.push({name:'paying',params:{id:this.$route.params.choose}});
			}
		},
		created() {
			var id = JSON.parse(this.$route.params.choose);
			this.result = JSON.parse(localStorage.getItem(this.$store.state.nowName)).orders[id].goodsList
			for(var i=0;i<this.result.length;i++){
				this.allprice = this.allprice+this.result[i].newprice*this.result[i].num
			}
		}
	}
</script>

<style scoped lang="less">
	.settlement{width: 375px;min-height: 100vh;background-color: rgb(247,246,244);padding-bottom: 60px;}
	.endtime{height: 80px;width: 375px;box-sizing: border-box;padding: 20px 15px;background-color: white;}
	.nearleft{height: 36px;width: 90px;border: 1px solid rgba(136, 175, 213, 1);border-radius: 18px;float: left;box-sizing: border-box;padding: 2px;}
	.twoch{font-size: 12px;float: left;height: 30px;width: 50%;line-height: 30px;text-align: center;color: rgba(136, 175, 213, 1);}
	.onech{background-color: rgba(136, 175, 213, 1);color: rgba(255, 255, 255, 1);border-radius: 15px;}
	.nearright{float: right;}
	.nearright>h4{font-size: 13px;}
	.nearright>p{font-size: 13px;color: rgba(128, 128, 128, 1);}
	.nearright>p>span{font-size: 20px;color:rgba(136, 175, 213, 1);}
	
	.contain{width: 375px;margin-top: 10px;background-color: white;box-sizing: border-box;padding: 8px 15px;}
	.contain>h4{font-size: 13px;margin-bottom: 10px;}
	.containtop{height: 69px;width: 345px;border-bottom: 1px solid rgba(242, 242, 242, 1);}
	
	.containtop>h4{font-size: 13px;margin-bottom: 10px;}
	.containtop p{font-size: 12px;}
	
	.innercontain{height: 36px;width: 345px;padding-bottom: 9px;}
	.msgtext{width: 237px;height: 36px;float: left;}
	.goodsmsg{float: left;}
	.goodsname{font-size: 15px;font-weight: bold;}
	.goodschoose{font-size: 10px;}
	.goodsnum{float: right;font-size: 13px;line-height: 36px;}
	.goodsprice{float: right;font-size: 14px;line-height: 36px;font-weight: bold;}
	.countprice{height: 40px;width: 100%;border-top: 1px solid rgba(242, 242, 242, 1);}
	.countprice>p{line-height: 40px;float: right;font-size: 13px;}
	.countprice>p>span{font-weight: bold;font-size: 16px;}
	
	.choosemethod{width: 375px;margin: 10px 0;background: white;box-sizing: border-box;padding: 0 15px;}
	.chofirst{height: 50px;width: 345px;}
	.chofirst>p{float: left;margin-top: 15px;}
	.firstright{float: right;margin-top: 9px;}
	
	.van-cell{padding: 10px 0;height: 50px;}
	.picktwo>.van-cell__value{color: rgba(255, 141, 26, 1);}
	.picktwo .custom-title {
		color: rgba(136, 175, 213, 1);
		margin-right: 4px;
		vertical-align: middle;
  }
  
	.beizhu{height: 50px;box-sizing: border-box;margin-bottom: 10px;width: 375px;padding: 0 15px;background-color: white;}
	.xieyi{height: 60px;width: 330px;margin-left: 15px;}
	.topay{height: 60px;width: 375px;position: fixed;bottom: 0;background-color: white;padding-left: 15px;}
	.topay>.heji{float: left;line-height: 60px;font-size: 14px;}
	.topay>.allprice{float: left;line-height: 60px;font-size: 24px;}
	.topay>.rightBtn{float: right;height: 60px;width: 119px;background: rgba(144, 192, 239, 1);color: white;line-height: 60px;text-align: center;}
	.checkbox1{float: left;}
	.xieyi>p{font-size: 10px;}
	.p1{height: 20px;line-height: 20px;}
	.p2{font-size: 5px;}
</style>
