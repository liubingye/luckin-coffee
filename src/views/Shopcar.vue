<template>
	<div class="shopcar">
		<Toptitle :fatherSay='msg'/>
		<div class="topbg" v-show="!emptystate">
			<img src="../assets/imgs/shoptop.png" alt="">
		</div>
		<van-checkbox-group v-model="result" class="group">
			<div class="goodscard" v-for="(val,index) in nowGoods">
				<van-swipe-cell>
					<div class="checkbox">
						<van-checkbox :name="index" icon-size="23" ></van-checkbox>
					</div>
					<div class="text">
						<h3>{{val.name}}</h3>
						<p class="english">{{val.desc}}</p>
						<p class="choose">{{val.size}}/{{val.temp}}</p>
					</div>
					<div class="price">
						<p><span>￥</span>{{val.newprice*val.num}}</p>
					</div>
					<div class="stet">
						<van-stepper v-model="val.num" theme="round" input-width="22px" button-size="22px" @change="setGoods(index,val.num)" @overlimit="isRemove(index)"/>
					</div>
					<template #right>
						<van-button square text="删除" type="danger" class="delete-button" @click="isRemove(index)"/>
					  </template>
				  </van-swipe-cell>
			</div>
		</van-checkbox-group>
		<div class="guesslike" v-show="!emptystate">
			<h3>猜你喜欢</h3>
			<van-row gutter="10" class="recommend">
			  <router-link to="menu">
				  <van-col span="8" class="onerec">
					  <img src="../assets/imgs/guess2.png" alt="">
					  <h4 class="van-ellipsis">金枪鱼谷物沙拉</h4>
					  <p class="van-ellipsis">Tuna Grain Salad</p>
					  <div></div>
				  </van-col>
			  </router-link>
			  <router-link to="menu">
				  <van-col span="8" class="onerec">
					  <img src="../assets/imgs/guess1.png" alt="">
					  <h4 class="van-ellipsis">意大利烤鸡卷(单卷)</h4>
					  <p class="van-ellipsis">Italian Grilled Chicken (Single Roll)</p>
					  <div></div>
				  </van-col>
			  </router-link>
			  <router-link to="menu">
				  <van-col span="8" class="onerec">
					  <img src="../assets/imgs/guess2.png" alt="">
					  <h4 class="van-ellipsis">经典牛肉土豆泥沙拉</h4>
					  <p class="van-ellipsis">Classic beef mashed potato salad</p>
					  <div></div>
				  </van-col>
			  </router-link>
			</van-row>
		</div>
		<div class="jiesuan" v-show="!emptystate">
			<p class="heji">应付合计</p>
			<p class="allprice">￥{{allprice}}</p>
			<div class="rightBtn" @click='toSettlement(result)'>去结算</div>
		</div>
		<van-empty
		  class="custom-image"
		  :image="emptyImg"
		  description="您的购物车有点寂寞"
		  image-size="90"
		  v-show="emptystate"
		>
		<router-link to="menu">
			<div class="toBtn" >去喝一杯</div>
		</router-link>
		</van-empty>
		<div class="b_nav">
			<BottomNav />
		</div>
	</div>
</template>

<script>
	import BottomNav from '@/components/BottomNav.vue';
	import Toptitle from '@/components/Toptitle.vue';
	import Vue from 'vue';
	import { Checkbox, CheckboxGroup,Stepper,Empty,Dialog,SwipeCell,Button,Col,Row,Toast } from 'vant';
	
	Vue.use(Col);
	Vue.use(Row);
	Vue.use(Toast);
	Vue.use(Button);
	Vue.use(SwipeCell);
	Vue.use(Checkbox);
	Vue.use(CheckboxGroup);
	Vue.use(Stepper);
	Vue.use(Empty);
	Vue.use(Dialog);
	export default{
		data(){
			return{
				value:1,
				msg:'购物车',
				result:[],
				nowGoods:[],
				allprice:0,
				emptystate:true,
				emptyImg:require("@/assets/imgs/empty.png"),
				goods:[
					[
						{
							name:'厚乳拿铁',oldprice:'29',newprice:'16',desc:'hourunatie',path:require('@/assets/imgs/cofe1.jpg')
						},
						{
							name:'拿铁',oldprice:'26',newprice:'15',desc:'natie',path:require('@/assets/imgs/cofe2.jpg')
						},
						{
							name:'珞珈樱花拿铁',oldprice:'32',newprice:'19',desc:'luojiayinghuanatie',path:require('@/assets/imgs/cofe3.jpg')
						},
						{
							name:'太妃榛香厚乳拿铁',oldprice:'32',newprice:'19',desc:'taifei',path:require('@/assets/imgs/cofe4.jpg')
						},
						{
							name:'精粹奥瑞白',oldprice:'29',newprice:'17',desc:'jingcuiaoruibai',path:require('@/assets/imgs/cofe5.jpg')
						},
						{
							name:'桃桃厚乳拿铁',oldprice:'35',newprice:'21',desc:'taotaohourunatie',path:require('@/assets/imgs/cofe6.jpg')
						}
					],
					[
						{
							name:'标准美式',oldprice:'34',newprice:'15',desc:'biaozhunmeishi',path:require('@/assets/imgs/cofe8.jpg')
						},
						{
							name:'精粹奥瑞白',oldprice:'23',newprice:'14',desc:'jingcuiaoruibai',path:require('@/assets/imgs/cofe9.jpg')
						},
						{
							name:'焦糖玛奇朵',oldprice:'19',newprice:'13',desc:'jiaotangmaqiduo',path:require('@/assets/imgs/cofe3.jpg')
						},
						{
							name:'加浓美式',oldprice:'32',newprice:'21',desc:'jianongmeishi',path:require('@/assets/imgs/cofe4.jpg')
						},
						{
							name:'焦糖标准美式',oldprice:'49',newprice:'14',desc:'jiaotangbiaozhunmeishi',path:require('@/assets/imgs/cofe5.jpg')
						},
						{
							name:'卡布奇诺',oldprice:'23',newprice:'19',desc:'kabuqinuo',path:require('@/assets/imgs/cofe6.jpg')
						}
					],
					[
						{
							name:'拿铁',oldprice:'23',newprice:'21',desc:'natie',path:require('@/assets/imgs/cofe3.jpg')
						},
						{
							name:'冲绳黑糖拿铁',oldprice:'15',newprice:'11',desc:'chongsheng',path:require('@/assets/imgs/cofe4.jpg')
						},
						{
							name:'香草拿铁',oldprice:'31',newprice:'29',desc:'xiangcao',path:require('@/assets/imgs/cofe5.jpg')
						},
						{
							name:'焦糖拿铁',oldprice:'32',newprice:'14',desc:'jiaotang',path:require('@/assets/imgs/cofe9.jpg')
						},
						{
							name:'榛果拿铁',oldprice:'29',newprice:'18',desc:'zhenguo',path:require('@/assets/imgs/cofe8.jpg')
						},
						{
							name:'姜饼人拿铁',oldprice:'35',newprice:'22',desc:'jiangbeiren',path:require('@/assets/imgs/cofe11.jpg')
						}
					],
					[
						{
							name:'樱花莓莓胶原酸奶冻',oldprice:'35',newprice:'21',desc:'yinghua',path:require('@/assets/imgs/cofe10.jpg')
						}
					],
					[
						{
							name:'法式经典原味可颂',oldprice:'35',newprice:'21',desc:'fashi',path:require('@/assets/imgs/cofe2.jpg')
						}
					],
					[
						{
							name:'纯牛奶',oldprice:'35',newprice:'21',desc:'chunniunai',path:require('@/assets/imgs/cofe11.jpg')
						},
						{
							name:'水果榨汁儿',oldprice:'35',newprice:'21',desc:'shuiguozhazhi',path:require('@/assets/imgs/cofe4.jpg')
						},
						{
							name:'柠檬汁儿',oldprice:'35',newprice:'21',desc:'ningmengzhi',path:require('@/assets/imgs/cofe9.jpg')
						}
					]
				],
				addList:[
					{id:11,size:'大',temp:'冰'},
					{id:12,size:'大',temp:'热'},
					{id:21,size:'中',temp:'冰'},
					{id:22,size:'中',temp:'热'},
					{id:31,size:'小',temp:'冰'},
					{id:32,size:'小',temp:'热'}
				]
			}
		},
		methods:{
			setGoods(index,num){
				var obj = this.nowGoods[index];
				obj.num = num
				this.nowGoods.splice(index, 1, obj);
			},
			isRemove(index){
				Dialog.confirm({
				  message: '你确定不要了吗？'
				})
				  .then(() => {
				    // on confirm
					this.nowGoods.splice(index, 1);
				  })
				  .catch(() => {
				    // on cancel
				  });
			},
			toSettlement(arr){
				// 点击之后应该生成订单,id 进行叠加，与地址同理
				var userMsg = JSON.parse(localStorage.getItem(this.$store.state.nowName));
				var id = userMsg.orders.length
				var goodsList = [];
				for(var i=0;i<this.$store.state.nowGoods.length;i++){
					for(var j=0;j<arr.length;j++){
						if(arr[j]==String(i)){
							var goods = this.$store.state.nowGoods[i]
							goodsList.push(goods)
						}
					}
				}
				var nowOrder = {
					id:id,
					addressId:this.$store.state.addressId,
					goodsList:goodsList,
					checknum:0,
					orderstate:0,
					price:this.allprice
				}
				// console.log(nowOrder)
				userMsg.orders.push(nowOrder)
				localStorage.setItem(this.$store.state.nowName,JSON.stringify(userMsg))
				Toast({
				  type: 'loading',
				  duration: 800,
				  message: '正在生成订单',
				  onClose: () => {
					// console.log(arr)
					// 清空购物车
					localStorage.setItem(this.$store.state.nowUser,JSON.stringify([]))
				    this.$router.push({name:'settlement',params:{choose:id}});
				  },
				});
			}
		},
		components:{ BottomNav,Toptitle },
		mounted() {
			this.$nextTick(function(){
				var users = JSON.parse(localStorage.getItem(this.$store.state.nowUser));
				var allgoods = [];
				if(users && users.length!=0){
					this.emptystate = false
					for(var i=0;i<users.length;i++){
						var goodsarr = users[i].goodsId.split('');
						var thisGoods = this.goods[goodsarr[0]][goodsarr[1]];
						thisGoods.num = users[i].num;
						thisGoods.goodsId = users[i].goodsId;
						thisGoods.choose = users[i].choose;
						for(var j=0;j<this.addList.length;j++){
							if(users[i].choose==this.addList[j].id){
								var size = this.addList[j].size;
								var temp = this.addList[j].temp;
								thisGoods.size = size;
								thisGoods.temp = temp;
							}
						}
						allgoods.push(thisGoods);
						this.result.push(i);
					}
					this.nowGoods = allgoods;
				}else{
					this.emptystate = true
				}
				
			})
		},
		watch:{
			nowGoods:{
					  // 必须为handler函数
					  handler(){
						  
						  this.$store.state.nowGoods = this.nowGoods;
						  // console.log(this.$store.state.nowGoods);
						  var goodsarr = [];
						  this.allprice = 0;
						  for(var i=0;i<this.nowGoods.length;i++){
							  var goods = {
								  goodsId:this.nowGoods[i].goodsId,
								  num:this.nowGoods[i].num,
								  choose:this.nowGoods[i].choose,
								  price:this.nowGoods[i].newprice
							  }
							  // 计算最终价格
							  this.allprice = this.allprice+this.nowGoods[i].num*this.nowGoods[i].newprice
							  goodsarr.push(goods)
						  }
						  // 存入localstorage
						  localStorage.setItem(this.$store.state.nowUser,JSON.stringify(goodsarr));
						  if(this.nowGoods.length == 0){
							  this.emptystate = true
						  }
					  },
			          deep:true//深度监听，可检测到数组中某个对象属性的变化
				  }
		}
	}
</script>

<style scoped lang="less">
	.shopcar{background: rgb(247,246,244);height: 100vh;}
	.b_nav{position: fixed;bottom: 0;}
	.topbg{height: 68px;width: 375px;}
	.topbg>img{height: 68px;width: 375px;}
	
	.goodscard{
		height: 80px;
		width: 375px;
		background: white;
		position: relative;
	}
	.checkbox{float: left;margin: 28px 15px;}
	
	.text{float: left;width: 189px;padding-top: 14px;}
	.text>h3{font-size: 15px;}
	.text>.english{font-size: 10px;}
	.text>.choose{font-size: 10px;}
	
	.price{height: 80px;}
	.price>p{line-height: 80px;font-size: 18px;}
	
	.toBtn{height: 30px;width: 100px;box-sizing: border-box;border: 1px solid rgba(144, 192, 239, 1);text-align: center;font-size: 14px;line-height: 28px;color: rgba(144, 192, 239, 1);}
	.stet{float: right;height: 22px;width: 75px;position: absolute;right: 10px;top: 29px;}
	.group{padding-bottom: 20px;overflow-y: scroll;}
	.jiesuan{height: 60px;width: 375px;background-color: white;position: fixed;bottom: 50px;box-sizing: border-box;padding-left: 15px;}
	.jiesuan>.heji{float: left;line-height: 60px;font-size: 14px;}
	.jiesuan>.allprice{float: left;line-height: 60px;font-size: 24px;}
	.jiesuan>.rightBtn{float: right;height: 60px;width: 119px;background: rgba(144, 192, 239, 1);color: white;line-height: 60px;text-align: center;}
	.delete-button{height: 100%;}
	
	
	.guesslike{height: 212px;width: 345px;padding: 0 15px;padding-bottom: 110px;}
	.guesslike>h3{height: 22px;font-size: 15px;line-height: 22px;margin-bottom: 10px;}
	
	.recommend{height: 180px;width: 345px;}
	.onerec{height: 180px;width: 108px;}
	.onerec>img{height: 108px;width: 108px;display: block;}
	.onerec>h4{height: 17px;font-size: 11px;color: rgba(56, 56, 56, 1);}
	.onerec>p{color: rgba(166, 166, 166, 1);font-size: 10px;}
</style>