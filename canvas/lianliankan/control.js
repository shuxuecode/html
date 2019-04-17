function control(config){
	this._Matrix = config._Matrix;
	this.draw = config.draw;
	this.step = config.step;
	this.col = config.col;
	this.row = config.row;
	this.speed = config.draw.speed,
	this.times = config.times;
	this.resorttimes = config.times;
	this.tiptimes = config.times;
	this.boomtimes = config.times;
	this.bgcanvas = document.getElementById(config.id);
	this.bgctx = this.bgcanvas.getContext("2d");
	this.tiped = false;
	this.tips = null;
	this.startPoint = null;
	this.endPoint = null;
	this.time = config.time || 90000;
	this.over = false;
	this.listen = this.time*1;
	this.init();
}
//control.prototype
control.prototype.init = function(){
	this.drawbg();
	this.draw.drawMatrix();
	this.countdown();
}
control.prototype.watch = function(callback){
	this.watchhandle = callback;
}
control.prototype.countdown = function(){
	var self = this;
	self.timer = setInterval(function(){
		self.listen -=10;
		if(self.listen<=0){
			self.listen = 0;
		}
		self.watchhandle(self.listen/self.time*100);
		if(!self.listen){
			self.gameover();
		}
	},10);
}
control.prototype.gameover = function(){
	this.stop();
	alert("gameover");
	this.over = true;
}
control.prototype.parse = function(){
	if(this.parsed){
		this.parsed = false;
		this.over = false;
		this.countdown();
	}else{
		this.stop();
		this.over = true;
		this.parsed = true;
	}
}

control.prototype.stop = function(){
	clearInterval(this.timer);
	this.timer = null;
}
control.prototype.drawbg = function(){
	for(var i=0;i<this.row;i++){
		for(var j=0;j<this.col;j++){
			this.bgctx.fillStyle = "#e4f000";
			this.bgctx.fillRect(j * this.step+j+1, i * this.step+i+1, this.step, this.step);
		}
	}
}
control.prototype.removepoints = function(startPoint,endPoint){
	if(this.sleeping) return;
	var self = this;
	var path = this._Matrix.getPath(startPoint,endPoint);
	this._Matrix.remove(startPoint,endPoint,function(){
		self.draw.drawline(path,self.draw.clearline);
		self.listen += 500;
		self.sleep();
		setTimeout(function(){
			if(self._Matrix.length<=0){
				self.gameover();
			}
		},self.speed);
	});
}
control.prototype.sleep = function(){
	var self = this;
	self.sleeping = true;
	setTimeout(function(){self.sleeping = false;},self.draw.speed);
}
control.prototype.resort = function(){
	if(this.over) return;
	if(!this.resorttimes)return;
	this.resorttimes--;
	this._Matrix.resort();
	this.draw.matrix = this._Matrix.matrix;
	this.draw.drawMatrix();
}
control.prototype.gettips = function(){
	if(this.over) return;
	if(!this.tiptimes)return;
	this.tiptimes--;
	if(this.startPoint){
		this.draw.dischoose(this.startPoint);	
	}
	if (this.tiped) {
		this.tiped = false;
		this.draw.dischoose(this.tips[0]);
		this.draw.dischoose(this.tips[1]);
	}
	this.tips = this._Matrix.tip();
	if (this.tips) {
		this.tiped = true;
		this.draw.choose(this.tips[0], "#f00");
		this.draw.choose(this.tips[1], "#f00");
	} else {
		this.resort();
	}
}
control.prototype.boom = function(){
	if(this.over) return;
	if(!this.boomtimes)return;
	this.boomtimes--;
	if (this.tiped) {
		this.tiped = false;
		this.removepoints(this.tips[0], this.tips[1]);
		this.tips = null;
		return;
	}
	var result = this._Matrix.tip();
	if (result) {
		this.removepoints(result[0], result[1]);
	} else {
		this.resort();
	}
}
control.prototype.restart = function(){
	var matrix = MAP_ARR[parseInt(Math.random()*MAP_ARR.length)];
	this._Matrix.init(matrix);
	this.draw.matrix = this._Matrix.matrix;
	this.draw.drawMatrix();
	this.stop();
	this.listen = this.time * 1;
	this.over = false;
	this.resorttimes = this.times;
	this.tiptimes = this.times;
	this.boomtimes = this.times;
	this.parsed = false;
	this.countdown();
}
control.prototype.click = function(_x,_y){
	if(this.over) return;
	if (this._Matrix.matrix[_y][_x]) {
		if (this.tiped) {
			this.tiped = false;
			this.draw.dischoose(this.tips[0]);
			this.draw.dischoose(this.tips[1]);
		}
		var coor = {
			x: _x,
			y: _y
		};
		if (this.startPoint && this.startPoint.x == _x && this.startPoint.y == _y) {
			this.draw.dischoose(this.startPoint);
			this.startPoint = null;
			return;
		};
		if (this.startPoint) {
			this.endPoint = coor;
			if (this._Matrix.matrix[_y][_x] !== this._Matrix.matrix[this.startPoint.y][this.startPoint.x]) {
				this.draw.dischoose(this.startPoint);
				this.startPoint = this.endPoint;
				this.draw.choose(this.startPoint);
				this.endPoint = null;
				return;
			}
			var path = this._Matrix.getPath(this.startPoint, this.endPoint);
			if (Object.prototype.toString.call(path) == "[object Array]") {
				var self = this;
				this._Matrix.remove(this.startPoint, this.endPoint, function() {
					self.draw.drawline(path, self.draw.clearline);
					setTimeout(function(){
						if(self._Matrix.length<=0){
							self.gameover();
						}
					},self.speed);
				});
			} else {
				this.draw.dischoose(this.startPoint);
			}
			this.startPoint = null;
			this.endPoint = null;
		} else {
			this.startPoint = coor;
			this.draw.choose(this.startPoint);
		}
	}
}




