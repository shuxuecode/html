// ==UserScript==
// @name         微博视频下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://weibo.com/*
// @match        https://www.weibo.com/*
// @match        https://d.weibo.com/*
// @match        https://s.weibo.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceURL
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_log
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    var handleWBFeedDetail = function (_this) {


    }

    // GM_notification({
    //     title:"通知标题",
    //     text: "neir内容",
    //     timeout: 2000
    // })

    var initProgressDiv = function(){
        // 尝试获取进度条
        let $progress = $("body").find('progress')

        // 进度条不存在时，生成一个
        if ($progress.length === 0) {
            var div = '<div style=" height: 50px; width: 200px; border: 2px solid #ddd; z-index: 9999999999999; position: fixed; top: 10px; right: 10px; background-color: antiquewhite;">'
            
            div += '<progress max="1" style="margin-left:10px;" />'

            div += '</div>'

            $("body").prepend(div)
        }
        
        $progress = $("body").find('progress')
        $progress[0].value = 0;
        
    }


    var handleFeedBody = function(_this){
        initProgressDiv();

        // console.warn(_this)
        var btn = _this.currentTarget
        btn = $(btn)

        console.log(btn.parent())

        var feedBody = btn.parents("footer").prev()
        // console.info(feedBody)
        var videoDiv = feedBody.find(".wbp-video")
        if(videoDiv){
            var v = videoDiv.find("video")
            if(v){
                var src = v.attr("src")
                console.log(src)
                src = "http:" + src

                // const a = $('<div>下载视频</div>');
                const a = $(`<button class="woo-like-main"><span class="woo-like-count">下载视频</span></button>`);
                
                a.click(function(){
                    GM_download({
                        url: src,
                        name: "视频.mp4",
                        onprogress: function(p) {
            
                            const value = p.loaded / p.total;
                            // progress.value = value;
                            $("body").find('progress')[0].value = value
                            console.warn(value)
                            if (value == 1) {
                                
                            }
                        },
                        onerror: function(e) {
            
                            console.error(e);
            
                            // Tip.error("视频下载出错！");
                        }
                    });
                });

                // btn.parents('footer').children().append(a)
                btn.parent().append(a)
                // btn.parents('footer').children().append('<mark>获取视频地址成功</mark>')

                // GM_setClipboard(src)
            }
        }
        
    }




    // 初始化按钮
    var initBtn = function () {
        // 获取所有的评论区
        var $likeBtn = $(".woo-like-count,.woo-like-liked")
        // window.zhao = $likeBtn
        for (var i = 0; i < $likeBtn.length; i++) {
        // for (var i = 0; i < 1; i++) {
            var $span = $($likeBtn[i])
            var boxFlex = $span.parents("footer").children()
            console.log(boxFlex)
            if (boxFlex.children().length > 3) {
                // 如果已经初始化则跳过
                continue;
            }

            const $btn = $('<button class="woo-like-main"><span class="woo-like-count">解析</span></button>')
            $btn.click(handleFeedBody);

            const $li = $(`<div class="woo-box-item-flex">`
                // + `<button class="woo-like-main"><span class="woo-like-count">解析</span></button>`
                // + `<button class="woo-like-main"><span class="woo-like-count">解析2</span></button>`
                // + `<button class="woo-like-main"><span class="woo-like-count">解析3</span></button>`
                + `</div>`);

            $li.append($btn)

            boxFlex.append($li);

            // $ul.append('<li><a href="javascript:void(0);" class="S_txt2" onclick="handleWBFeedDetail(this)">点击</a></li>')
        }
        // $(".WB_row_r4 li").css("width", "25%")
    }





    // setInterval(btn, 5000);
    setTimeout(initBtn, 2000);
    setTimeout(initBtn, 5000);
    setTimeout(initBtn, 10000);
    setTimeout(initBtn, 15000);
})();
