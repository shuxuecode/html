# 主要整理了一些前端的代码

## 测试cmd获取时间
todo


## js获取图片尺寸

- jquery

```
$("<img/>").attr("src", "图片地址").load(function() {

	console.log(this.width)
	console.log(this.height)
});


```

- HTML5 FileReader


```
var reader = new FileReader();
reader.onload = function(e) {
    console.log(this)
    //加载图片获取图片真实宽度和高度
    var image = new Image();
    image.onload=function(){
		var width = image.width;
		var height = image.height;
		console.log(image)
		console.log(width)
		console.log(height)
    }
    image.src= e.target.result;
}

var file = document.getElementById('fileId').files[0];
reader.readAsDataURL(file)
```