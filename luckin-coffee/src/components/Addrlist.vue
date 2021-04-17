<template>
	<div class="addrlist">
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  default-tag-text="默认"
		  @add="onAdd"
		  @edit="onEdit"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { AddressList,Toast } from 'vant';
	Vue.use(AddressList);
	Vue.use(Toast);
	export default {
	  data() {
	    return {
	      chosenAddressId: 0,
		  msg: '我的地址',
	      list: [
	        // {
	        //   id: '1',
	        //   name: '张三',
	        //   tel: '13000000000',
	        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
	        //   isDefault: true,
	        // },
	        // {
	        //   id: '2',
	        //   name: '李四',
	        //   tel: '1310000000',
	        //   address: '浙江省杭州市拱墅区莫干山路 50 号',
	        // },
	      ]
	    };
	  },
	  methods: {
	    onAdd() {
	      this.$router.push('/setaddress')
	    },
	    onEdit(item, index) {
	      Toast('编辑地址:' + index);
	    }
	  },
	  created() {
	  	var listArr = JSON.parse(localStorage.getItem(this.$store.state.nowName)).address
		for(var i=0;i<listArr.length;i++){
			var addr = {
				id:listArr[i].id,
				name:listArr[i].name,
				tel:listArr[i].tel,
				address:listArr[i].province+listArr[i].city+listArr[i].county+' '+listArr[i].addressDetail
			}
			this.list.push(addr)
		}
	  },
	  watch:{
		  chosenAddressId:{
			  handler(){
				  this.$store.state.addressId = this.list[this.chosenAddressId].id
				  // console.log(this.$store.state.addressId)
			  },
			  deep:true
		  }
	  }
	};
</script>

<style>
</style>