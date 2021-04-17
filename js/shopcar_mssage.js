// 该js文件主要用于存储购物车信息  和添加购物车内容
var shopcarArr = [
	{
		name:'耐克创新颗粒运动鞋-浅蓝色',
		image:'https://ccdn.goodq.top/caches/9e5f52f371589c4821d52fe08c20b82e/aHR0cDovLzVkODllYWEyZWNmZTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS8zOTYyODQ5MGJiMGQxZjQ4NWNkMmFkMmZkMzEyOWRiZC00MDB4MzUwLTkwLndlYnA_p_p100_p_3D.webp',
		color:'颜色:浅蓝色',
		price:'1288',
		shoesNum: '1'
	},
	{
		name:'耐克创新颗粒运动鞋-荧光绿',
		image:'https://ccdn.goodq.top/caches/9e5f52f371589c4821d52fe08c20b82e/aHR0cDovLzVkODllYWEyZWNmZTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9mNTY2ZDU2MDliMzhmYmQxZTQ1ZDhlNzY0NTQzZmM5MjItNDAweDM1MC05MC53ZWJw.webp',
		color:'颜色:荧光绿',
		price:'1288',
		shoesNum:'1'
	},
	{
		name:'耐克创新颗粒运动鞋-浅粉色',
		image:'https://ccdn.goodq.top/caches/9e5f52f371589c4821d52fe08c20b82e/aHR0cDovLzVkODllYWEyZWNmZTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS9mNTY2ZDU2MDliMzhmYmQxZTQ1ZDhlNzY0NTQzZmM5Mi00MDB4MzUwLTkwLndlYnA_p_p100_p_3D.webp',
		color:'颜色:浅粉色',
		price:'1288',
		shoesNum:'1'
	},
	{
		name:'耐克创新颗粒运动鞋',
		image:'https://ccdn.goodq.top/caches/9e5f52f371589c4821d52fe08c20b82e/aHR0cDovLzVkODllYWEyZWNmZTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS84ZjMxZTEwODU3Zjc4MjU4OGUxMzc1MmY4MGEwNDg4Zi05MC53ZWJw.webp',
		color:'颜色:白色',
		price:'1288',
		shoesNum:'1'
	},
	{
		name:'耐克创新颗粒运动鞋-蓝色',
		image:'https://ccdn.goodq.top/caches/9e5f52f371589c4821d52fe08c20b82e/aHR0cDovLzVkODllYWEyZWNmZTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wOS8zOTYyODQ5MGJiMGQxZjQ4NWNkMmFkMmZkMzEyOWRiZC00NDZ4NDA3LTkwLndlYnA_p_p100_p_3D.webp',
		color:'颜色:蓝色',
		price:'1288',
		shoesNum:'1'
	}
]
var sizeArr = [
	'尺寸:L','尺寸:M','尺寸:S','尺寸:XL','尺寸:XXL'
];

$(function(){
	// 加载时添加一个空的数组进sessionstrage
	var num = 0;
	if(sessionStorage.getItem('shoes')==null){
		var nullArr = [];
		nullArr = JSON.stringify(nullArr)
		sessionStorage.setItem('shoes',nullArr)
	}
	if(JSON.parse(sessionStorage.getItem('shoes')).length == 0){
		$('.hidden-car>div').css('display','none')
		$('.hidden-car>ul').css('display','none')
		$('.hidden-car>p').css('display','block')
	}else{
		$('.hidden-car>div').css('display','block')
		$('.hidden-car>ul').css('display','block')
		$('.hidden-car>p').css('display','none')
		for(var i=0;i<JSON.parse(sessionStorage.getItem('shoes')).length;i++){
			var li = document.createElement('li');
			$(li).addClass('inshopcar-content');
			var leftDiv = document.createElement('div');
			$(leftDiv).addClass('inner-shopcar-left');
			$(leftDiv).css('background-image',`url(${JSON.parse(sessionStorage.getItem('shoes'))[i].image})`)
			$(li).append($(leftDiv))
			var rightDiv = document.createElement('div');
			$(rightDiv).addClass('inner-shopcar-right');
			$(li).append($(rightDiv))
			
			var removeButton = document.createElement('div');
			$(removeButton).addClass('remove-button');
			$(removeButton).html('✕')
			$(li).append($(removeButton))
			
			var a = document.createElement('a');
			$(a).html(JSON.parse(sessionStorage.getItem('shoes'))[i].name)
			$(rightDiv).append($(a))
			
			var variation = document.createElement('div');
			$(variation).addClass('variation');
			$(rightDiv).append($(variation))
			
			var chicun = document.createElement('p');
			$(chicun).addClass('chicun');
			$(chicun).html(JSON.parse(sessionStorage.getItem('shoes'))[i].size)
			$(variation).append($(chicun));
			
			var yanse = document.createElement('p');
			$(yanse).addClass('yanse');
			$(yanse).html(JSON.parse(sessionStorage.getItem('shoes'))[i].color)
			$(variation).append($(yanse));
			
			var inliprice = document.createElement('div')
			$(inliprice).addClass('inliprice');
			$(inliprice).html(JSON.parse(sessionStorage.getItem('shoes'))[i].shoesNum+' '+'×'+' '+'￥'+JSON.parse(sessionStorage.getItem('shoes'))[i].price);
			$(rightDiv).append($(inliprice));
			$('.inner-shopcar').append($(li))
			// 更改结算的价格
			
			num = num + parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].shoesNum)*parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].price)
		}
		$('.float-shopcar-last>p>span').html('￥'+num)
	}
	$('.shopnow-button').on('click',function(){
		// 获取到尺寸 和  颜色的值
		// console.log($('.size-onindex').index(),$('.color-onindex').index())
		$('.hidden-car>div').css('display','block')
		$('.hidden-car>ul').css('display','block')
		$('.hidden-car>p').css('display','none')
		var size = sizeArr[$('.size-onindex').index()]
		var obj = shopcarArr[$('.color-onindex').index()]
		obj['size'] = size;
		obj['shoesNum'] = $('.pushprice-text').val();
		//从sessionstorage中取出数组
		var storageArr = JSON.parse(sessionStorage.getItem('shoes'));
		storageArr.push(obj)
		// 将obj数组保存到sessionstrage中
		// 由于sessionstrage只能存放字符串类型  所以使用JSON.stringify()方法
		var jsonObj = JSON.stringify(storageArr);
		sessionStorage.setItem('shoes',jsonObj);
		// 遍历数组创建li标签
		storageArr = JSON.parse(sessionStorage.getItem('shoes'))
		$('.inner-shopcar').empty()
		var finalPrice = 0;
		for(var i=0;i<storageArr.length;i++){
			var li = document.createElement('li');
			$(li).addClass('inshopcar-content');
			var leftDiv = document.createElement('div');
			$(leftDiv).addClass('inner-shopcar-left');
			$(leftDiv).css('background-image',`url(${storageArr[i].image})`)
			$(li).append($(leftDiv))
			var rightDiv = document.createElement('div');
			$(rightDiv).addClass('inner-shopcar-right');
			$(li).append($(rightDiv))
			
			var removeButton = document.createElement('div');
			$(removeButton).addClass('remove-button');
			$(removeButton).html('✕')
			$(li).append($(removeButton))
			
			var a = document.createElement('a');
			$(a).html(storageArr[i].name)
			$(rightDiv).append($(a))
			
			var variation = document.createElement('div');
			$(variation).addClass('variation');
			$(rightDiv).append($(variation))
			
			var chicun = document.createElement('p');
			$(chicun).addClass('chicun');
			$(chicun).html(storageArr[i].size)
			$(variation).append($(chicun));
			
			var yanse = document.createElement('p');
			$(yanse).addClass('yanse');
			$(yanse).html(storageArr[i].color)
			$(variation).append($(yanse));
			
			var inliprice = document.createElement('div')
			$(inliprice).addClass('inliprice');
			$(inliprice).html(storageArr[i].shoesNum+' '+'×'+' '+'￥'+storageArr[i].price);
			$(rightDiv).append($(inliprice));
			$('.inner-shopcar').append($(li))
			// 更改结算的价格
			
			finalPrice = finalPrice + parseInt(storageArr[i].shoesNum)*parseInt(storageArr[i].price)
		}
		$('.float-shopcar-last>p>span').html('￥'+finalPrice)
	})
	
	// 鼠标指向购物车图标是图标出现
	$('.head-ul-right>li:eq(2)').mouseenter(function(){
		$('.hidden-car').css('display','block').animate({opacity:1},100)
	})
	$('.head-ul-right>li:eq(2)').mouseleave(function(){
		$('.hidden-car').delay(1000).animate({opacity:0},300,function(){
			$('.hidden-car').css('display','none')
		})
	})
	$('.hidden-car').mouseenter(function(){
		$('.hidden-car').stop().addClass('first-shopcar')
	})
	$('.hidden-car').mouseleave(function(){
		$('.hidden-car').removeClass('first-shopcar')
	})
	
	// 点击按钮删除标签
	$('.inner-shopcar').on('click','.remove-button',function(){
		// 获取到点击的是第几个元素
		var liIndex = $(this).parent().index()
		console.log(liIndex)
		// 从sessionstorage中取出数组
		var storageArr = JSON.parse(sessionStorage.getItem('shoes'));
		// 删除同样index的对象，和元素
		storageArr.splice(liIndex,1);
		$('.inner-shopcar>li').eq(liIndex).remove()
		// 修改数组后传回
		var jsonObj = JSON.stringify(storageArr);
		sessionStorage.setItem('shoes',jsonObj);
		// 同样进行判定是否为空
		if(sessionStorage.getItem('shoes')==null){
			var nullArr = [];
			nullArr = JSON.stringify(nullArr)
			sessionStorage.setItem('shoes',nullArr)
		}
		if(JSON.parse(sessionStorage.getItem('shoes')).length == 0){
			$('.hidden-car>div').css('display','none')
			$('.hidden-car>ul').css('display','none')
			$('.hidden-car>p').css('display','block')
		}
		
	})
})



