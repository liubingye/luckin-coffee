<template>
	<div class="innermenu">
		<h4>{{this.title[this.activeKey]}}</h4>
		<div class="goods">
			<van-card
			  v-for="(val,index) in goods[this.activeKey]"
			  :price="val.newprice"
			  :origin-price="val.oldprice"
			  :desc="val.desc"
			  :title="val.name"
			  :thumb="val.path"
			  @click="toBuy(val.path,val.newprice,index)"
			>
			<template #footer>
				<img :src="require('../assets/homelogo/add.svg')" alt="">
			</template>
			</van-card>
		</div>
		<van-sku
		  v-model="show"
		  :sku="sku"
		  :goods="pics"
		  :goods-id="goodsId"
		  :hide-stock="sku.hide_stock"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Card,Sku } from 'vant';
	
	Vue.use(Sku);
	Vue.use(Card);
	export default{
		data(){
			return{
				goodsId:this.activeKey,
				show: false,
				      sku: {
				        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
				        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
				        tree: [
				          {
				            k: '规格', // skuKeyName：规格类目名称
				            k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				            v: [
				              {
				                id: '1', // skuValueId：规格值 id
				                name: '大' // skuValueName：规格值名称
				              },
				              {
				                id: '2',
				                name: '中'
				              },
							  {
							    id: '3',
							    name: '小'
							  }
				            ],
				            largeImageMode: false, //  是否展示大图模式
				          },
						  {
						    k: '温度', // skuKeyName：规格类目名称
						    k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
						    v: [
						      {
						        id: '1', // skuValueId：规格值 id
						        name: '冰' // skuValueName：规格值名称
						      },
						      {
						        id: '2',
						        name: '热'
						      }
						    ],
						    largeImageMode: false, //  是否展示大图模式
						  }
				        ],
				        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
				        list: [
				          {
				            id: 11, // skuId
				            s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
				            s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
				            price: 1600, // 价格（单位分）
				            stock_num: 110 // 当前 sku 组合对应的库存
							},
						  {
						    id: 12, // skuId
						    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
						    s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						    price: 1600, // 价格（单位分）
						    stock_num: 110 // 当前 sku 组合对应的库存
						  },
						  {
						    id: 21, // skuId
						    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
						    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
						    price: 1600, // 价格（单位分）
						    stock_num: 110 // 当前 sku 组合对应的库存
						  },
						  {
						    id: 22, // skuId
						    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
						    s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						    price: 1600, // 价格（单位分）
						    stock_num: 110 // 当前 sku 组合对应的库存
						  },
						  {
						    id: 31, // skuId
						    s1: '3', // 规格类目 k_s 为 s1 的对应规格值 id
						    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
						    price: 1600, // 价格（单位分）
						    stock_num: 110 // 当前 sku 组合对应的库存
						  },
						  {
						    id: 32, // skuId
						    s1: '3', // 规格类目 k_s 为 s1 的对应规格值 id
						    s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
						    price: 1600, // 价格（单位分）
						    stock_num: 110 // 当前 sku 组合对应的库存
						  }
				        ],
				        price: '', // 默认价格（单位元）
				        stock_num: 227, // 商品总库存
				        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
				        none_sku: false, // 是否无规格商品
				        hide_stock: false // 是否隐藏剩余库存
				      },
				      pics: {
				        // 默认商品 sku 缩略图
				        picture: require('@/assets/imgs/coffee.png')
				      },
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
				title:[
					'人气Top','大师咖啡','零度拿铁','瑞纳冰','经典饮品','健康轻食','鲜榨果蔬汁'
				],
				
			}
		},
		props:['activeKey'],
		methods:{
			onAddCartClicked(skuData){
				var goods = {
					goodsId:skuData.goodsId,
					num:skuData.selectedNum,
					choose:skuData.selectedSkuComb.id,
					price:skuData.selectedSkuComb.price/10
				}
				if(this.$store.state.loginLock){
					if(JSON.parse(localStorage.getItem(this.$store.state.nowUser))){
					  var arr = JSON.parse(localStorage.getItem(this.$store.state.nowUser));
					  arr.push(goods)
					  localStorage.setItem(this.$store.state.nowUser,JSON.stringify(arr));
					}else{
					  var User = [goods]
					  localStorage.setItem(this.$store.state.nowUser,JSON.stringify(User));
					}
				}else{
					this.$router.push('/logorres')
				}
				this.show = false
			},
			onBuyClicked(skuData){
				console.log(skuData)
			},
			toBuy(pic,price,index){
				this.show = true;
				this.pics.picture = pic;
				this.sku.price = price;
				for(var i =0;i<this.sku.list.length;i++){
					this.sku.list[i].price = price+'0'
				}
				this.goodsId = this.activeKey+''+index;
			}
		}
	}
</script>

<style scoped lang="less">
	h4{height: 44px;line-height: 44px;font-size: 13px;border-left: 2px solid black;box-sizing: border-box;padding-left: 10px;}
	.goods{height: 442px;overflow-y: scroll;box-sizing: border-box;padding-bottom: 49px;}
	.van-card__footer{position: relative;bottom: 22px;height: 0px;}
	.van-card__footer>img{height: 22px;width: 22px;}
</style>
