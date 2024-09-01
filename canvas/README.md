# CANVAS

## 注意最好在一开始的时候就给canvas设置好其宽高
（若不设定宽高，浏览器会默认设置canvas大小为宽300、高100像素），而且不能使用css来设置（会被拉伸），建议直接写于canvas标签内部：

```
<canvas id="myCanvas" width="200" height="200"></canvas>
也可以在js脚本中设置：
<canvas id="myCanvas"></canvas>
<script>

var c = document.getElementById("myCanvas");
c.width=200;
c.height=200;

</script>
```

### ctx.fillStyle="#FF0000";

设置fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）。

## ctx.fillRect(0,0,150,75);

fillRect(x,y,width,height) 方法定义了矩形当前的填充方式。

## Canvas 坐标
> canvas 是一个二维网格。
canvas 的左上角坐标为 (0,0)
上面的 fillRect 方法拥有参数 (0,0,150,75)。
意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。


## Canvas - 路径

在Canvas上画线，我们将使用以下两种方法：

- moveTo(x,y) 定义线条开始坐标
- lineTo(x,y) 定义线条结束坐标

绘制线条我们必须使用到 "ink" 的方法，就像stroke().

```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.strokeStyle = "red";    //设定描边颜色为红色
ctx.stroke();
```



## 绘制圆形  arc(x,y,r,start,stop)

```
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
```
画布的左上角坐标为0,0
 x：圆心在x轴上的坐标
 y：圆心在y轴上的坐标
 r：半径长度
 start：起始角度，以弧度表示，圆心平行的右端为0度
 stop：结束角度，以弧度表示
注意：Math.PI表示180°，画圆的方向是顺时针

## Canvas - 文本

使用 canvas 绘制文本，重要的属性和方法如下：
- font - 定义字体
- fillText(text,x,y) - 在 canvas 上绘制实心的文本
- strokeText(text,x,y) - 在 canvas 上绘制空心的文本

```
ctx.font="30px Arial";
ctx.fillText("Hello World",10,50);
```
```
ctx.font="30px Arial";
ctx.strokeText("Hello World",10,50);
```

## Canvas - 渐变

渐变可以填充在矩形, 圆形, 线条, 文本等等, 各种形状可以自己定义不同的颜色。
以下有两种不同的方式来设置Canvas渐变：
- createLinearGradient(x,y,x1,y1) - 创建线条渐变
- createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
当我们使用渐变对象，必须使用两种或两种以上的停止颜色。
addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
使用渐变，设置fillStyle或strokeStyle的值为 渐变，然后绘制形状，如矩形，文本，或一条线。

> 制作径向渐变时 context.createRadialGradient(x , y , r , x1 , y1 , r1) 括号内参数含义如下:
 x: 渐变的开始圆的 x 坐标
 y: 渐变的开始圆的 y 坐标
 r: 开始圆的半径
 x1: 渐变的结束圆的 x 坐标
 y1: 渐变的结束圆的 y 坐标
 r1: 结束圆的半径
(x, y, r) (x1,y1,r1)分别可以代表一个圆形的特征, 个人感觉通常情况下(x,y) 和 (x1,y1)简单地相同即可(即同心圆), 这样做出来的径向渐变已经十分美观,符合大众审美观。


## Canvas - 图像
把一幅图像放置到画布上, 使用以下方法:
drawImage(image,x,y)



---
---
---

## canvas提供了三种方法绘制矩形：

- fillRect(x, y, width, height)
绘制一个填充的矩形
- strokeRect(x, y, width, height)
绘制一个矩形的边框
- clearRect(x, y, width, height)
清除指定矩形区域，让清除部分完全透明。

## 绘制路径

beginPath()
新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
closePath()
闭合路径之后图形绘制命令又重新指向到上下文中。
stroke()
通过线条来绘制图形轮廓。
fill()
通过填充路径的内容区域生成实心的图形。






---
