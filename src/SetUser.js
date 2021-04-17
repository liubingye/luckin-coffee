
export default{
	setUser(val){

		  if(JSON.parse(localStorage.getItem('users'))){
			  var arr = JSON.parse(localStorage.getItem('users'));
			  arr.push(val)
			  localStorage.setItem('users',JSON.stringify(arr));
		  }else{
			  var User = [val]
			  localStorage.setItem('users',JSON.stringify(User));
		  }
	},
	getUser(val){
		var arr = JSON.parse(localStorage.getItem('users'));
		for(var i=0;i<arr.length;i++){
			if(val.tel==arr[i].phone){
				if(val.pass==arr[i].password){
					// 登录成功
					return 1
				}else{
					// 密码不正确
					return 2
				}
			}if(i==(arr.length-1) && val.tel!=arr[i].phone){
				// 手机号未注册
				return 3
			}
		}
	},
	getName(phone){
		var arr = JSON.parse(localStorage.getItem('users'));
		for(var i=0;i<arr.length;i++){
			if(phone==arr[i].phone){
				return arr[i].text
			}
		}
	}

}