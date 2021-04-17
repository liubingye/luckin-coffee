<template>
	<div class="addresslist">
		<Headnav :Msg="msg"></Headnav>
		<Addrlist></Addrlist>
	</div>
</template>

<script>
	import Headnav from '@/components/Headnav'
	import Addrlist from '@/components/Addrlist'
	export default {
	  data() {
	    return {
		  msg: '我的地址'
	    };
	  },
	  components:{ Headnav,Addrlist }
	};
</script>

<style>
</style>
