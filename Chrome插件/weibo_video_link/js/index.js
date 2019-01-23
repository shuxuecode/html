

function showLink(){
	var list = document.getElementsByTagName('video');
	if(list && list.length > 0){
		for(var i=0; i<list.length; i++){
			//alert(list[i].currentSrc)
			if(list[i].currentSrc){
				var aaa = document.createElement('a');
				aaa.innerHTML = '  <<获取地址>>  ';
				aaa.setAttribute("href", list[i].currentSrc);
				aaa.setAttribute("target", '_blank');
				aaa.setAttribute("download", '');
				
				var color = '#';
				for(var n=0; n<6; n++){
					color = color.concat(Math.round(Math.random() * 9));
				}

				aaa.setAttribute("style", 'display: inline-block; font-size:20px; border: 1px solid; padding: 10px; margin: 8px; background-color: ' + color + ';');
				
				list[i].parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(aaa);

			}
		}
	}
}	



function showGifLink(){

	var list = document.getElementsByClassName('WB_gif_video_box');
	if(list && list.length > 0){
		for(var i=0; i<list.length; i++){
			var parentNode = list[i].parentNode.parentNode;
			var bool = parentNode.hasAttribute('get-gif-img-url');
			if(parentNode && !bool){
				var str = parentNode.getAttribute('action-data');
				var index = str.indexOf('picSrc=');
				var endIndex = str.indexOf('&thumb_picSrc=')
				if(index > 0){
					
					var imgUrl = endIndex > 0 ? unescape(str.substring(index+7, endIndex)) : unescape(str.substring(index+7));
					var imgArray = imgUrl.split(',');

					

					for(var m=0, len=imgArray.length; m<len; m++){
						var url = 'https:' + imgArray[m];
						var textarea = document.createElement('textarea');
						textarea.value = url;

						textarea.setAttribute("style", "width: 100%;");
						
						var btn = document.createElement("button");
						btn.innerHTML = 'copy';
						btn.onclick=function(){
							// console.log(this)
							var tt = this.previousSibling;
							// console.log(tt)
							tt.select(); // 选中文本
							document.execCommand("copy"); // 执行浏览器复制命令
							this.innerHTML = '复制成功';
						}

						// aaa.setAttribute("style", 'display: inline-block; font-size:16px; border: 1px solid; padding: 10px; margin: 8px; background-color: ' + color + ';');
					
						var p = document.createElement('p');
						p.innerHTML = m+1;

						parentNode.appendChild(p);
						parentNode.appendChild(textarea);
						parentNode.appendChild(btn);
					}
					// 避免多个图片产生重复的信息
					parentNode.setAttribute('get-gif-img-url', '0');
					
				}
			
			}
		}
	}
}	





function keyDownEvent(event){
	// console.log(event)
	if(event.altKey && event.keyCode === 70){
		showLink();
	}
	if(event.altKey && event.keyCode === 82){
		showGifLink();
	}
}


if (document.addEventListener){
  document.addEventListener("keydown",keyDownEvent,false);
}else{
  document.attachEvent("onkeydown",keyDownEvent);
}

//alert("OK");
document.getElementsByClassName('WB_miniblog')[0].style.background = '#ccc'
