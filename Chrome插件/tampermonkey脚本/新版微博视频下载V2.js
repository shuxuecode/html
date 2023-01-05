// ==UserScript==
// @name         微博视频下载
// @namespace    http://tampermonkey.net/
// @version      2.0
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

    var initProgressDiv = function () {
        // 尝试获取进度条
        let $progress = $("body").find('progress')

        // 进度条不存在时，生成一个
        if ($progress.length === 0) {
            var div = '<div style=" height: 50px; width: 200px; border: 2px solid #ddd; z-index: 9999999999999; position: fixed; top: 10px; right: 10px; background-color: antiquewhite;">'

            div += '<div class="notification" style="">123</div>'
            div += '<progress max="1" style="margin-left:10px;" />'

            div += '</div>'

            $("body").prepend(div)
        }

        $progress = $("body").find('progress')
        $progress[0].value = 0;

    }


    var handleFeedBody = function (_this) {
        initProgressDiv();

        // console.warn(_this)
        var btn = _this.currentTarget
        btn = $(btn)

        console.log(btn.parent())

        var feedBody = btn.parents("footer").prev()
        // console.info(feedBody)
        var videoDiv = feedBody.find(".wbp-video")
        if (videoDiv) {
            var v = videoDiv.find("video")
            if (v && v.length) {
                $("body").find('.notification').html("解析视频成功")
                var src = v.attr("src")
                console.log(src)
                src = "http:" + src

                console.log(btn.parents('footer').offset())

                var progress = btn.parents('footer').find('progress')
                if (progress.length === 0) {
                    var width = btn.parents('footer').width()
                    var top = btn.parents('footer').offset().top
                    var left = btn.parents('footer').offset().left + width
                    var dd = $('<div style="position: absolute; top: ' + top + 'px; left: ' + left + 'px; width: 10em; height: 30px; z-index:999999;"><progress max="1"/></div>')
                    // var dd = $('<div style="position: relative; top: -30px; left: 10em; float: right; width: 10em; height: 30px;"><progress max="1"/></div>')
                    // btn.parents('footer').append(dd)
                    $("body").prepend(dd)
                }
                progress = btn.parents('footer').find('progress')
                progress[0].value = 0;

                // const a = $('<div>下载视频</div>');

                const a = $(`<button class="woo-like-main"><span class="woo-like-count">下载视频</span></button>`);

                var contentDiv = feedBody.find(".wbpro-feed-content")
                console.warn(contentDiv[0].innerText.indexOf('\n'))
                var txt = contentDiv[0].innerText
                var idx = txt.indexOf('\n')
                txt = txt.substring(0, idx)
                // var mp4Name = contentDiv[0].innerText.split(" ")[0] + ".mp4"
                var mp4Name = txt + ".mp4"
                console.log('contentDiv = ', contentDiv)

                a.click(function () {
                    GM_download({
                        url: src,
                        name: mp4Name, //"视频.mp4",
                        onprogress: function (p) {

                            const value = p.loaded / p.total;
                            progress[0].value = value;
                            $("body").find('progress')[0].value = value
                            console.warn(value)
                            if (value == 1) {

                            }
                        },
                        onerror: function (e) {

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


    var videoResolver = function ($footer) {
        // 获取主题内容
        var feedBody = $footer.prev()
        var videoDiv = feedBody.find(".wbp-video")
        var posterDiv = feedBody.find(".wbpv-poster")
        
        // 获取视频元素
        if ((videoDiv && videoDiv.length) || (posterDiv && posterDiv.length)) {
            console.log('feedBody ', feedBody)
            var v = videoDiv.find("video")
            if (v && v.length) {
                // 解析视频地址
                var src = v.attr("src")
                src = "http:" + src

                // 生成下载按钮
                const downloadBtn = $(`<button class="woo-like-main"><span class="woo-like-count">下载视频</span></button>`);
                downloadBtn.click(function () {
                    GM_download({
                        url: src,
                        // name: mp4Name, //"视频.mp4",
                        name: "视频.mp4",
                        onprogress: function (p) {
                            const value = p.loaded / p.total;
                            // progress[0].value = value;
                            // $("body").find('progress')[0].value = value
                            console.warn(value)
                            if (value == 1) {

                            }
                        },
                        onerror: function (e) {
                            console.error(e);
                            // Tip.error("视频下载出错！");
                        }
                    });
                });

                var itemDiv = $(`<div class="woo-box-item-flex"></div>`)
                itemDiv.append(downloadBtn)

                $footer.children().append(itemDiv)
            } else {
                const $btn = $('<div class="woo-box-item-flex"><button class="woo-like-main"><span class="woo-like-count">不是视频2</span></button></div>')
                $footer.children().append($btn)
            }
        } else {
            console.error('feedBody ', feedBody)
            const $btn = $('<div class="woo-box-item-flex"><button class="woo-like-main"><span class="woo-like-count">不是视频1</span></button></div>')
            $footer.children().append($btn)
        }
    }


    // 初始化按钮
    var initVideoBtn = function () {
        // 获取所有的评论区
        var $likeBtn = $(".woo-like-count,.woo-like-liked")
        for (var i = 0; i < $likeBtn.length; i++) {
            var $span = $($likeBtn[i])
            var boxFlex = $span.parents("footer").children()
            if (boxFlex.children().length > 3) {
                // 如果大于3则表示已经初始化过了，跳过
                continue;
            }

            videoResolver($span.parents("footer"))

            // const $btn = $('<button class="woo-like-main"><span class="woo-like-count">解析</span></button>')
            // $btn.click(handleFeedBody);

            // const $li = $(`<div class="woo-box-item-flex">`
            //     // + `<button class="woo-like-main"><span class="woo-like-count">解析</span></button>`
            //     // + `<button class="woo-like-main"><span class="woo-like-count">解析2</span></button>`
            //     // + `<button class="woo-like-main"><span class="woo-like-count">解析3</span></button>`
            //     + `</div>`);

            // $li.append($btn)

            // boxFlex.append($li);

            // $ul.append('<li><a href="javascript:void(0);" class="S_txt2" onclick="handleWBFeedDetail(this)">点击</a></li>')
        }
    }



    // setInterval(btn, 5000);
    // setTimeout(initVideoBtn, 2000);
    // setTimeout(initVideoBtn, 5000);
    // setTimeout(initVideoBtn, 10000);
    setTimeout(initVideoBtn, 15000);
})();
