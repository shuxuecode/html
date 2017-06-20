
# 表格插件 BootstrapTable

#### 官网地址： [http://bootstrap-table.wenzhixin.net.cn/zh-cn/](http://bootstrap-table.wenzhixin.net.cn/zh-cn/)

#### Github地址： [https://github.com/wenzhixin/bootstrap-table](https://github.com/wenzhixin/bootstrap-table)


> 官网介绍：
> 基于 Bootstrap 的 jQuery 表格插件，通过简单的设置，就可以拥有强大的单选、多选、排序、分页，以及编辑、导出、过滤（扩展）等等的功能。


##### 主要功能

- 支持 Bootstrap 3 和 Bootstrap 2
- 自适应界面
- 固定表头
- 非常丰富的配置参数
- 直接通过标签使用
- 显示/隐藏列
- 显示/隐藏表头
- 通过 AJAX 获取 JSON 格式的数据
- 支持排序
- 格式化表格
- 支持单选或者多选
- 强大的分页功能
- 支持卡片视图
- 支持多语言
- 支持插件

## 优点

- 学习成本较低，配置简单，文档齐全
- 跟Bootstrap无缝衔接，整体风格一致，也便于二次开发
- 开发者活跃，Github定期维护




## 开始使用


- 1、在网页的head标签里插入下面的代码

```
<!-- 引入bootstrap样式 -->
<link href="https://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<!-- 引入bootstrap-table样式 -->
<link href="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.css" rel="stylesheet">

<!-- jquery -->
<script src="https://cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!-- bootstrap-table.min.js -->
<script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/bootstrap-table.min.js"></script>
<!-- 引入中文语言包 -->
<script src="https://cdn.bootcss.com/bootstrap-table/1.11.1/locale/bootstrap-table-zh-CN.min.js"></script>

```

- 2、在页面body代码块里定义表格展示的区域

```
<table id="table"></table>
```

- 3、编写JavaScript代码渲染表格

在网页代码最下面插入js脚本，内容如下：

```

$("#table").bootstrapTable({ // 对应table标签的id
      url: "<%=request.getContextPath()%>/api/getDataList.do", // 获取表格数据的url
      cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
      striped: true,  //表格显示条纹，默认为false
      pagination: true, // 在表格底部显示分页组件，默认false
      pageList: [10, 20], // 设置页面可以显示的数据条数
      pageSize: 10, // 页面数据条数
      pageNumber: 1, // 首页页码
      sidePagination: 'server', // 设置为服务器端分页
      queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

          return {
              pageSize: params.limit, // 每页要显示的数据条数
              offset: params.offset, // 每页显示数据的开始行号
              sort: params.sort, // 要排序的字段
              sortOrder: params.order, // 排序规则
              dataId: $("#dataId").val() // 额外添加的参数
          }
      },
      sortName: 'id', // 要排序的字段
      sortOrder: 'desc', // 排序规则
      columns: [
          {
              checkbox: true, // 显示一个勾选框
              align: 'center' // 居中显示
          }, {
              field: 'stdCode', // 返回json数据中的name
              title: '标准编号', // 表格表头显示文字
              align: 'center', // 左右居中
              valign: 'middle' // 上下居中
          }, {
              field: 'stdName',
              title: '标准名称',
              align: 'center',
              valign: 'middle'
          }, {
              field: 'calcMode',
              title: '计算方式',
              align: 'center',
              valign: 'middle',
              formatter: function (value, row, index){ // 单元格格式化函数
                  var text = '-';
                  if (value == 1) {
                      text = "固定";
                  } else if (value == 2) {
                      text = "阶梯";
                  } else if (value == 3) {
                      text = "区间";
                  } else if (value == 4) {
                      text = "金额";
                  }
                  return text;
              }
          }, {
              title: "操作",
              align: 'center',
              valign: 'middle',
              width: 160, // 定义列的宽度，单位为像素px
              formatter: function (value, row, index) {
                  return '<button class="btn btn-primary btn-sm" onclick="del(\'' + row.stdId + '\')">删除</button>';
              }
          }
      ],
      onLoadSuccess: function(){  //加载成功时执行
            console.info("加载成功");
      },
      onLoadError: function(){  //加载失败时执行
            console.info("加载数据失败");
      }

})


```

## 文档

### 表格参数

|  名称     |  标签  | 类型 |  默认  |  描述  |
| :------- | :----- | :----- | :---- | :---- |
| method    | data-method      | String | 'get' | 服务器数据的请求方式 'get' or 'post' |
| url	| data-url|String | undefined |服务器数据的加载地址 |
| undefinedText | data-undefined-text | String | '-' | 当数据为 undefined 时显示的字符 |
| striped | data-striped | Boolean | false | 设置为 true 会有隔行变色效果 |
| columns | - | Array | [] | 列配置项,详情请查看 列参数 表格. |
| data | - | Array | [] | 加载json格式的数据 |
| cache	 | data-cache | Boolean  |true  | 设置为 false 禁用 AJAX 数据缓存 |
| dataType | data-data-type | String | 'json' | 服务器返回的数据类型 |
| queryParams | data-query-params | Function | function(params) { <br/>return params; <br/>} | 请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，<br/>例如 toolbar 中的参数 <br/>如果 queryParamsType = 'limit' ,返回参数必须包含 <br/> limit, offset, search, sort, order <br/> 否则, 需要包含: pageSize, pageNumber, searchText, sortName, sortOrder.  <br/> 返回false将会终止请求 |
| pagination | data-pagination | Boolean | false | 设置为 true 会在表格底部显示分页条 |
| paginationLoop | data-pagination-loop | Boolean | true | 设置为 true 启用分页条无限循环的功能。 |
| sidePagination | data-side-pagination | String | 'client' | 设置在哪里进行分页，可选值为 'client' 或者 'server'。设置 'server'时，必须设置 服务器数据地址（url）或者重写ajax方法 |
| pageNumber | data-page-number | Number | 1 | 如果设置了分页，首页页码 |
| pageSize | data-page-size | Number | 10 | 如果设置了分页，页面数据条数 |
| pageList | data-page-list | Array | [10, 25, 50, 100, All] | 如果设置了分页，设置可供选择的页面数据条数。设置为All 则显示所有记录。 |
| search | data-search | Boolean | false | 是否启用搜索框 |
| searchOnEnterKey | data-search-on-enter-key | Boolean | false | 设置为 true时，按回车触发搜索方法，否则自动触发搜索方法 |
| showRefresh | data-show-refresh | Boolean | false | 是否显示 刷新按钮 |
| clickToSelect | data-click-to-select | Boolean | false	 | 设置true 将在点击行时，自动选择rediobox 和 checkbox |
| singleSelect | data-single-select | Boolean | false | 设置True 将禁止多选 |
|  |  |  |  |  |





### 列参数

| Name     | Attribute    | Type  | Default  | Description     |
| :------------- | :------------- | :------------- | :------------- | :------------- |
| radio      | data-radio       | Boolean     | false      | True to show a radio. The radio column has fixed width.      |
| checkbox | data-checkbox | Boolean | false |True to show a checkbox. The checkbox column has fixed width.  |
| field  | data-field | String | undefined |The column field name.  |
| title | data-title	 | String | undefined | The column title text. |
| align | data-align | String | undefined | Indicate how to align the column data. 'left', 'right', 'center' can be used. |
| halign | data-halign | String | undefined	 | Indicate how to align the table header. 'left', 'right', 'center' can be used. |
| valign | data-valign | String | undefined | Indicate how to align the cell data. 'top', 'middle', 'bottom' can be used. |
| width | data-width	 | Number {Pixels or Percentage} | undefined | The width of column. If not defined, the width will auto expand to fit its contents. Also you can add '%' to your number and the bootstrapTable will use the percentage unit, otherwise, you can add or no the 'px' to your number and then the bootstrapTable will use the pixels |
| visible | data-visible | Boolean | true | False to hide the columns item. |
| formatter | data-formatter | Function	 | undefined | The context (this) is the column Object.
The cell formatter function, take three parameters:
value: the field value.
row: the row record data.
index: the row index. |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |



### 事件

| Option 事件  | jQuery 事件  | 参数  | 描述  |
| :----- | :------ | :------ | :------ |
| onClickRow   | click-row.bs.table       | row, $element | 当用户点击某一行的时候触发，参数包括：<br/> row：点击行的数据， <br/> $element：tr 元素， <br/> field：点击列的 field 名称。 |
| onDblClickRow | dbl-click-row.bs.table | row, $element | 当用户双击某一行的时候触发，参数包括：
row：点击行的数据，
$element：tr 元素，
field：点击列的 field 名称。 |
| onClickCell | click-cell.bs.table | field, value, row, $element | 当用户点击某一列的时候触发，参数包括：
field：点击列的 field 名称，
value：点击列的 value 值，
row：点击列的整行数据，
$element：td 元素。 |
| onDblClickCell | dbl-click-cell.bs.table | field, value, row, $element | 当用户双击某一列的时候触发，参数包括：
field：点击列的 field 名称，
value：点击列的 value 值，
row：点击列的整行数据，
$element：td 元素。 |
|  |  |  |  |



### 方法

使用方法的语法：$('#table').bootstrapTable('method', parameter);。


| 名称     | 参数     |  描述 |
| :------------- | :------------- | :------------- |
| getOptions      | none      | 返回表格的 Options。 |
| getSelections | none | 返回所选的行，当没有选择任何行的时候返回一个空数组。 |
| getAllSelections | none | 返回所有选择的行，包括搜索过滤前的，当没有选择任何行的时候返回一个空数组。 |
| load | data | 加载数据到表格中，旧数据会被替换。 |
| append | data | 添加数据到表格在现有数据之后。 |
| prepend | data | 插入数据到表格在现有数据之前。 |
| insertRow | params | 插入新行，参数包括：
index: 要插入的行的 index。
row: 行的数据，Object 对象。 |
| refresh | params | Refresh the remote server data, you can set {silent: true} to refresh the data silently, and set {url: newUrl} to change the url. To supply query params specific to this request, set {query: {foo: 'bar'}} |
| showLoading | none | Show loading status. |
|hideLoading  | none | Hide loading status. |
| check | index | Check a row, the row index start with 0. |
| uncheck | index | Uncheck a row, the row index start with 0. |
| destroy | none |  Destroy the bootstrap table. |
| selectPage | page | 跳到指定的页。 |
| prevPage | none | 跳到上一页。 |
| nextPage | none | 跳到下一页。  |
|  |  |  |
|  |  |  |
|  |  |  |






--
-
-
-
-
--
-
--
-
--
-
-
-
-
-
-

----------------------
