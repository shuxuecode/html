## 简介

Viewer.js 是一款强大的图片查看器，像门户网站一般都会有各自的图片查看器，如果您正需要一款强大的图片查看器，也许 Viewer.js 是一个很好的选择。Viewer.js 有以下特点：

- 支持移动设备触摸事件
- 支持响应式
- 支持放大/缩小
- 支持旋转（类似微博的图片旋转）
- 支持水平/垂直翻转
- 支持图片移动
- 支持键盘
- 支持全屏幻灯片模式（可做屏保）
- 支持缩略图
- 支持标题显示
- 支持多种自定义事件

Viewer.js 提供了纯 JS 版本和 jQuery 版本，您可以任意选择。

## 浏览器兼容

注意：JS 版本兼容 IE9+，jQuery 版本兼容 IE8+。

## 使用方法

1、引入文件

JS 版本：

	<link rel="stylesheet" href="css/viewer.min.css">
	<script src="js/viewer.min.js"></script>
jQuery 版本：

	<link rel="stylesheet" href="css/viewer.min.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/viewer.min.js"></script>
注意：JS 版本和 jQuery 版本名字虽然一样，但代码不一样，不能通用，请到 github 上下载需要的版本。

2、HTML

	<ul id="dowebok">
    	<li><img src="img/tibet-1.jpg" alt="图片1"></li>
    	<li><img src="img/tibet-2.jpg" alt="图片2"></li>
    	<li><img src="img/tibet-3.jpg" alt="图片3"></li>
    	<li><img src="img/tibet-4.jpg" alt="图片4"></li>
    	<li><img src="img/tibet-5.jpg" alt="图片5"></li>
    	<li><img src="img/tibet-6.jpg" alt="图片6"></li>
	</ul>
3、JavaScript

JS 版本：

	var viewer = new Viewer(document.getElementById('dowebok'));
jQuery 版本：

	$('#dowebok').viewer();


## 配置

<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>inline</td>
<td>布尔值</td>
<td>false</td>
<td>启用 inline 模式</td>
</tr>
<tr>
<td>button</td>
<td>布尔值</td>
<td>true</td>
<td>显示右上角关闭按钮（jQuery 版本无效）</td>
</tr>
<tr>
<td>navbar</td>
<td>布尔值/整型</td>
<td>true</td>
<td>显示缩略图导航</td>
</tr>
<tr>
<td>title</td>
<td>布尔值/整型</td>
<td>true</td>
<td>显示当前图片的标题（现实 alt 属性及图片尺寸）</td>
</tr>
<tr>
<td>toolbar</td>
<td>布尔值/整型</td>
<td>true</td>
<td>显示工具栏</td>
</tr>
<tr>
<td>tooltip</td>
<td>布尔值</td>
<td>true</td>
<td>显示缩放百分比</td>
</tr>
<tr>
<td>movable</td>
<td>布尔值</td>
<td>true</td>
<td>图片是否可移动</td>
</tr>
<tr>
<td>zoomable</td>
<td>布尔值</td>
<td>true</td>
<td>图片是否可缩放</td>
</tr>
<tr>
<td>rotatable</td>
<td>布尔值</td>
<td>true</td>
<td>图片是否可旋转</td>
</tr>
<tr>
<td>scalable</td>
<td>布尔值</td>
<td>true</td>
<td>图片是否可翻转</td>
</tr>
<tr>
<td>transition</td>
<td>布尔值</td>
<td>true</td>
<td>使用 CSS3 过度</td>
</tr>
<tr>
<td>fullscreen</td>
<td>布尔值</td>
<td>true</td>
<td>播放时是否全屏</td>
</tr>
<tr>
<td>keyboard</td>
<td>布尔值</td>
<td>true</td>
<td>是否支持键盘</td>
</tr>
<tr>
<td>interval</td>
<td>整型</td>
<td>5000</td>
<td>播放间隔，单位为毫秒</td>
</tr>
<tr>
<td>zoomRatio</td>
<td>浮点型</td>
<td>0.1</td>
<td>鼠标滚动时的缩放比例</td>
</tr>
<tr>
<td>minZoomRatio</td>
<td>浮点型</td>
<td>0.01</td>
<td>最小缩放比例</td>
</tr>
<tr>
<td>maxZoomRatio</td>
<td>数字</td>
<td>100</td>
<td>最大缩放比例</td>
</tr>
<tr>
<td>zIndex</td>
<td>数字</td>
<td>2015</td>
<td>设置图片查看器 modal 模式时的 z-index</td>
</tr>
<tr>
<td>zIndexInline</td>
<td>数字</td>
<td>0</td>
<td>设置图片查看器 inline 模式时的 z-index</td>
</tr>
<tr>
<td>url</td>
<td>字符串/函数</td>
<td>src</td>
<td>设置大图片的 url</td>
</tr>
<tr>
<td>build</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>built</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>show</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>shown</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>hide</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>hidden</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>view</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
<tr>
<td>viewed</td>
<td>函数</td>
<td>null</td>
<td>回调函数，具体查看演示</td>
</tr>
</tbody>
</table>



----

初始化插件

在页面DOM元素加载完毕之后，可以通过下面的方法来初始化该图片查看器插件。
// View one image
	$('.image').viewer();
// View some images
	$('.images').viewer();   
复制代码
键盘控制

在模态窗口模式下，可以使用键盘来控制查看图片：
Esc：退出全屏并停止播放。
←：查看前一张图片。
→：查看下一张图片。
↑：放大图片。
↓：缩小图片。
Ctrl + 0：缩小到初始大小。
Ctrl + 1：放大到自然尺寸。
配置参数

你可以通过$().viewer(options)来设置这个图片查看器的参数。如果你要修改全局配置参数，你需要使用$.fn.viewer.setDefaults(options)。
inline：类型：Boolean，默认值：false。使用内联模式来查看图片。
button：类型：Boolean，默认值：true。在图片查看器的右上角显示按钮。
navbar：类型：Boolean，默认值：true。显示导航条。
title：类型：Boolean，默认值：true。显示图片标题。标题来自图片的alt属性或从URL解析的图片名称。
toolbar：类型：Boolean，默认值：true。显示工具栏。
tooltip：类型：Boolean，默认值：true。在放大缩小图片的时候显示图片的百分比比例。
movable：类型：Boolean，默认值：true。图片是否可以移动。
zoomable：类型：Boolean，默认值：true。图片是否可以放大缩小。
rotatable：类型：Boolean，默认值：true。图片是否可以旋转。
scalable：类型：Boolean，默认值：true。图片是否可以翻转。
transition：类型：Boolean，默认值：true。是否为某些指定的元素使用CSS3 Transition效果。
fullscreen：类型：Boolean，默认值：true。是否允许全屏模式。该功能需要浏览器支持Full Screen API。
keyboard：类型：Boolean，默认值：true。是否可以使用键盘控制。
interval：类型：Number，默认值：5000。自动播放时图片的切换时间间隔。
zoomRatio：类型：Number，默认值：0.1。在使用鼠标缩放图片时的缩放比例。
minZoomRatio：类型：Number，默认值：0.01。图片缩小的最小比例。
maxZoomRatio：类型：Number，默认值：100。图片放大的最小比例。
zIndex：类型：Number，默认值：2015。定义图片查看器模态窗口的CSS z-index属性的值。
zIndexInline：类型：Number，默认值：0。定义图片查看器在内联模式中CSS z-index属性的值。
url：类型：String 或 Function，默认值：'src'。定义原始图片的URL地址。
build：类型：Function，默认值：null。"build.viewer"事件的快捷方式。
built：类型：Function，默认值：null。"built.viewer"事件的快捷方式。
show：类型：Function，默认值：null。"show.viewer"事件的快捷方式。
shown：类型：Function，默认值：null。"shown.viewer"事件的快捷方式。
hide：类型：Function，默认值：null。"hide.viewer"事件的快捷方式。
hidden：类型：Function，默认值：null。"hidden.viewer"事件的快捷方式。

方法

由于该图片查看器插件使用的是异步加载图片的方式，所以你需要在shown(模态窗口模式)或built(内联模式)之后才能调用下面的方法，除了模态窗口模式的show方法和destroy方法之外。
// Modal mode
$().viewer({
  shown: function () {
    $().viewer('method', argument1, , argument2, ..., argumentN);
  }
}
// Inline mode
$().viewer({
  built: function () {
    $().viewer('method', argument1, , argument2, ..., argumentN);
  }
}            
复制代码
show()：显示图片查看器。只在模态窗口模式中有效。
hide()：隐藏图片查看器。只在模态窗口模式中有效。
view([index])：
index (optional)：

 类型：Number
 默认值：0
 在查看的图片的index
通过图片的index来查看某张图片。
$().viewer('view', 1); // 查看第二张图片   
复制代码
prev()：查看前一张图片。
next()：查看下一张图片。
move(offsetX[, offsetY])：移动图片。
offsetX：

 类型：Number
 默认值：0
 水平方向上移动的距离，单位像素。
offsetY(optional)：

 类型：Number
 垂直方向上移动的距离，单位像素。
 如果没有提供，默认值是offsetX。
$().viewer('move', 1);
$().viewer('move', -1, 0); // 向左移动图片
$().viewer('move', 1, 0);  // 向有移动图片
$().viewer('move', 0, -1); // 向上移动图片
$().viewer('move', 0, 1);  // 向下移动图片   
复制代码
zoom(ratio[, hasTooltip])：缩放图片。
ratio：
类型：Number
Zoom in(放大)：需要一个正数(ratio > 0)。
Zoom out(缩小)：需要一个负数(ratio < 0)
hasTooltip (optional)： 

类型：Boolean
默认值：false
显示tooltip。
$().viewer('zoom', 0.1);
$().viewer('zoom', -0.1);   
复制代码
zoomTo(ratio[, hasTooltip])：缩放图片到指定的比例。
ratio：
类型：Number
需要一个正数(ratio > 0)
hasTooltip (optional)：
类型：Boolean
默认值：false
显示tooltip。
$().viewer('zoomTo', 0); // Zoom to zero size (0%)
$().viewer('zoomTo', 1); // Zoom to natural size (100%)   
复制代码
rotate(degree)：旋转图片。
degree：
类型：Number
向右旋转需要一个正数(ratio > 0)
向左旋转需要一个负数(ratio < 0)
该方法需要浏览器支持CSS3 2D Transforms(IE9+)。
$().viewer('rotate', 90);
$().viewer('rotate', -90);   
复制代码
rotateTo(degree)：将图片旋转到指定的角度。
degree： 类型：Number 该方法需要浏览器支持CSS3 2D Transforms(IE9+)。
$().viewer('rotateTo', 0); // 将图片重置到0度
$().viewer('rotateTo', 360); // 将图片旋转一周   
复制代码
scale(scaleX[, scaleY])：翻转图片。
scaleX：
类型：Number
默认值：1
图片横坐标方向上的缩放比例。
当值为1时不做任何事情。
scaleY：(optional
类型：Number
图片纵坐标方向上的缩放比例。
如果未指定，默认值为scaleX。
该方法需要浏览器支持CSS3 2D Transforms(IE9+)。
$().viewer('scale', -1); // 在垂直和水平方向上翻转图片
$().viewer('scale', -1, 1); // 水平翻转
$().viewer('scale', 1, -1); // 垂直翻转
复制代码
scaleX(scaleX)：水平翻转图片。
scaleX：
类型：Number
默认值：1
图片横坐标方向上的缩放比例。
当值为1时不做任何事情。
该方法需要浏览器支持CSS3 2D Transforms(IE9+)。
$().viewer('scaleX', -1); // 水平翻转
复制代码
scaleY(scaleY)：垂直翻转。
scaleY：
类型：Number
默认值：1
图片纵坐标方向上的缩放比例。
当值为1时不做任何事情。
该方法需要浏览器支持CSS3 2D Transforms(IE9+)。
$().viewer('scaleY', -1); // 水平翻转
复制代码
play()：播放图片。
stop()：停止播放。
full()：进入模态窗口模式。仅在内联模式中有效。
exit()：退出模态窗口模式。仅在内联模式中有效。
tooltip()：以百分比显示当前图片的比例。需要tooltip参数设置为true。
toggle()：在原始尺寸和当前尺寸之间切换图片尺寸。
reset()：重置图片到元素状态。
destroy()：销毁图片查看器实例。
事件

build.viewer：当图片查看器实例开始创建时触发。
built.viewer：当图片查看器实例被创建之后触发。
show.viewer：当图片查看器元素开始显示时触发。仅在模态窗口模式有效。
shown.viewer：当图片查看器元素显示之后触发。仅在模态窗口模式有效。
hide.viewer：当图片查看器元素开始隐藏时触发。仅在模态窗口模式有效。
hidden.viewer：当图片查看器元素隐藏之后触发。仅在模态窗口模式有效。
No conflict

如果你使用了和这个图片查看器具有相同名称空间的其它插件，可以通过$.fn.viewer.noConflict方法来恢复它。
<script src="other-plugin.js"></script>
<script src="viewer.js"></script>
<script>
  $.fn.viewer.noConflict();
  // Code that uses other plugin's "$().viewer" can follow here.
</script>   

浏览器兼容

Chrome (latest 2)
Firefox (latest 2)
Internet Explorer 8+
Opera (latest 2)
Safari (latest 2)
