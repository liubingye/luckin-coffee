<template>
	<div class="minehead">
		<div class="box">
			<div class="innerbox" @click="StateChange">
				<img :src="path" alt="">
				<div>
					<p class="leftp">{{msg}}</p>
					<p class="rightp"><img src="../assets/homelogo/2right.svg" alt=""></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'立即登录',
				path:require("@/assets/homelogo/head.png")
			}
		},
		methods:{
			StateChange(){
				if(this.$store.state.nowUser){
					this.$router.push('personaldata')
				}else{
					this.$router.push('logorres')
				}
			}
		},
		mounted: function () {
		  this.$nextTick(function () {
		    if(this.$store.state.nowUser){
		    	var users = JSON.parse(localStorage.getItem('users'));
		    	for(var i=0;i<users.length;i++){
		    		if(this.$store.state.nowUser==users[i].phone){
		    			this.msg = users[i].text;
						this.path = require("@/assets/homelogo/head2.jpg")
		    		}
		    	}
		    }
		  })
		}
	}
</script>

<style scoped lang="less">
	.minehead>.box{width: 375px;height: 180px;background: rgba(100, 76, 60, 1);overflow: hidden;}
	.innerbox{height: 55px;width: 335px;margin: 72px auto 0;}
	.innerbox>img{height: 55px;width: 55px;display: block;float: left;border-radius: 55px;}
	.innerbox>div{width: 280px;height: 100%;float: right;box-sizing: border-box;padding: 14px 0 14px 10px;}
	.leftp{float: left;color: white;font-size: 18px;}
	.rightp{float: right;height: 14px;width: 14px;line-height: 30px;}
	.rightp>img{height: 14px;width: 14px;}
</style>
