var game={//保存r行*c列的二维数组
	date:null,
	RN:4,
	CN:4,
	score:0,//保存当前得分
	state:1,//保存游戏状态
	RUNNING:1,
	GAMEOVER:0,
//强调:
	//1. 对象的方法用到对象自己的属性,必须加this.
	//2. 每个属性和方法之间,都要用逗号分隔
	start:function(){//启动游戏
		this.score=0;
		this.state=this.RUNNING;//重置游戏状态为运行
		this.data=[];//创建空数组保存到data属性中
		for(var r=0;r<this.RN;r++){//r从0开始,到<RN结束
			this.data.push([]);//向data中压入一个空数组
			for(var c=0;c<this.CN;c++){//c从0开始,到<CN结束
				this.data[r].push(0);//向data中r行的子数组压入一个0
			}
		}	
		this.randomNum();//调用randomNum随机生成一个数
		this.randomNum();//调用randomNum随机生成一个数
		this.updateView();//调用updateView方法,将data数据更新到页面
		document.onkeydown=function(e){ //判断按键编号 
			switch(e.keyCode){  //判断按键编号 e.keyCode:
				case 37:this.moveLeft(); break;  //是37,就moveLeft
				case 38:this.moveUp(); break;  //是38,就moveUp
				case 39:this.moveRight(); break;  //是39,就moveRight
				case 40:this.moveDown(); break;  //是40,就moveDown
			}
		}.bind(this)
	},
	randomNum:function(){ 	//在data中一个随机的空位置,生成2或4
		while(true){//反复
			var r=parseInt(Math.random()*this.RN);  //在0~RN-1之间生成一个随机整数,保存在r中
			var c=parseInt(Math.random()*this.CN);  //在0~CN-1之间生成一个随机整数,保存在c中
			if(this.data[r][c]==0){  	//如果data中r行c列为0
				//将data中r行c列赋值为:
				this.data[r][c]=Math.random()<0.5?this.data[r][c]=2:this.data[r][c]=4;  //0~1随机生成一个小数,如果<0.5?就赋值为2,否则赋值为4	
				break;//退出循环
			}
		}
	},
	updateView:function(){//将data的数据更新到页面
		for(var r=0;r<this.RN;r++){   //遍历data
			for(var c=0;c<this.CN;c++){
				var div=document.getElementById("c"+r+c);  //查找id为"c"+r+c的div,保存在变量div中
				if(this.data[r][c]!=0){  //如果data中r行c列不是0
					div.innerHTML=this.data[r][c];    //设置div的内容为data中r行c列的值
					div.className="cell  n"+this.data[r][c];  //设置div的className属性为"cell  n"+data中r行c列的值
				}else{  //否则
					div.innerHTML="";    //设置div的内容为""
					div.className="cell";   //设置div的className属性为"cell"
				}
			}
		}
		//找到id为score的span,设置其内容为score
		document.getElementById("score").innerHTML=this.score;
		var gameOver=document.getElementById("gameOver")//找到id为gameOver的div,保存在变量gameOver中
		if(this.state==this.GAMEOVER){//如果游戏的状态为GAMEOVER
			gameOver.style.display="block";//设置gameOver的style的display为"block"
			document.getElementById("fScore").innerHTML=this.score;//找到id为fScore的span,设置其内容为score
		}else{//否则
			gameOver.style.display="none";//设置gameOver的style的display为"none"
			}
	},
	/***************************************************左移************************************************************/
	moveLeft:function(){//左移所有行
		this.move(function(){
			for(var r=0;r<this.RN;r++){//遍历data中每一行
				this.moveLeftInRow(r);//调用moveLeftInRow左移第r行		
			}//(遍历后)
		}.bind(this));
	},
	moveLeftInRow:function(r){//左移第r行
		for(var c=0;c<this.CN-1;c++){//遍历data中r行每个元素,到<CN-1结束
			var nextc=this.getNextInRow(r,c);//调用getNextInRow方法,查找下一个不为0的位置,保存在nextc位置
			if(nextc==-1){//如果nextc等于-1，就退出循环
				break;
		    }
				else{//否则
					if(this.data[r][c]==0){//如果c位置的值为0
						this.data[r][c]=this.data[r][nextc];//将nextc位置的值替换c位置的值
						this.data[r][nextc]=0;//将nextc位置的值置为0
						c--; //c留在原地
					}
						else if(this.data[r][c]==this.data[r][nextc]){//否则，如果c位置的值等于nextc位置的值
							this.data[r][c]*=2; //将c位置的值*2
							this.score+=this.data[r][c];
							this.data[r][nextc]=0;//将nextc位置的值置为0
						}
				}	
		}
	},
	//查找data中r行c位置右侧下一个不为0的位置保存在nextc中
	getNextInRow:function(r,c){
		for(var nextc=c+1;nextc<this.CN;nextc++){//nextc从c+1开始，遍历data中r行的每个元素,到<CN结束
			if(this.data[r][nextc]!=0){//如果nextc位置的值不为0
				return nextc;//返回nextc
			}	
		}//(遍历结束)
		return -1; //返回-1     必须在遍历结束后返回,如果在遍历没有结束返回-1,导致循环只运行一次,只有在第二列不为0的时候运行左移
	},
	/***********************************************move继承*************************************************************/
	move:function(fun){//左移所有行
		var before=String(this.data);    //为data拍照保存在before
		fun();     //没有用任何对象调用的函数this--->window
		var after=String(this.data);  //为data拍照保存在after
		if(before!=after){  //如果before!=after
			this.randomNum();   //调用randomNum随机生成一个数
			if(this.isGameOver()){//如果游戏结束
				this.state=this.GAMEOVER;//就修改游戏状态为GAMEOVER
			}
			this.updateView();    //更新页面
		}
	},
	/************************************************isGameOver***********************************************************/
	isGameOver:function(){
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){//遍历data
				if(this.data[r][c]==0){//如果当前元素是0
					return false;//返回false
				}
				if(c<this.CN-1&&this.data[r][c]==this.data[r][c+1]){//如果c<CN-1&&当前元素等于右侧元素
					return false;//返回false
				}
				if(r<this.RN-1&&this.data[r][c]==this.data[r+1][c]){//如果r<RN-1&&当前元素等于下方元素
					return false;//返回false
				}
			}
		}//遍历结束
		return true;//返回true
	},
	/*****************************************************************************************************************
	moveRight:function(){//左移所有行
		this.move(()=>{
			for(var r=0;r<this.RN;r++){  //遍历data中每一行
				this.moveRightInRow(r);   //调用moveRightInRow右移第r行
			}//(遍历后)
		});
	},
	////////新方法替代    .bind(this)  
	************************************************右移************************************************************/
	moveRight:function(){//左移所有行
		this.move(function(){
			for(var r=0;r<this.RN;r++){  //遍历data中每一行
				this.moveRightInRow(r);   //调用moveRightInRow右移第r行
			}//(遍历后)
		}.bind(this));
		//
	},
	moveRightInRow:function(r){//左移第r行
		for(var c=this.CN-1;c>0;c--){  //c从CN-1开始，反向遍历data中r行每个元素，到>0结束
			var prevc=this.getPrevInRow(r,c);  //调用getPrevInRow方法，查找前一个不为0的位置，保存在prevc中
			if(prevc==-1){ //如果prevc等于-1，就退出循环
				break;
			}//否则
				else{
					if(this.data[r][c]==0){ //如果c位置的值为0
						this.data[r][c]=this.data[r][prevc]; //将prevc位置的值替换c位置的值
						this.data[r][prevc]=0; //将prevc位置的值置为0
						c++; //c留在原地
					}else if(this.data[r][c]==this.data[r][prevc]){   //否则，如果c位置的值等于prevc位置的值	
						this.data[r][c]*=2;  //将c位置的值*2
						this.score+=this.data[r][c];
						this.data[r][prevc]=0;  //将prevc位置的值置为0
					}
				}
		} 
	},
	getPrevInRow:function(r,c){
		for(var prevc=c-1;prevc>=0;prevc--){//prevc从c-1开始，反向遍历data中r行的每个元素,到>=0结束
			if(this.data[r][prevc]!=0){//如果prevc位置的值不为0
				return prevc;//返回prevc
			}
		}//(遍历结束)
		return -1;//返回-1
	},
/************************************************上移******************************************************************************/
	moveUp:function(){//上移所有列
		this.move(function(){
			for(var c=0;c<this.CN;c++){//遍历data中每一列
				this.moveUpInCol(c);//调用moveUpInCol上移第c列		
			}//(遍历后)
		}.bind(this));
	},
	moveUpInCol:function(c){//上移第c列
		for(var r=0;r<this.RN-1;r++){//遍历data中r行每个元素,到<RN-1结束
			var nextr=this.getNextInCol(r,c);//调用getNextInCol方法,查找下一个不为0的位置,保存在nextr位置
			if(nextr==-1){//如果nextr等于-1，就退出循环
				break;
		    }
				else{//否则
					if(this.data[r][c]==0){//如果r位置的值为0
						this.data[r][c]=this.data[nextr][c];//将nextr位置的值替换r位置的值
						this.data[nextr][c]=0;//将nextr位置的值置为0
						r--; //r留在原地
					}
						else if(this.data[r][c]==this.data[nextr][c]){//否则，如果r位置的值等于nextr位置的值
							this.data[r][c]*=2; //将r位置的值*2
							this.score+=this.data[r][c];
							this.data[nextr][c]=0;//将nextr位置的值置为0
						}
				}	
		}
	},
	//查找data中c列r位置下方下一个不为0的位置保存在nextr中
	getNextInCol:function(r,c){
		for(var nextr=r+1;nextr<this.RN;nextr++){//nextr从r+1开始，遍历data中c列的每个元素,到<RN结束
			if(this.data[nextr][c]!=0){//如果nextr位置的值不为0
				return nextr;//返回nextr
			}	
		}//(遍历结束)
		return -1; //返回-1     必须在遍历结束后返回,如果在遍历没有结束返回-1,导致循环只运行一次,只有在第二列不为0的时候运行左移
	},
/*********************************************下移**********************************************************************************/
	moveDown:function(){//下移所有列
		this.move(function(){
			for(var c=0;c<this.CN;c++){//遍历data中每一列
				this.moveDownInCol(c);//调用moveUpInCol下移第c列		
			}//(遍历后)
		}.bind(this));
	},
	moveDownInCol:function(c){//上移第c列
		for(var r=this.RN-1;r>0;r--){//遍历data中r行每个元素,从<RN-1开始,到r>0结束
			var prevr=this.getPrevtInCol(r,c);//调用getPrevInCol方法,查找下一个不为0的位置,保存在prevr位置
			if(prevr==-1){//如果prevr等于-1，就退出循环
				break;
		    }
				else{//否则
					if(this.data[r][c]==0){//如果r位置的值为0
						this.data[r][c]=this.data[prevr][c];//将prevr位置的值替换r位置的值
						this.data[prevr][c]=0;//将prevr位置的值置为0
						r++; //r留在原地
					}
						else if(this.data[r][c]==this.data[prevr][c]){//否则，如果r位置的值等于prevr位置的值
							this.data[r][c]*=2; //将r位置的值*2
							this.score+=this.data[r][c];
							this.data[prevr][c]=0;//将prevr位置的值置为0
						}
				}	
		}
	},
	//查找data中c列r位置上方下一个不为0的位置保存在prevr中
	getPrevtInCol:function(r,c){
		for(var prevr=r-1;prevr>=0;prevr--){//prevr从r-1开始，遍历data中c列的每个元素,到>=结束
			if(this.data[prevr][c]!=0){//如果prevr位置的值不为0
				return prevr;//返回prevr
			}	
		}//(遍历结束)
		return -1; //返回-1     必须在遍历结束后返回,如果在遍历没有结束返回-1,导致循环只运行一次,只有在第二列不为0的时候运行左移
	},
/*************************************************************************************************************************************/
/*************************************************************************************************************************************/
}
//页面加载后,自动启动游戏
window.onload=function(){game.start();}