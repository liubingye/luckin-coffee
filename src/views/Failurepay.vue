<template>
	<div class="failurepay">
		<div class="header">
			购买失败
			<div class="failure-icon" @click="buyAgin"><img :src="path1" alt=""></div>
		</div>
		<img :src="path2" alt="">
		<h3>购买失败</h3>
		<p>非常抱歉，请再次尝试</p>
		
		<div class="btn" @click="buyAgin">重新购买</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				path1:require('@/assets/homelogo/failure.svg'),
				path2:require('@/assets/imgs/failureicon.svg')
			}
		},
		methods:{
			buyAgin(){
				this.$router.push('/order')
			}
		}
	}
</script>

<style scoped lang="less">
	.failurepay{text-align: center;}
	.header{position: relative;height: 44px;width: 375px;line-height: 44px;font-size: 18px;font-weight: bold;border-bottom: 1px solid rgba(242, 242, 242, 1);}
	.failure-icon{height: 20px;width: 20px;position: absolute;top: 12px;left: 15px;line-height: 20px;}
	.failure-icon>img{height: 18px;width: 18px;}
	
	.failurepay>img{height: 86px;width: 86px;margin-top: 46px;}
	h3{font-size: 28px;margin-top: 33px;font-weight: normal;}
	p{font-size: 16px;margin-top: 24px;}
	
	.btn{height: 50px;width: 155px;border-radius: 3px;background: rgba(136, 175, 213, 1);color: white;line-height: 50px;margin-top: 56px;position: absolute;left: 110px;}
</style>
