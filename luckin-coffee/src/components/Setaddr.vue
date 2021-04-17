<template>
	<div class="setaddr">
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  show-delete
		  show-set-default

		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @delete="onDelete"
		/>
	</div>
</template>

<script>
	import areaList from '@/assets/js/areaList.js'
	import Vue from 'vue';
	import { AddressEdit,Toast,Area } from 'vant';
	
	Vue.use(Area);
	Vue.use(AddressEdit);
	Vue.use(Toast);
	export default {
	  data() {
	    return {
	      areaList,
	    };
	  },
	  methods: {
	    onSave(content) {
	      console.log(content)
		  // 将地址信息存储到缓存中
		  var userMsg = JSON.parse(localStorage.getItem(this.$store.state.nowName));
		  var id = userMsg.address.length
		  content.id = id
		  userMsg.address.push(content)
		  localStorage.setItem(this.$store.state.nowName,JSON.stringify(userMsg))
		  this.$router.go(-1)
	    },
	    onDelete() {
	      Toast('delete');
	    }
	  }
	};
</script>

<style scoped lang="less">
	
</style>
