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
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    var handleWBFeedDetail = function (_this) {

        var $li = $(_this)

        // console.log($li)

        // 根据当前节点找到父节点，然后获取父节点的兄弟节点，再查找是否有video元素
        var $WB_feed_detail = $li.parents(".WB_feed_handle").prev()
        var videoDiv = $WB_feed_detail.find(".WB_video,.WB_video_a,.li_story,.WB_video_h5_v2 .WB_feed_spec_pic")
        console.log(videoDiv)
        if (videoDiv.length > 0) {
            const video_sources = videoDiv.attr("video-sources");
            // const action_data = videoDiv.attr("action-data");
            console.log(video_sources)

            // 多清晰度源
            const sources = video_sources.split("&");

            console.log(sources)

            // 尝试从 quality_label_list 中，获取视频地址
            const sources_filter = sources.filter(it => it.trim().indexOf("quality_label_list") == 0);

            console.log(sources_filter)

            if (sources_filter != null && sources_filter.length > 0) {
                const quality_label_list = sources_filter[0].trim();

                // 解码
                const source = decodeURIComponent(quality_label_list);

                const json = source.substring(source.indexOf("=") + 1).trim();

                console.warn(json)

                // 存在质量列表的值
                if (json.length > 0) {

                    const $urls = JSON.parse(json);

                    // 逐步下调清晰度，当前用户为未登录或非vip时，1080P+的地址为空
                    for (let i = 0; i < $urls.length; i++) {

                        const $url = $urls[i];

                        const src = $url.url.trim();

                        console.info(src)

                        // 是一个链接
                        if (src.indexOf("http") == 0) {

                            //     Core.log(`得到一个有效链接，${$url.quality_label}：${src}`);

                            $li.parents('.WB_handle').append('<mark>' + src + '</mark>')

                            GM_download({
                                url: src,
                                name: 'test',
                                onprogress: function(p) {
                    
                                    // const value = p.loaded / p.total;
                                    // progress.value = value;
                                },
                                onerror: function(e) {
                    
                                    console.error(e);
                    
                                    // Tip.error("视频下载出错！");
                                }
                            });

                            break;
                        }
                    }

                }

            }
        }





        // var list = $('.WB_feed_detail')
        // console.log(list)
        // console.log($(list[0]))
        // var a = $(list[0]).find(".WB_video,.WB_video_a,.WB_video_h5_v2")
        // console.log(a)
        // console.log(a.attr("video-sources"))

    }





    // 初始化按钮
    var initBtn = function () {
        // 获取所有的评论区
        var uls = $(".WB_row_line")
        window.zhao = uls
        for (var i = 0; i < uls.length; i++) {
            var $ul = $(uls[i])
            if ($ul.children().length > 4) {
                // 如果已经初始化则跳过
                continue;
            }

            const $li = $(`<li><a href='javascript:void(0)' class="S_txt2">—> 点击 <—</a></li>`);

            $li.click(handleWBFeedDetail);

            $ul.append($li);

            $ul.append('<li><a href="javascript:void(0);" class="S_txt2" onclick="handleWBFeedDetail(this)">点击</a></li>')
        }
        // $(".WB_row_r4 li").css("width", "25%")
    }





    // setInterval(btn, 5000);
    setTimeout(initBtn, 2000);
    setTimeout(initBtn, 5000);
    setTimeout(initBtn, 10000);
    setTimeout(initBtn, 15000);
})();