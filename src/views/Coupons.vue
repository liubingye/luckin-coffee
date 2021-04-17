<template>
	<div class="Coupons">
		<Headnav :Msg="msg"></Headnav>
		<div class="topmsg">
			<p>可用优惠<span>(6张)</span></p>
		</div>
		<div class="contain">
			<div class="couponcard" v-for="(val,index) in coupon">
				<div class="discount">
					<span class="dis1">{{val.discount1}}</span>
					<span class="dis2">{{val.discount2}}</span>
				</div>
				<div class="cont">
					<p class="cont1">{{val.name}}</p>
					<p class="cont2">有效期至{{val.time}}</p>
				</div>
				<input type="radio" name="choose" :value="index" class="radios">
			</div>
		</div>
		<div class="footer">
			<van-button type="primary" block color="rgba(144, 192, 239, 1)">立即使用</van-button>
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav';
	import Vue from 'vue';
	import { Button } from 'vant';
	
	Vue.use(Button);
	export default{
		data(){
			return{
				msg:'选择优惠券',
				coupon:[
					{
						name:'咖啡.果汁',
						time:'2021-08-20',
						discount1:'4',
						discount2:'.8折'
					},
					{
						name:'NFC果汁.咖啡',
						time:'2021-04-20',
						discount1:'4',
						discount2:'.8折'
					},
					{
						name:'大师咖啡',
						time:'2021-05-20',
						discount1:'4',
						discount2:'.8折'
					},
					{
						name:'大师咖啡',
						time:'2021-08-13',
						discount1:'5',
						discount2:'.8折'
					},
					{
						name:'订单优惠',
						time:'2021-05-14',
						discount1:'5',
						discount2:'.8折'
					},
					{
						name:'全场饮品',
						time:'2021-08-20',
						discount1:'5',
						discount2:'.0折'
					},
					{
						name:'NFC果汁.咖啡',
						time:'2021-08-20',
						discount1:'5',
						discount2:'.3折'
					},
					{
						name:'咖啡.果汁',
						time:'2021-08-20',
						discount1:'6',
						discount2:'.8折'
					}
				]
			}
		},
		components:{ Headnav }
	}
</script>

<style scoped lang="less">
	.topmsg{height: 33px;width: 375px;position: fixed;top:45px;background: rgba(144, 192, 239, 0.1);}
	.topmsg>p{color: rgba(128, 128, 128, 1);font-size: 13px;text-align: center;line-height: 33px;}
	.topmsg>p>span{color: rgba(144, 192, 239, 1);}
	
	.contain{padding: 33px 20px 60px;box-sizing: border-box;}
	.couponcard{width: 335px;height: 110px;box-sizing: border-box;border: 1px solid rgba(144, 192, 239, 1);margin: 10px 0;position: relative;}
	
	
	.discount{margin: 30px 0 30px 20px;height: 51px;width: 54px;float: left;}
	.dis1{color: rgba(144, 192, 239, 1);font-size: 34px;line-height: 51px;}
	.dis2{color: rgba(144, 192, 239, 1);}
	
	.cont{height: 49px;position: absolute;top: 30px;left: 105px;}
	.cont1{font-size: 16px;color: rgba(56, 56, 56, 1);height: 24px;line-height: 24px;padding-bottom: 7px;}
	.cont2{font-size: 12px;color: rgba(166, 166, 166, 1);height: 18px;line-height: 18px;}
	
	.radios{height: 20px;width: 20px;position: absolute;top: 45px;right: 15px;}
	
	.footer{height: 60px;width: 375px;padding: 10px 15px;box-sizing: border-box;position: fixed;bottom: 0;}
	.footer>.van-button{height: 40px;width: 345px;}
</style>