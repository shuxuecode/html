function Draw(config){
	var canvas = document.getElementById(config.id);
	this.cxt = canvas.getContext("2d");
	this.step = config.step;
	this.col = config.col;
	this.row = config.row;
	this.matrix = config.matrix;
	this.__dir = config.dir;
	this.speed = config.speed || 300;
}
Draw.prototype.clear = function(x,y,width,height){
	this.cxt.clearRect(x,y,width,height);
}
//绘制数据
Draw.prototype.drawMatrix = function(matrix){
	var self = this;
	this.clear(0,0,848,474);
	self.matrix.map(function(a, y) {
		a.map(function(b, x) {
			if (b) {
				var img = new Image();
				var src = self.__dir + b + ".png";
				img.src = src;
				img.onload = function() {
					self.cxt.drawImage(img, x * self.step+x+1, y * self.step+y+1, self.step, self.step);
				};
			}
		});
	});
}
//绘制块
Draw.prototype.drawBlock = function(x,y,color){
	this.cxt.fillStyle = color || '#d80049';
	this.cxt.fillRect(x * this.step+x+17, y * this.step+y+17, 10, 10);
}
Draw.prototype.drawline = function(path,callback){
	var self = this;
	path.map(function(a){
		self.clear(a.x * self.step+a.x+1,a.y * self.step+a.y+1,self.step,self.step);
		self.drawBlock(a.x,a.y);
	});
	//console.log(callback);
	if(callback){
		setTimeout(function(){
			callback.call(self,path);
		},this.speed)
	}
}
Draw.prototype.clearline = function(path,callback){
	var self = this;
	//console.log(self);
	path.map(function(a){
		//self.drawBlock(a.x,a.y);
		self.clear(a.x * self.step+a.x+1,a.y * self.step+a.y+1,self.step,self.step);
	});
}
Draw.prototype.dischoose = function(point){
	var self = this,x = point.x,y = point.y;
	var img = new Image();
	var src = self.__dir + self.matrix[y][x] + ".png";
	img.src = src;
	img.onload = function() {
		self.cxt.drawImage(img, x * self.step+x+1, y * self.step+y+1, self.step, self.step);
	};
}
Draw.prototype.choose = function(point,color){
	var self = this,x = point.x,y = point.y;
	var img = new Image();
	var src = self.__dir + self.matrix[y][x] + ".png";
	img.src = src;
	img.onload = function() {
		self.clear(x * self.step+x+1,y * self.step+y+1,self.step,self.step);
		self.cxt.fillStyle = color || '#d80049';
		self.cxt.fillRect(x * self.step+x+1, y * this.step+y+1, self.step,self.step);
		setTimeout(function(){
			self.cxt.drawImage(img, x * self.step+x+4, y * self.step+y+4, self.step-6, self.step-6);
		},10);
	};
}
Draw.prototype.drawImage = function(point){
	var self = this,x = point.x,y = point.y;
	var img = new Image();
	var src = self.__dir + self.matrix[y][x] + ".png";
	img.src = src;
	img.onload = function() {
		self.cxt.drawImage(img, x * self.step+x+1, y * self.step+y+1, self.step, self.step);
	};
}