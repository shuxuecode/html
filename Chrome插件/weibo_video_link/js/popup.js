$(function() {

	chrome.tabs.executeScript(null, {  
        file: "js/index.js", 
		allFrames: true
    }); 
    window.close(); 
	

});

//chrome.tabs.executeScript(null,{code:'document.body.style.backgroundColor="red";'});
 