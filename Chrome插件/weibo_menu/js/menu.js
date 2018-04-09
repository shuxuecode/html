/*
function genericOnClick(info, tab) {
	alert(info.linkUrl);
}
function selectionOnClick(info, tab) {
	alert(info.selectionText);
}
var link = chrome.contextMenus.create({
	"title": "链接地址",
	"contexts": ["link"],
	"onclick": genericOnClick
});
var selection = chrome.contextMenus.create({
	"title": "选中文字",
	"contexts": ["selection"],
	"onclick": selectionOnClick
});
*/

/*
(function(){
	chrome.browserAction.onClicked.addListener(function(tab) {
		// 扩展向内容脚本发送消息
		chrome.tabs.sendMessage(tab.id,{
			greeting: "hello to content script!"
		}, function(response) {
			console.log(response.farewell);
		});
	});
})();
*/

chrome.browserAction.onClicked.addListener(function(tab) {

	alert(111);

	var list = document.getElementsByTagName('video');
	if(list && list.length > 0){
		for(var i=0; i<list.length; i++){
			alert(list[i].currentSrc)
		}
	}
	
	
	

});





/*

var p = document.createElement('a');
p.innerHTML = 'zhao';


document.getElementsByTagName('video')[1].parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(p)

img.setAttribute("id", "newImg");

*/