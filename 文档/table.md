
页面中table宽度设置width="600px"之后，宽度仍然不是固定的，文字太长后不换行，把table都撑变形了。


table-layout:fixed ; 
设置了这个属性，其余所有td都是相同的宽度。 

table{
		table-layout:fixed ; 
		word-wrap:break-word;
	}


在 td 里面 加上 style="word-wrap:break-word;" 自动换行就好了，如果不想换行，可以将超出内容设为隐藏，并且用省略号代替： 

在td上面加 
overflow:hidden; 
white-space:nowrap; 