
```
<%--弹出层插件--%>
<script src="${ctx}/vender/Layui/layer-v3.0.1/layer/layer.js" type="text/javascript"></script>


function loading(msg) {
    var index = layer.msg(msg, {
        icon : 16,
        shade : [ 0.5, '#f5f5f5' ],
        offset:['200px'],
        skin:'loading',
        scrollbar : false,
        time : 800000
    });
    return index;
}


var layerIndex = loading('正在保存...');

var layerIndex = loading('正在删除，请稍候...');

var layerIndex = loading('正在加载，请稍候...');

layer.close(layerIndex);

layer.alert("保存失败", { offset: '200px', title: false })

,
onLoadError: function(){  //加载失败时执行
    layer.alert("加载数据失败", { offset: '200px', title: false })
}

```