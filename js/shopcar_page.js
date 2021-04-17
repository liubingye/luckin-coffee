$(function(){
	var priceNum = 0
	for(var i=0;i<JSON.parse(sessionStorage.getItem('shoes')).length;i++){
		var goodsTr = document.createElement('tr');
		$(goodsTr).addClass('goods-tr');
		
		var tdImg = document.createElement('td');
		$(tdImg).addClass('td-img');
		
		var img = document.createElement('img')
		// 设置图片路径
		$(img).attr('src',JSON.parse(sessionStorage.getItem('shoes'))[i].image)
		// 图片加入到td中
		$(tdImg).append($(img));
		$(goodsTr).append($(tdImg));
		
		var tdCont = document.createElement('td');
		$(tdCont).addClass('td-content');
		
		var tdcontP = document.createElement('p');
		$(tdcontP).html(JSON.parse(sessionStorage.getItem('shoes'))[i].name)
		$(tdCont).append($(tdcontP));
		
		var tdVariation = document.createElement('div');
		$(tdVariation).addClass('td-variation');
		
		var tdChicun = document.createElement('p');
		$(tdChicun).addClass('td-chicun');
		$(tdChicun).html(JSON.parse(sessionStorage.getItem('shoes'))[i].size)
		$(tdVariation).append($(tdChicun));
		
		var tdYanse = document.createElement('p');
		$(tdYanse).addClass('td-yanse');
		$(tdYanse).html(JSON.parse(sessionStorage.getItem('shoes'))[i].color)
		$(tdVariation).append($(tdYanse));
		$(tdCont).append($(tdVariation));
		$(goodsTr).append($(tdCont));
		
		var tdPrice = document.createElement('td');
		$(tdPrice).addClass('td-price');
		$(tdPrice).html('￥'+JSON.parse(sessionStorage.getItem('shoes'))[i].price);
		$(goodsTr).append($(tdPrice));
		
		var tdNum = document.createElement('td');
		$(tdNum).addClass('td-num');
		var subButton = document.createElement('div');
		$(subButton).addClass('sub-button');
		$(subButton).html('-')
		$(tdNum).append($(subButton));
		var shopCarText = document.createElement('input');
		$(shopCarText).addClass('shopcar-text');
		$(shopCarText).attr('type','text');
		$(shopCarText).val(JSON.parse(sessionStorage.getItem('shoes'))[i].shoesNum)
		$(tdNum).append($(shopCarText));
		var addButton = document.createElement('div');
		$(addButton).addClass('add-button');
		$(addButton).html('+')
		$(tdNum).append($(addButton));
		$(goodsTr).append($(tdNum));
		
		var tdAllprice = document.createElement('td');
		$(tdAllprice).addClass('td-allprice');
		var spanAllprice = document.createElement('span');
		$(spanAllprice).html('￥'+parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].shoesNum)*parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].price))
		$(tdAllprice).append($(spanAllprice))
		$(goodsTr).append($(tdAllprice));
		
		var tdDelete = document.createElement('td');
		$(tdDelete).addClass('td-delete');
		var pDelete = document.createElement('p');
		$(pDelete).html('删除');
		$(tdDelete).append($(pDelete));
		$(goodsTr).append($(tdDelete));
		
		$('.appendto').before($(goodsTr));
		
		priceNum = priceNum + parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].shoesNum)*parseInt(JSON.parse(sessionStorage.getItem('shoes'))[i].price)
	}
	$('.jiesuan>div:eq(0)').html(`总计￥${priceNum}`)
	// 绑定点击事件  事件委派
	$('tbody').on('click','.td-delete>p',function(){
		// 获取到点击的是第几个元素 除开第一个
		var pIndex = $(this).parent().parent().index()-1
		console.log(pIndex)
		// 从sessionstorage中取出数组
		var storageArr = JSON.parse(sessionStorage.getItem('shoes'));
		// 删除同样index的对象，和元素
		storageArr.splice(pIndex,1);
		$('.goods-tr').eq(pIndex).remove()
		// 修改数组后传回
		var jsonObj = JSON.stringify(storageArr);
		sessionStorage.setItem('shoes',jsonObj);
		$('.jiesuan>div:eq(0)').html(`总计￥${priceNum}`)
		// 同样进行判定是否为空
		if(sessionStorage.getItem('shoes')==null){
			var nullArr = [];
			nullArr = JSON.stringify(nullArr)
			sessionStorage.setItem('shoes',nullArr)
		}
	})
})