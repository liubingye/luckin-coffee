<template>
	<div class="setaddress">
		<Headnav :Msg="msg"></Headnav>
		<Setaddr></Setaddr>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav.vue'
	import Setaddr from '@/components/Setaddr.vue'
	export default {
	  
	  data(){
		  return{
			  msg:'添加地址',
		  }
	  },
	  components:{ Headnav,Setaddr }
	};
</script>

<style scoped lang="less">
	
</style>
