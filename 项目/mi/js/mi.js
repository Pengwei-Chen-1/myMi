// $ 方法的封装
window.$=HTML.prototype.$=function(selector){  //this--->parent
	var r=(this==window?document:this).querySelectorAll(selector);
	return r.length==0? null:
		       r.length==1? r[0] :
									  r ;
}
// on 方法的封装   绑定事件函数
HTMLElement.prototype.on=function(ename,fun){
	this.addEventListener(ename,fun);
}
// each 方法的封装
NodeList.prototype.each=function(callback){
	for(var i=0;i<this.length;i++){//遍历当前NodeList中每个元素,对每个元素调用相同的callback方法
		callback(this[i]);
	}
}
/**********************top购物车下拉菜单和nav导航的下拉菜单************************/
