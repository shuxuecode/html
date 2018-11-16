

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
			if(parentNode){
				var str = parentNode.getAttribute('action-data');
				var index = str.indexOf('picSrc=');
				if(index > 0){
					var url = 'https:' + unescape(str.substring(index+7));
					var aaa = document.createElement('p');
					aaa.innerHTML = url;
					
					var color = '#';
					for(var n=0; n<6; n++){
						color = color.concat(Math.round(Math.random() * 9));
					}

					// aaa.setAttribute("style", 'display: inline-block; font-size:16px; border: 1px solid; padding: 10px; margin: 8px; background-color: ' + color + ';');
				
					parentNode.appendChild(aaa);
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

alert("OK");
