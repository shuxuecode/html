function Matrix(matrix,count){
	this.count = parseInt(count);
	this.init(matrix);
}
Matrix.prototype.init = function(matrix){
	if(!matrix) return;
	var length = matrix.map(function(a){
		return a.filter(function(b){ return b;}).length;
	}).reduce(function(a,b){
		return parseInt(a)+parseInt(b);
	});
	this.length = length;
	var self = this;
	var arr = new Array(length/2).join(",").split(",").map(function(a){
		return parseInt(Math.random()*self.count+1);
	});
	arr = arr.concat(arr);
	arr.sort(function(){return Math.random() > 0.5;});
	var index = 0;
	this.matrix = matrix.map(function(a){
		return a.map(function(b){
			var v = b;
			if(b){
				v = arr[index];
				index++;
			}
			return v;
		});
	});
	return this.matrix;
}
Matrix.prototype.setMatrix = function(matrix){
	this.matrix = this.init(matrix);
}
Matrix.prototype.getPath = function(startPoint,endPoint){
	var singleLinePath = this.singleLinePath(startPoint,endPoint);
	if(singleLinePath){
		return this.concatPath(startPoint,singleLinePath,endPoint);
	}
	var doubleLinePath = this.doubleLinePath(startPoint,endPoint);
	if(doubleLinePath && doubleLinePath.length){
		return this.concatPath(startPoint,doubleLinePath,endPoint);;
	}
	var threeLinePath = this.threeLinePath(startPoint,endPoint);
	if(threeLinePath && threeLinePath.length){
		return this.concatPath(startPoint,threeLinePath,endPoint);;
	}
}
Matrix.prototype.concatPath = function(){
	var arg = Array.prototype.slice.call(arguments);
	var arr = [];
	for(var i=0;i<arg.length;i++){
		arr = arr.concat(arg[i]);
	}
	return arr;
}
//single Line
Matrix.prototype.singleLinePath = function(startPoint,endPoint){
	var path;
	//same col
	if(startPoint.x == endPoint.x){
		if(Math.abs(startPoint.y - endPoint.y) == 1){
			path = [];
		}else{
			var min = Math.min(startPoint.y,endPoint.y),
				max = Math.max(startPoint.y,endPoint.y);
			var arr = [],bool = true;
			for(var y = min+1; y < max;y++){
				if(this.matrix[y][startPoint.x]==0){
					arr.push({x:startPoint.x,y:y});
				}else{
					bool = false;
					break;
				}
			}
			if(bool){
				path = arr;
			}
		}
	}
	//same row
	if(startPoint.y == endPoint.y){
		if(Math.abs(startPoint.x - endPoint.x) == 1){
			path = [];
		}else{
			var min = Math.min(startPoint.x,endPoint.x),
				max = Math.max(startPoint.x,endPoint.x);
			var arr = [],bool = true;
			for(var x = min+1; x < max ; x++){
				if(this.matrix[startPoint.y][x]==0){
					arr.push({x:x,y:startPoint.y});
				}else{
					bool = false;
					break;
				}
			}
			if(bool){
				path = arr;
			}
		}
	}
	return path;
}
//double line
Matrix.prototype.doubleLinePath = function(startPoint,endPoint){
	var path;
	if(startPoint.x !== endPoint.x && startPoint.y !== endPoint.y){
		var point1 = {
			x : startPoint.x,
			y : endPoint.y
		};
		var point2 = {
			x : endPoint.x,
			y : startPoint.y
		}
		var c_point_1 = this.checkpoint(point1),
			c_point_2 = this.checkpoint(point2);
		if(!c_point_1){
			var line1 = this.singleLinePath(startPoint,point1),
				line2 = this.singleLinePath(point1,endPoint);
			if(line1 && line2){
				path = [].concat(point1).concat(line1).concat(line2);
				return path;
			}	
		}
		if(!c_point_2){
			var line3 = this.singleLinePath(startPoint,point2),
				line4 = this.singleLinePath(point2,endPoint);
			if(line3 && line4){
				path = [].concat(point2).concat(line3).concat(line4);
				return path;
			}	
		}
	}
	return path;
}
//three line
Matrix.prototype.threeLinePath = function(startPoint,endPoint){
	var patharr = [];
	//x 
	for(var i=0;i<this.matrix[0].length;i++){
		if(i!=startPoint.x){
			var point_x = {
				x : i,
				y : startPoint.y
			};
			
			c_point = this.checkpoint(point_x);
			if(!c_point){
				var line_1 = this.singleLinePath(startPoint,point_x),
					line_2 = this.doubleLinePath(point_x,endPoint);	
				if(line_1 && line_2){
					patharr.push(line_1.concat(line_2).concat(point_x));
				}	
			}
			
		}
	}
	//y
	for(var j=0;j<this.matrix.length;j++){
		if(j!=startPoint.y){
			var point_y = {
				x : startPoint.x,
				y : j
			};
			
			c_point = this.checkpoint(point_y);
			if(!c_point){
				var line_3 = this.singleLinePath(startPoint,point_y),
					line_4 = this.doubleLinePath(point_y,endPoint);
				if(line_3 && line_4){
					patharr.push(line_3.concat(line_4).concat(point_y));
				}
			}
		}
	}
	
	if(patharr.length){
		patharr = patharr.sort(function(a,b){
			return a.length > b.length;
		})[0];
	}
	
	return patharr.length ? patharr : false;
}
//检测点是否有值
Matrix.prototype.checkpoint = function(point){
	return this.matrix[point.y][point.x];
}
//重列
Matrix.prototype.resort = function(){
	console.log("!!!");
	if(this.length<=0) return;
	
	var arr = this.matrix.map(function(a){
		return a.filter(function(b){
			return b;
		}).join(",");
	}).join(",").split(",");
	if(!arr || !arr.length){
		//alert("game over");
		return;
	}
	arr.sort(function(){return Math.random() > 0.5;});
	var length = arr.length,
		index = 0;
	this.matrix = this.matrix.map(function(a){
		return a.map(function(b){
			if(b){
				b = parseInt(arr[index]);
				index++;
			}
			return b;
		});
	});
	this.checkIsNeedResort();
}
//提示
Matrix.prototype.tip = function(){
	//先筛选非空的坐标
	var arr = [];
	for(var i=0;i<this.matrix.length;i++){
		for(var j=0;j<this.matrix[0].length;j++){
			if(this.matrix[i][j]){
				arr.push({x:j,y:i});
			}
		}
	}
	if(!arr.length){
		return false;
	}

	var result = [];
	var last = -1;
	var self = this;
	function choose(){
		var index = parseInt(Math.random()*arr.length);
		if(index==last){
			choose();
			return;
		}else{
			last = index;
		}
		var coor1 = arr[index];
		var _arr = arr.filter(function(a,i){
			return self.matrix[a.y][a.x] == self.matrix[coor1.y][coor1.x] && i!=index;
		});
		for(var i=0;i<_arr.length;i++){
			var coor2 = _arr[i];
			var path = self.getPath(coor1,coor2);
			if(path){
				result = [coor1,coor2];
				break;
			}
		}
		if(result.length == 0){
			choose();
		}
	};
	choose();
	return result.length ? result : false;
}
//清空被消除的坐标
Matrix.prototype.remove = function(startPoint,endPoint,callback){
	this.matrix[startPoint.y][startPoint.x] = 0;
	this.matrix[endPoint.y][endPoint.x] = 0;
	if(callback) callback.call(this,startPoint,endPoint);
	this.length-=2;
//	var self = this;
//	setTimeout(function(){
//		if(self.length<=0){
//			alert("game over");
//		}else{
//			self.checkIsNeedResort();
//		}
//	},350);
	
}
//检测是否需要自动重列－－－无可消除的情况下
Matrix.prototype.checkIsNeedResort = function(callback){
	var result = this.tip();
	if(!result){
		console.log("需要重排");
		this.resort();
		if(callback) callback();
	}
	return !result;
}
//设置游戏模式
//消除2块之后  同行或者同列的其他块 向中间或者上下左右同方向移动
//@pattern  up:向上,donw:向下,left:向左,right:向右,vertical:垂直向内,transverse:横向向内,center:四周向内
Matrix.prototype.getPattern = function(){
	return ["up","down","left","right","vertical","transverse","center"][parseInt(Math.random()*7)];
}
Matrix.prototype.setPattern = function(pattern){
	this.pattern = pattern || this.getPattern();
}








