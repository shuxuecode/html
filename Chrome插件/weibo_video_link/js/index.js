
	



var list = document.getElementsByTagName('video');
if(list && list.length > 0){
	for(var i=0; i<list.length; i++){
		//alert(list[i].currentSrc)
		if(list[i].currentSrc){
			var aaa = document.createElement('a');
			aaa.innerHTML = '  <<获取地址>>  ';
			aaa.setAttribute("href", list[i].currentSrc);
			aaa.setAttribute("target", '_blank');
			
			list[i].parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(aaa);

		}
	}
}
