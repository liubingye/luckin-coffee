<template>
	<div class="paying">
		<div class="header">
			<h3>确认支付</h3>
			<router-link to="/failurepay" class="cancal">取消</router-link>
		</div>
		<div class="contain">
			<h4>订单付款</h4>
			<h2>￥{{price}}</h2>
			<div class="bar"></div>
			<div class="shoptext">
				<p class="p1">收款方</p>
				<p class="p2">luckincoffe瑞幸咖啡</p>
			</div>
		</div>
		<div class="paybtn" @click="payfor">立即支付</div>
		<p class="bottommsg">支付安全由中国人民财产保险股份有限公司承保</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				price:0
			}
		},
		methods:{
			payfor(){
				var nowUser = JSON.parse(localStorage.getItem(this.$store.state.nowName))
				nowUser.orders[this.$route.params.id].orderstate = 1
				localStorage.setItem(this.$store.state.nowName,JSON.stringify(nowUser))
				this.$router.push('/successpay')
			}
		},
		created() {
			var nowOrder = JSON.parse(localStorage.getItem(this.$store.state.nowName)).orders[this.$route.params.id]
			this.price = nowOrder.price
		}
	}
</script>

<style scoped lang="less">
	.paying{height: 100vh;width: 375px;background: rgb(247,246,244);}
	.header{height: 44px;width: 375px;position: relative;}
	.header>h3{font-size: 18px;font-weight: bold;text-align: center;line-height: 44px;}
	.cancal{position: absolute;top: 10px;left: 15px;}
	.contain{height: 156px;width: 375px;background-color: white;}
	.contain>h4{height: 27px;font-size: 18px;padding-top: 10px;text-align: center;}
	.contain>h2{font-size: 38px;text-align: center;height: 57px;line-height: 57px;margin-bottom: 16px;}
	
	.bar{height: 1px;width: 375px;background: rgba(242, 242, 242, 1);}
	.shoptext{height: 24px;width: 345px;padding: 13px 15px;}
	.p1{float: left;}
	.p2{float: right;}
	.paybtn{height: 46px;width: 355px;margin: 30px auto 0;background-color: rgba(73, 194, 101, 1);color: white;line-height: 46px;font-size: 18px;text-align: center;}
	.bottommsg{font-size: 12px;position: fixed;bottom: 15px;text-align: center;height: 18px;width: 375px;color: rgba(166, 166, 166, 1);}
</style>
