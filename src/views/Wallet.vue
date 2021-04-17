<template>
	<div class="wallet">
		<Headnav :Msg="msg"></Headnav>
		<div class="contain">
			<van-row gutter="10">
			  <van-col span="12" @click="goback">
				  <div class="cont">
					  <p class="cont1"><span>B</span>1全国通用</p>
					  <p class="cont2"><span class="dolor">￥</span>21</p>
					  <p class="cont3">尚余1杯</p>
				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>2全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>3全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>4全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>5全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>6全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>7全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			  <van-col span="12" @click="goback">
			  				  <div class="cont">
			  					  <p class="cont1"><span>B</span>8全国通用</p>
			  					  <p class="cont2"><span class="dolor">￥</span>21</p>
			  					  <p class="cont3">尚余1杯</p>
			  				  </div>
			  </van-col>
			</van-row>
		</div>
		<div class="footer">
			<van-row>
			  <van-col span="8">
				  <div class="innerfooter">
					  <img :src="youhui" alt="">
					  <p>充赠优惠</p>
				  </div>
			  </van-col>
			  <div class="bar1"></div>
			  <van-col span="8">
				  <div class="innerfooter">
					  <img :src="qingke" alt="">
					  <p>我要请客</p>
				  </div>
			  </van-col>
			  <div class="bar2"></div>
			  <van-col span="8">
				  <div class="innerfooter">
					  <img :src="hongbao" alt="">
					  <p>发送红包</p>
				  </div>
			  </van-col>
			</van-row>
		</div>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav';
	import Vue from 'vue';
	import { Col, Row } from 'vant';
	
	Vue.use(Col);
	Vue.use(Row);
	export default{
		data(){
			return{
				msg:'咖啡钱包',
				youhui:require('@/assets/b_logo/youhui.svg'),
				qingke:require('@/assets/b_logo/qingke.svg'),
				hongbao:require('@/assets/b_logo/hongbao.svg')
			}
		},
		components:{ Headnav },
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="less">
	.wallet{background: rgba(243, 242, 241, 1);height: 100vh;}
	.contain{width: 375px;box-sizing: border-box;padding: 10px 15px 0;}
	.cont{height: 105px;width: 168px;margin: 5px 0;
	background: url(../assets/imgs/walletbg.png) no-repeat;
	background-position: 0 0;
	background-size: 100%;
	box-sizing: border-box;padding:13px 20px;}
	
	.cont1{color: rgba(56, 56, 56, 1);font-size: 13px;line-height: 19px;margin-bottom: 12px;}
	p.cont1>span{font-size: 16px;}
	.cont2{color: rgba(56, 56, 56, 1);font-size: 24px;}
	p.cont2>.dolor{font-size: 14px;}
	
	.cont3{color: rgba(166, 166, 166, 1);font-size: 13px;}
	
	.footer{height: 60px;width: 375px;background: white;position: fixed;bottom: 0;box-sizing: border-box;padding: 8px 0 10px;}
	.innerfooter{height: 42px;width: 52px;margin: 0 auto;text-align: center;}
	.innerfooter>img{height: 20px;width: 20px;}
	.innerfooter>p{font-size: 13px;text-align: center;color: rgba(112, 112, 112, 1);}
	
	.bar1{height: 35px;width: 1px;position: absolute;top: 13px;left: 124px;background: rgba(166, 166, 166, 0.6);}
	.bar2{height: 35px;width: 1px;position: absolute;top: 13px;left: 250px;background: rgba(166, 166, 166, 0.6);}
</style>
