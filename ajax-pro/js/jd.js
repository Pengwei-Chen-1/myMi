//异步加载网页头和尾
$(function(){
	$('#header').load('header.php');
	$('#footer').load('footer.php');
});

$(document.body).on('click','#bt-login',function(){
	$('div.modal').show(300);              
})

/*****************点击登录按钮,异步验证用户名和密码*******************/

var loginName = null;
$('#bt-login').click(function(){
	//var n = $(this).parent().first-child.val();
	//var p = $(this).parent().nth-child(2).val();

	var data = $('#login-form').serialize();
	//console.log(data);
	$.post('data/1_login.php',data,function(obj){
		if(obj.code===1000){
			//alert('验证成功!');
			$('.modal').fadeOut();
			loginName = $('[name="uname"]').val();
			$('#welcome').html('欢迎回来: '+loginName);
		}else{
			$('.modal .alert').html(obj.msg);
		}
	});
});
/***产品列表页加载完成后,异步请求第1页记录**/
$(function(){
	loadProduct(1);
})
$('.pager').on('click','a',function(e){
	e.preventDefault();
	var pno = $(this).attr('href');  //请求的目标页号
	loadProduct(pno);
})

function loadProduct(pno){
	$.getJSON('data/product_select_v2.php',{'pno':pno},function(pager){
		//console.log('开始处理响应数据!');
		var html = "";
		//console.log(pager);
		$.each(pager.data,function(i,p){
			//console.log(p);
			html += `
				<li>
                    <a href=""><img src='${p.pic}' alt=""/></a>
                    <p>￥${p.price}</p>
                    <h1><a href="">${p.pname}</a></h1>
                    <div>
                        <a href="" class="contrast"><i></i>对比</a>
                        <a href="" class="p-operate"><i></i>关注</a>
                        <a href='${p.pid}' class="addcart"><i></i>加入购物车</a>
                    </div>
                </li>
			`;
			
		});
		$('#plist ul').html(html);
		
		var pagerHtml = "";
		if(pager.pno-2>0){
			pagerHtml += `<li><a href="${pager.pno-2}">${pager.pno-2}</a></li>	`;
		}
		if(pager.pno-1>0){
			pagerHtml += `	<li><a href="${pager.pno-1}">${pager.pno-1}</a></li>`;	
		}
		pagerHtml += `	<li class="active"><a href="${pager.pno}">${pager.pno}</a></li>`;	
		if(pager.pno+1<=pager.pageCount){
			pagerHtml += `	<li><a href="${pager.pno+1}">${pager.pno+1}</a></li>`;	
		}
		if(pager.pno+2<=pager.pageCount){
			pagerHtml += `	<li><a href="${pager.pno+2}">${pager.pno+2}</a></li>`;	
		}
		
		$('.pager').html(pagerHtml);
	})
}
/****/

$('#header').on('click','#settle_up',function(){
	location.href = "shoppingcart.html?loginName="+loginName;
})

$('#plist ul').on('click','a.addcart',function(e){
	e.preventDefault();
	var pid = $(this).attr('href');
	var uname = loginName;
	console.log(pid);
	console.log(uname);
	$.getJSON('data/cart_add.php',{'pid':pid,'uname':uname},function(arr){
		console.log(arr);
		if(arr.code===2000 || arr.code===2001){
			alert('商品已添加至购物车！');
		}else {
			alert('商品添加失败，请刷新页面后重试！');
		}
	
	});
	
})



