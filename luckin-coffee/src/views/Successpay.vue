<template>
	<div class="successpay">
		<img :src="path" alt="">
		<p class="title">支付成功</p>
		<p class="shopmsg">luckincoffee瑞幸咖啡</p>
		<p class="price"><span>￥</span>21</p>
		<div class="btn" @click="returnhome">返回商家</div>
		<p class="bottommsg">关注luckincoffee瑞幸咖啡</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				path:require('@/assets/imgs/successpay.svg')
			}
		},
		methods:{
			returnhome(){
				this.$router.replace('/home')
			}
		}
	}
</script>

<style scoped lang="less">
	.successpay{text-align: center;}
	img{height: 40px;height: 40px;margin-top: 55px;}
	p.title{font-size: 18px;color: rgba(112, 198, 125, 1);}
	p.shopmsg{font-size: 17px;margin-top: 61px;}
	p.price{height: 57px;line-height: 57px;font-size: 38px;font-weight: bold;}
	p.price>span{font-size: 30px;}
	.btn{height: 32px;width: 165px;border: 1px solid rgba(112, 198, 125, 1);color: rgba(112, 198, 125, 1);font-size: 14px;text-align: center;line-height: 34px;position: fixed;bottom: 91px;left: 105px;}
	.bottommsg{font-size: 13px;position: fixed;color: rgba(217, 217, 217, 1);bottom: 36px;left: 123px;}
</style>
