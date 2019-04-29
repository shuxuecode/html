$(document).ready(function() {
	initFormInfo();;
});



function SetFont(size) {
	var divBody = document.getElementById("wb_content");
	if(!divBody) {
		return;
	}
	divBody.style.fontSize = size + "px";
	var divChildBody = divBody.childNodes;
	for(var i = 0; i < divChildBody.length; i++) {
		if(divChildBody[i].nodeType == 1) {
			//leadText[i].style.fontSize = size-3 + "px";
			divChildBody[i].style.fontSize = size + "px";
			//document.getElementById(size).className="curt";
		}
	}
}

function initFormInfo() {
	

	var swiper1 = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
	    		delay: 3000,//1秒切换一次
	  	},
	});

	var swiper2= new Swiper('.swiper-container2', {
		autoplay: {
	    		delay: 3000,//3秒切换一次
	  	},
	});

	var swiper3 = new Swiper('.swiper-container3', {
		autoplay: {
	    		delay: 5000,//5秒切换一次
	  	},
	});
	
	var swiper3 = new Swiper('.swiper-container3', {
		autoplay: {
	    		delay: 5000,//5秒切换一次
	  	},
	});

	var index = 0;
	var timer;
	var len = $("#box ul li").length;

	for(i = 0; i < len; i++) {
		var arr = [];
		arr.push("<ol>")
		for(i = 1; i <= len; i++) {
			arr.push("<li>" + "</li>");
		};
		arr.push("</ol>");
		var _IndexBtnHtml = $(arr.join(''));
		$("#box").append(_IndexBtnHtml);
	}

	$("#box ol li").click(function() {
		index = $("#box ol li").index(this);
		showPic(index);
	}).eq(0).click();
	
	
	$(".setFont").click(function() {
		$(".setFont").removeClass("setFontRed");
		$(this).addClass("setFontRed");
	});
	
	$('#pd_dx li .i_1').click(function() {
		$(this).siblings().removeClass("ao");
		$(this).addClass("ao");
	});
	
	$('#dxt li .i_2').click(function() {
//		$(this).addClass("ad");
		if($(this).hasClass("ad")){
			$(this).removeClass("ad")
		}else{
			$(this).addClass("ad")
		}
	});
	
	$('.commit').click(function() {
		alert("已提交！")
	});
	
	
	$('#subject_01').click(function() {
		$(".overLayer").show();
		$(".info").show();
	});
	
	$('#info_btn_Submission').click(function() {
		$(".overLayer").hide();
		$(".info").hide();
		$("#top_news").hide();
		$(".main").show();

	});
	
	
	

	$("#box").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			showPic(index);
			index++;
			if(index == len) {
				index = 0;
			}
		}, 3000)
	}).trigger("mouseleave");

	function showPic(index) {
		$("#box ol li").removeClass("active").eq(index).addClass("active");
		$("#box ul li").eq(index).stop(true, true).fadeIn(600).siblings("li").fadeOut(600);
	};
	

	


}